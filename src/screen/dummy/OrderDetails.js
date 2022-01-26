import React from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AppBtn, AppInput} from '../../components';
export class OrderDetails extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            height: 60,
            //backgroundColor: '#faf',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
          onPress={()=>{
              this.props.navigation.navigate('TabNavigator');
          }}
            style={{
              height: '100%',
              width: '15%',
              //backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Materiallcons name={'arrow-back-ios'} size={25} color={'black'} />
          </TouchableOpacity>
          <View
            style={{
              height: '100%',
              width: '85%',
              //backgroundColor: 'orange',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
              }}>
              Order Details
            </Text>
          </View>
        </View>

        <View
          style={{
            height: '60%',
            width: '98%',
            //backgroundColor: 'red',
            margin: 5,
            borderWidth: 0.1,
            borderColor: '#272727',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: h('20%'),
              width: w('90%'),
              backgroundColor: '#fff',
              //alignItems: 'center',
              //flexDirection: 'row',
              //justifyContent: 'space-evenly',
              //marginBottom: h('2%'),
            }}>
            <View
              style={{
                height: '40%',
                width: '100%',
                //backgroundColor: 'pink',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#E1E1E1',
              }}>
              <View
                style={{
                  height: '100%',
                  width: '20%',
                  //backgroundColor: 'orange',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome5
                  name={'clipboard-check'}
                  size={50}
                  color={'#E94453'}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '80%',
                  //backgroundColor: 'purple',
                }}>
                <Text
                  style={{
                    color: '#A1A1A1',
                  }}>
                  Order Details
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'black',
                  }}>
                  Order 3
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '30%',
                width: '100%',
                //backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 41,
                  width: '60%',
                  //backgroundColor: 'orange',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#E1E1E1',
                }}>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  1 x Family Meal
                </Text>
              </View>
            </View>

            <View
              style={{
                height: '30%',
                width: '100%',
                //backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 41,
                  width: '60%',
                  //backgroundColor: 'orange',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#E1E1E1',
                }}>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  2 x Biryani lover
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: h('25%'),
              width: w('90%'),
              backgroundColor: '#fff',
              //alignItems: 'center',
              //flexDirection: 'row',
              //justifyContent: 'space-evenly',
              //marginBottom: h('2%'),
            }}>
            <View
              style={{
                height: '40%',
                width: '100%',
                //backgroundColor: 'pink',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#E1E1E1',
              }}>
              <View
                style={{
                  height: '100%',
                  width: '20%',
                  //backgroundColor: 'orange',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome5 name={'store'} size={25} color={'#E94453'} />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '80%',
                  //backgroundColor: 'purple',
                }}>
                <Text
                  style={{
                    color: '#A1A1A1',
                  }}>
                  Restaurant
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'black',
                  }}>
                  Mehmaan Siraaye
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '30%',
                width: '100%',
                //backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 41,
                  width: '60%',
                  //backgroundColor: 'purple',
                  flexDirection: 'row',
                  borderBottomColor: '#E1E1E1',
                  borderBottomWidth: 0.6,
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '20%',
                    //backgroundColor: 'yellow',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome5
                    name={'phone-alt'}
                    size={20}
                    color={'#A1A1A1'}
                  />
                </View>
                <View
                  style={{
                    height: '100%',
                    width: '80%',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    +92 321 33 45718
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: '30%',
                width: '100%',
                //backgroundColor: 'green',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 41,
                  width: '70%',
                  //backgroundColor: 'purple',
                  flexDirection: 'row',
                  borderBottomColor: '#E1E1E1',
                  borderBottomWidth: 0.6,
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '20%',
                    //backgroundColor: 'yellow',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name={'location-sharp'}
                    size={20}
                    color={'#A1A1A1'}
                  />
                </View>
                <View
                  style={{
                    height: '100%',
                    width: '80%',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      //maxLength: 6,
                    }}>
                    Office 37, 2nd Floor, Al Rehman Trade Center Sargodha,
                    Pakistan
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              height: h('15%'),
              width: w('90%'),
              backgroundColor: '#fff',
              //alignItems: 'center',
              //flexDirection: 'row',
              //justifyContent: 'space-evenly',
              //marginBottom: h('2%'),
            }}>
            <View
              style={{
                height: '50%',
                width: '100%',
                //backgroundColor: 'pink',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#E1E1E1',
              }}>
              <View
                style={{
                  height: '100%',
                  width: '20%',
                  //backgroundColor: 'orange',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome5 name={'motorcycle'} size={25} color={'#E94453'} />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '80%',
                  //backgroundColor: 'purple',
                }}>
                <Text
                  style={{
                    color: '#A1A1A1',
                  }}>
                  Rider
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'black',
                  }}>
                  Adnan Tahir
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '50%',
                width: '100%',
                //backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 41,
                  width: '60%',
                  //backgroundColor: 'purple',
                  flexDirection: 'row',
                  borderBottomColor: '#E1E1E1',
                  borderBottomWidth: 0.6,
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '20%',
                    //backgroundColor: 'yellow',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome5
                    name={'phone-alt'}
                    size={20}
                    color={'#A1A1A1'}
                  />
                </View>
                <View
                  style={{
                    height: '100%',
                    width: '80%',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    +92 321 33 45718
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: '15%',
            width: '100%',
            //backgroundColor: 'red',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '50%',
              //backgroundColor: 'orange',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#A1A1A1',
              }}>
              {' '}
              Subtotal
            </Text>
            <Text
              style={{
                color: '#A1A1A1',
              }}>
              Delivery Fee
            </Text>
            <Text
              style={{
                color: '#A1A1A1',
              }}>
              Discount
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '50%',
              //backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                color: '#A1A1A1',
              }}>
              Rs 2598
            </Text>
            <Text
              style={{
                color: '#A1A1A1',
              }}>
              Rs 30.00
            </Text>
            <Text
              style={{
                color: '#A1A1A1',
              }}>
              Rs0.00
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '5%',
            width: '100%',
            //backgroundColor: 'red',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '50%',
              //backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Total
            </Text>
          </View>

          <View
            style={{
              height: '100%',
              width: '50%',
              //backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Rs 2628
            </Text>
          </View>
        </View>
        <View
        style={[
          {
            //backgroundColor: '#faf',
            height: '10%',
            width: '100%',
            alignItems: 'center',
            justifyContent:'center',
          },
        ]}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF5867',
            height: 50,
            width: '85%',
            alignItems: 'center',
            justifyContent: 'center',
            //borderRadius: 13,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
            }}>
                Place Order
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}
