const noCache = require('./lib/super-agent-relate').noCache
const request = require('superagent')
const cheerio = require('cheerio')

class CsdnSpy {
  static getTotalPageCount() {
    return new Promise((resolve, reject) => {
      request
        .get('http://so.csdn.net/so/search/s.do')
        .query({ "q": "react+native", "p": 1 })
        .use(noCache) // Prevents caching of *only* this request
        .end((err, res) => {
          err && reject && reject(err)

          let html = res.text
          const $ = cheerio.load(html)

          let pageMatch = $('.csdn-pagination span.text').text().match(/共(\d+)条/),
            itemCount = pageMatch.length == 2 ? +(pageMatch[1]) : 1,
            pageCount = itemCount / 10

          resolve && resolve(pageCount || 1)
        })
    })
  }

  static fetchByPage(page) {
    return new Promise((resolve, reject) => {
      request
        .get('http://so.csdn.net/so/search/s.do')
        .query({ "q": "react+native", "p": page })
        .use(noCache) // Prevents caching of *only* this request
        .end((err, res) => {
          if (err && reject) {
            reject(err)
          } else {
            let html = res.text,
              $ = cheerio.load(html),
              titles = $('.J_search dt a'),
              theLinks = []

            for (let i = 0; i < titles.length; i++) {
              let $title = $(titles[i])
              if ($title.html().indexOf('CSDN') < 0 && $title.attr('href') && $title.attr('href').indexOf('javascript')) {
                theLinks.push({
                  title: $title.text(),
                  url: $title.attr('href')
                })
              }
            }

            resolve && resolve(theLinks)
          }
        })
    })
  }
}

class SpyFacade {
  static detectCsdn() {
    let pageCount = CsdnSpy.getTotalPageCount()
    pageCount = Math.min(100, pageCount)

    let thePromises = []
    for (let i = 1; i <= pageCount; i++) {
      thePromises.push(CsdnSpy.fetchByPage(i))
    }

    return new Promise((resolve, reject) => {
      let theFinalResult = []
      Promise.all(thePromises).then(list => {
        theFinalResult = list.reduce((prevList, curList, index) => prevList.concat(curList), [])
      })

      resolve && resolve(theFinalResult)
    })
  }


}

module.exports = SpyFacade