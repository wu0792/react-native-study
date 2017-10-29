import ReactNativeComponentTree from 'react-native/Libraries/Renderer/shims/ReactNativeComponentTree'

export default class Util {
    static getComponentByTarget(target) {
        const elem = ReactNativeComponentTree.getInstanceFromNode(target)
        return elem || null
    }
}