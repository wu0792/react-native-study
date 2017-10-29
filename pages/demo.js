import React from 'react'
import SummaryCard from '../components/summaryCard'
import { StyleSheet, Text, View, ScrollView, Button, Vibration } from 'react-native'

const DURATION = 10000
const PATTERN = [500, 500, 500, 500]

export default class Project extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    onPressVibrate(ev) {
        Vibration.vibrate(PATTERN, true)
    }

    onPressCancel(ev) {
        Vibration.cancel()
    }

    componentWillMount() {
        this.setState({
            list: [
                { title: '震动', component: '' }
            ]
        })
    }

    render() {
        return (
            // <ScrollView>
            //     {i.map(v => <Text key={v.key}>{v.key}</Text>)}
            // </ScrollView>

            // <ScrollView>
            //     <Button key={0} onPress={this.onPressVibrate} title="震动" ></Button>
            //     <Button key={1} onPress={this.onPressCancel} title="停止" ></Button>
            // </ScrollView>

            <FlatList
                data={this.state.list}
                renderItem={({ item, index }) => <SummaryCard key={index} url={item.url} title={item.title} onPress={this.onPressCard} />}
            />
        )
    }
}