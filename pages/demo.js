import React from 'react'
import SummaryCard from '../components/summaryCard'
import DemoDetail from './demoDetail'
import shortid from 'shortid'
import { DEMO_TYPE_LIST_INSTANCE as DEMO_TYPE_LIST } from '../common/enums'
import { StyleSheet, Text, View, ScrollView, Button, FlatList, NavigatorIOS } from 'react-native'

export default class Demo extends React.Component {
    render() {
        return (
            <NavigatorIOS
                translucent={false}
                initialRoute={{
                    component: DemoList,
                    navigationBarHidden: true,
                    title: '返回'
                }}
                style={{ flex: 1 }}
            />
        )
    }
}


class DemoList extends React.Component {
    constructor(props) {
        super(props)

        this.onPressCard = this.onPressCard.bind(this)

        this.state = {
            list: []
        }
    }

    componentWillMount() {
        this.setState({
            list: Object.keys(DEMO_TYPE_LIST.getAll()).map(t => {
                let theType = DEMO_TYPE_LIST.get(t)
                return { key: shortid.generate(), title: theType.title, component: theType.component }
            })
        })
    }

    onPressCard(theProp) {
        this.props.navigator.push({
            component: DemoDetail,
            title: theProp.title,
            passProps: { passProps: theProp }
        })
    }

    render() {
        return (
            <FlatList
                data={this.state.list}
                renderItem={({ item }) => {
                    return <SummaryCard title={item.title} data={item} onPress={this.onPressCard} />
                }}
            />
        )
    }
}