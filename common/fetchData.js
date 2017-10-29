import API_URL from './apiUrl'

export default class FetchData {
    static _fetchGet(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => response.json()).then(data => resolve(data))
        })
    }

    static fetchBasicList() {
        return FetchData._fetchGet(API_URL.BASIC_LIST)
    }

    static fetchBasicDetail(id) {
        return FetchData._fetchGet(API_URL.BASIC_DETAIL + id)
    }
}