import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        fontWeight: 'normal'
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: 'red',
    },
})

export default class ViewDemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isActive: false
        }
    }

    static getTitle() {
        return 'StyleSheet-样式的使用'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>这里使用的是View容器的默认样式</Text>
                <Text style={[styles.title, this.state.isActive && styles.activeTitle]}>hey，这里使用到了内部样式，优先级更高</Text>
            </View>)
    }
}