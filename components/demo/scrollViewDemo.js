import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import shortid from 'shortid'

export default class ScrollViewDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    static getTitle() {
        return 'ScrollView-经典滚动条容器.'
    }

    render() {
        let array = Array(1000).fill(0).map((val, index) => {
            return index
        })

        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text>ScrollView是最经典滚动条容器，内部子项一次性全部生成，简单易用，但缺点也很明显，当子项数量过多时会有明显的性能问题。下面这个DEMO的子项数量是1000</Text>
                <ScrollView style={{ flex: 1 }} >
                    {array.map(val => <Text key={shortid.generate()} >{val}</Text>)}
                </ScrollView>
            </View>)
    }
}