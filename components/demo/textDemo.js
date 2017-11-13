import React from 'react'
import { Text, View } from 'react-native'

export default class ViewDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    static getTitle() {
        return 'Text只读文本'
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }} >
                <Text>默认样式</Text>
                <Text style={{ marginTop: 100 }} >
                    Text支持文本的内嵌，内嵌文本的样式等优先级高于外层，这就是
                    <Text style={{ fontWeight: 'bold' }}>内嵌Text</Text>，Text内还可以嵌套View，比如：
                    <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                </Text>
            </View>)
    }
}