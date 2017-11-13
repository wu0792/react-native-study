import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS, FlatList } from 'react-native'
import SummaryCard from '../components/summaryCard'
import BasicDetail from './basicDetail'
import Util from '../common/util'
import FetchData from '../common/fetchData'
import shortid from 'shortid'

export default class Basic extends React.Component {
    render() {
        return (
            <NavigatorIOS
                translucent={false}
                initialRoute={{
                    component: BasicList,
                    navigationBarHidden: true,
                    title: '返回'
                }}
                style={{ flex: 1 }}
            />
        )
    }
}

class BasicList extends React.Component {
    constructor(props) {
        super(props)

        this.onPressCard = this.onPressCard.bind(this)
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        FetchData.fetchBasicList().then((data) => {
            this.setState({ list: data.map(d => { return { ...d, key: shortid.generate() } }) })
        }, (err) => {
            console.warn(err)
        })
    }

    onPressCard(theProp) {
        this.props.navigator.push({
            component: BasicDetail,
            title: theProp.title,
            passProps: { passProps: theProp }
        })
    }

    render() {
        return (
            <FlatList
                data={this.state.list}
                renderItem={({ item, index }) => <SummaryCard url={item.url} title={item.title} onPress={this.onPressCard} />}
            />)
    }
}