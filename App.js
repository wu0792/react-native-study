import React from 'react';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native'
import { Constants } from 'expo'
import { BasicPage, DemoPage, SettingPage } from './pages/index'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTabIndex: 0
    }
  }

  onPressTab(i) {
    this.setState({
      selectedTabIndex: i
    })
  }

  genTabItem(index, title, icon, selectedIcon, cont) {
    return (
      <TabBarIOS.Item
        title={title}
        icon={icon}
        selectedIcon={selectedIcon}
        selected={this.state.selectedTabIndex === index}
        onPress={() => this.onPressTab(index)}>
        {cont}
      </TabBarIOS.Item>
    )
  }

  render() {
    return (
      <View style={styles.root}>
        <TabBarIOS
          unselectedTintColor="gray"
          tintColor="red"
          style={styles.container}>

          {this.genTabItem(0, '概念', require('./images/icon0.png'), require('./images/icon0-active.png'), <BasicPage />)}

          {this.genTabItem(1, '实例', require('./images/icon1.png'), require('./images/icon1-active.png'), <DemoPage />)}

          {this.genTabItem(2, '设置', require('./images/icon2.png'), require('./images/icon2-active.png'), <SettingPage />)}

        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
  container: {
    flex: 1
  }
})
