import React from 'react'
import { Text, Vibration, Button, View } from 'react-native'

const DURATION = 10000
const PATTERN = [500, 500, 500, 500]

export default class VibrationDemo extends React.Component {
    constructor(props) {
        super(props)

        this.onPressVibrate = this.onPressVibrate.bind(this)
        this.onPressCancel = this.onPressCancel.bind(this)
    }

    static getTitle() {
        return 'Vibration震动'
    }

    onPressVibrate() {
        Vibration.vibrate(PATTERN, true)
    }

    onPressCancel() {
        Vibration.cancel()
    }

    componentWillUnmount() {
        this.onPressCancel()
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', paddingTop: 50 }} >
                <Button onPress={this.onPressVibrate} title="震动" ></Button>
                <Button onPress={this.onPressCancel} title="停止震动" ></Button>
            </View>)
    }
}