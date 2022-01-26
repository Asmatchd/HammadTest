import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavHeader} from '../../components/NavHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AppInput} from '../../components/AppInput';
export class Dashboard extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <NavHeader title={'Dashboard'} />
        <View
          style={{
            //backgroundColor: 'green',
            height: '20%',
            marginTop: '8%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('Doctor');
          }}
            style={{
              height: '94%',
              width: '94%',
              borderColor: '#5C47C4',
              borderWidth: 1,
              borderRadius: 7,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                //backgroundColor: 'red',
                height: '70%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '3%',
              }}>
              <FontAwesome5
                name={'calendar-check'}
                size={50}
                color={'#FBB03B'}
              />
              <Fontisto name="doctor" color={'#5C47C4'} size={30} />
            </View>

            <View
              style={{
                //backgroundColor: 'orange',
                height: '10%',
                width: '100%',
              }}
            />
            <View
              style={{
                //backgroundColor: 'blue',
                height: '20%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Get Doctor Appointment
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            //backgroundColor: 'green',
            height: '20%',
            marginTop: '8%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('Cart');
          }}
            style={{
              height: '94%',
              width: '94%',
              borderColor: '#5C47C4',
              borderWidth: 1,
              borderRadius: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                //backgroundColor: 'red',
                height: '70%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '3%',
              }}>
              <FontAwesome
                name={'calendar-check-o'}
                size={50}
                color={'#FBB03B'}
              />
              <FontAwesome5 name={'address-book'} size={30} color={'#5C47C4'} />
            </View>

            <View
              style={{
                //backgroundColor: 'orange',
                height: '10%',
                width: '100%',
              }}
            />
            <View
              style={{
                //backgroundColor: 'blue',
                height: '20%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Go to Cart
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            //backgroundColor: 'green',
            height: '20%',
            marginTop: '8%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('OrderDetails')
          }}
            style={{
              height: '94%',
              width: '94%',
              borderColor: '#5C47C4',
              borderWidth: 1,
              borderRadius: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                //backgroundColor: 'red',
                height: '70%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '3%'
              }}>
              <FontAwesome5 name={'hospital-alt'} size={50} color={'#FBB03B'} />
              <FontAwesome5 name={'user-injured'} size={30} color={'#5C47C4'} />
            </View>

            <View
              style={{
                //backgroundColor: 'orange',
                height: '10%',
                width: '100%',
              }}
            />
            <View
              style={{
                //backgroundColor: 'blue',
                height: '20%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Order Details
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
