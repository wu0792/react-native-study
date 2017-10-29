const URL_ROOT = 'http://192.168.1.4:3000/'

const URL_PART = {
    BASIC_LIST: 'basic-list',
    BASIC_DETAIL: 'basic-detail'
}

let exportsData = {}
let keys = Object.keys(URL_PART)
keys.forEach((key) => {
    exportsData[key] = URL_ROOT + URL_PART[key] + '/'
})

export default exportsData