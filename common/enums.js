import DEMOS from '../components/demo/index'

class EnumBase {
    constructor(map) {
        this.map = map
    }

    getAll() {
        return this.map
    }

    get(key) {
        return this.map[key]
    }
}

class DEMO_TYPE_LIST extends EnumBase {
    constructor() {
        let map = Object.keys(DEMOS).reduce((mapObject, demo) => {
            mapObject[demo] = {
                title: DEMOS[demo].getTitle(),
                component: DEMOS[demo]
            }

            return mapObject
        }, {})

        super(map)
    }
}

export const DEMO_TYPE_LIST_INSTANCE = new DEMO_TYPE_LIST()