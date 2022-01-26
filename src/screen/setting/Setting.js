import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {AppBtn, AppInput, NavHeader} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export class Setting extends React.Component {
  render() {
    return (
      <View
        style={{
          //backgroundColor: '#faf',
          height: '100%',
          width: '100%',
        }}>
        <NavHeader title={'Settings'} />

        <View
          style={{
            height: h('11%'),
            //backgroundColor: '#a23',
            flexDirection: 'row',
            margin: '2%',
            borderBottomWidth: 0.2,
          }}>
          <View
            style={{
              //backgroundColor: '#d2a',
              height: '100%',
              width: '40%',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            <Image
              style={{
                resizeMode: 'cover',
                height: '60%',
                width: '60%',
              }}
              source={require('../../assets/1.jpg')}
            />
          </View>

          <View
            style={{
              //backgroundColor: '#af3',
              height: '100%',
              width: '100%',
            }}>
            <View
              style={{
                height: '50%',
                width: '100%',
                //backgroundColor: '#f2f',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  marginTop: '3%',
                }}>
                Joan Diaz
              </Text>
            </View>
            <View
              style={{
                //backgroundColor: '#ffa',
                height: '50%',
                width: '100%',
              }}>
              <TextInput
                style={{
                  color: 'black',
                }}
                placeholder="Medical Specialist"
                placeholderTextColor={'black'}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            height: h('11%'),
            //backgroundColor: '#a23',
            flexDirection: 'row',
            marginTop: '2%',
            borderBottomWidth: 0.2,
          }}>
          <View
            style={{
              //backgroundColor: '#d2a',
              height: '100%',
              width: '40%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Fontisto name="doctor" color={'#5C47C4'} size={25} />
          </View>

          <View
            style={{
              //backgroundColor: '#af3',
              height: '100%',
              width: '100%',
            }}>
            <View
              style={{
                height: '50%',
                width: '100%',
                //backgroundColor: '#f2f',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  marginTop: '3%',
                }}>
                Doctors
              </Text>
            </View>
            <View
              style={{
                //backgroundColor: '#ffa',
                height: '50%',
                width: '100%',
              }}>
              <TextInput
                style={{
                  color: 'black',
                }}
                placeholder="Select or update your doctor"
                placeholderTextColor={'black'}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            height: h('11%'),
            //backgroundColor: '#a23',
            flexDirection: 'row',
            marginTop: '2%',
            borderBottomWidth: 0.2,
          }}>
          <View
            style={{
              //backgroundColor: '#d2a',
              height: '100%',
              width: '40%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome5 name={'lock'} size={25} color={'#5C47C4'} />
          </View>

          <View
            style={{
              //backgroundColor: '#af3',
              height: '100%',
              width: '60%',
            }}>
            <View
              style={{
                height: '50%',
                width: '100%',
                //backgroundColor: '#f2f',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  marginTop: '3%',
                }}>
                Reset Password
              </Text>
            </View>
            <View
              style={{
                //backgroundColor: '#ffa',
                height: '50%',
                width: '100%',
              }}>
              <TextInput
                placeholder="Reset your password"
                placeholderTextColor={'black'}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            height: h('11%'),
            //backgroundColor: '#a23',
            flexDirection: 'row',
            marginTop: '2%',
            borderBottomWidth: 0.2,
          }}>
          <View
            style={{
              //backgroundColor: '#d2a',
              height: '100%',
              width: '40%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome5 name={'handshake'} size={30} color={'#5C47C4'} />
          </View>

          <View
            style={{
              //backgroundColor: '#af3',
              height: '100%',
              width: '60%',
            }}>
            <View
              style={{
                height: '50%',
                width: '100%',
                //backgroundColor: '#f2f',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  marginTop: '3%',
                }}>
                Terms & Conditions
              </Text>
            </View>
            <View
              style={{
                //backgroundColor: '#ffa',
                height: '50%',
                width: '100%',
              }}>
              <TextInput
                placeholder="Upon you are agreed"
                placeholderTextColor={'black'}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            height: h('11%'),
            //backgroundColor: '#a23',
            flexDirection: 'row',
            marginTop: '2%',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              //backgroundColor: '#d2a',
              height: '100%',
              width: '40%',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'black',
            }}>
            <SimpleLineIcons name={'logout'} size={25} color={'#5C47C4'} />
          </View>

          <View
            style={{
              //backgroundColor: '#af3',
              height: '100%',
              width: '60%',
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                //backgroundColor: '#f2f',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  marginTop: '3%',
                }}>
                Logout
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
