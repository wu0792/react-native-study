let lib = {
    noCache: function (request, mockIE) {
        request.set('X-Requested-With', 'XMLHttpRequest')
        request.set('Expires', '-1')
        request.set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1,private')

        return request
    }
}

module.exports = lib