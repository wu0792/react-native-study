import React from 'react'
import { Text, ActivityIndicator, Button, View } from 'react-native'

const DURATION = 10000
const PATTERN = [500, 500, 500, 500]

export default class ActivityIndicatorDemo extends React.Component {
    constructor(props) {
        super(props)

        this.onPressLoading = this.onPressLoading.bind(this)
        this.onPressCancel = this.onPressCancel.bind(this)

        this.state = {
            animating: true
        }
    }

    static getTitle() {
        return 'activityIndicator活动指示器'
    }

    onPressLoading(ev) {
        this.setState({
            animating: true
        })
    }

    onPressCancel(ev) {
        this.setState({
            animating: false
        })
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', paddingTop: 50 }} >
                <ActivityIndicator animating={this.state.animating} />
                <Button onPress={this.onPressLoading} title="LOADING" ></Button>
                <Button onPress={this.onPressCancel} title="停止LOADING" ></Button>
            </View>)
    }
}