import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {NavHeader} from '../../components';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export class VisitHistory extends React.Component {
  state = {
    data: [
      {color: 'purple', param: '8:00AM-9:00AM', num: 1},
      {color: 'purple', param: '9:00AM-10:00AM', num: 2},
      {color: 'purple', param: '10:00AM-11:00AM', num: 3},
      {color: 'yellow', param: '11:00AM-12:00PM', num: 4},
      {color: 'yellow', param: '12:00PM-01:00PM', num: 5},
      {color: 'yellow', param: '01:00PM-02:00PM', num: 6},
    ],
  };
  renderDesign = (item, index) => (
    <View
      style={{
        height: h('8%'),
        width: w('100%'),
        //backgroundColor: 'red',
        flexDirection: 'row',
        marginBottom: h('2%'),
        marginTop: index === 0 ? h('2%') : 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.4,
        borderBottomColor: '#707070',
        borderRightColor: '#707070',
      }}>
      <View
        style={{
          height: '100%',
          width: '20%',
          //backgroundColor: 'blue',
          borderLeftWidth: 5,
          borderLeftColor: item.color,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SimpleLineIcons name={'user'} size={25} color={'skyblue'} />
        <Text
          style={{
            fontSize: 8,
            color: 'black',
          }}>
          {item.num}
        </Text>
      </View>
      <View
        style={{
          height: '100%',
          width: '65%',
          //backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
          }}>
          {item.param}
        </Text>
      </View>
      <View
        style={{
          height: '100%',
          width: '15%',
          //backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SimpleLineIcons name={'arrow-right'} size={30} color={'skyblue'} />
      </View>
    </View>
  );
  render() {
    return (
      <View
        style={{
          flex: 1,
          //backgroundColor: 'red',
        }}>
        <NavHeader
          title={'Book Appointment'}
          leftIc={'arrow-back-ios'}
          leftPressed={() => {
            this.props.navigation.navigate('Doctor');
          }}
        />
        <View
          style={{
            height: '8%',
            width: '100%',
            //backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
              color: '#000',
            }}>
            Select time from available Slots
          </Text>
        </View>
        <Text
          style={{
            fontSize: 22,
            color: 'black',
          }}>
          FEB 25
        </Text>
        <FlatList
          data={this.state.data}
          renderItem={({item, index}) => this.renderDesign(item, index)}
          keyExtractor={(index, item) => item.toString()}
        />
      </View>
    );
  }
}
