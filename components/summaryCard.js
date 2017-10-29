import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { MIcon } from './vectorIcon'
import { HIGH_LIGHT_OPACITY, ICON_DEFAULT_SIZE, ICON_DEFAULT_COLOR } from '../common/consts'

export default class SummaryCard extends React.Component {
    constructor(props) {
        super(props)
    }

    onPress() {
        this.props.onPress(this.props)
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={HIGH_LIGHT_OPACITY} onPress={this.onPress.bind(this)}>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <MIcon name='chevron-right' size={ICON_DEFAULT_SIZE} color={ICON_DEFAULT_COLOR} />
                </View>
            </TouchableOpacity>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        height: 50
    },
    title: {
        flexGrow: 1,
        paddingLeft: 5
    }
})