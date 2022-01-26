import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';

export class NavHeader extends React.Component {
  render() {
    return (
      <View
        style={{
          height: 60,
           backgroundColor: '#5C47C4',
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderColor: 'red',
        }}>
        <TouchableOpacity
          onPress={this.props.leftPressed}
          style={{
            height: '100%',
            width: '15%',
            // backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Materiallcons name={this.props.leftIc} size={25} color={'#fff'} />
        </TouchableOpacity>
        <View
          style={{
            height: '100%',
            width: '70%',
            // backgroundColor: '#a3a',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
            }}>
            {this.props.title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.props.rightPressed}
          style={{
            height: '100%',
            width: '15%',
            // backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.rightIc} size={25} color={'red'} />
        </TouchableOpacity>
      </View>
    );
  }
}
