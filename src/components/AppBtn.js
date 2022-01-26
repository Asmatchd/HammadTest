import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export class AppBtn extends React.Component {
  render() {
    return (
      <View
        style={[
          {
            // backgroundColor: '#faf',
            width: '100%',
            alignItems: 'center',
          },
          this.props.st,
        ]}>
        <TouchableOpacity
          {...this.props}
          style={{
            backgroundColor: '#FBB03B',
            height: 50,
            width: '70%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 13,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
            }}>
            {this.props.txt}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
