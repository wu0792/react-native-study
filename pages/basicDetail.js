import React from 'react'
import { NavigatorIOS, View, Text, WebView } from 'react-native'
import FetchData from '../common/fetchData'

export default class BasicDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // detail: {},
            // id: this.props.passProps.id,
            url: this.props.passProps.url
        }
    }

    // componentWillMount() {
    //     FetchData.fetchBasicDetail(this.state.id).then((data) => {
    //         this.setState({ detail: data })
    //     })
    // }

    render() {
        return (
            <WebView
                source={{ uri: this.state.url }}
            // style={{ marginTop: 20 }}
            />
            // <View style={{ flex: 1, backgroundColor: 'grey' }} ><Text style={{ flex: 1, backgroundColor: 'skyblue' }}>{JSON.stringify(this.state.detail, null, 1)}</Text></View>
        )
    }
}