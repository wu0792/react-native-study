import React from 'react'
import { View } from 'react-native'

export default class DemoDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    getRenderComponent() {
        let TheComponent = this.props.passProps.data.component
        return <TheComponent />
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.getRenderComponent()}
            </View>
        )
    }
}