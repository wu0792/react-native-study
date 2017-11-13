import React from 'react'
import { Text, View, FlatList } from 'react-native'
import shortid from 'shortid'

export default class FlatListDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    static getTitle() {
        return 'FlatList-更高效的滚动条容器.'
    }

    render() {
        let array = Array(1000).fill(0).map((val, index) => {
            return { key: index }
        })

        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text>FlatList更为灵活一些，子项是在需要render时才即时渲染，在滚动出屏时自动销毁，有效减少内存浪费，下面这个DEMO的子项数量是1000</Text>
                <FlatList style={{ flex: 1 }} data={array} renderItem={({ item }) => <Text>{item.key}</Text>} />
            </View>)
    }
}