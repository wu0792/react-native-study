import React from 'react'
import { Text, View } from 'react-native'

export default class ViewDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    static getTitle() {
        return 'View视图'
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#aaa' }} >
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#4aa' }} >
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#3aa' }} >
                        <Text>1</Text>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column', backgroundColor: '#4aa' }} >
                        <Text>2</Text>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#5aa' }} >
                            <Text>2.1</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'column', backgroundColor: '#6aa' }} >
                            <Text>2.2</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#7aa' }} >
                    <View style={{ flex: 2, flexDirection: 'column', backgroundColor: '#aa8' }} >
                        <Text>3</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#9aa' }} >
                        <Text>4</Text>
                    </View>
                </View>
            </View>)
    }
}