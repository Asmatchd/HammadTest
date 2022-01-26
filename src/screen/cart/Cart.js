import React from 'react';
import {View, Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import { AppBtn } from '../../components';
export class Cart extends React.Component {
  state = {
    data: [
      {
        Name: 'Chicken tikka piece',
        Price: 'Rs 160.00',
        num: 0,
      },
      {
        Name: 'Chicken Shawarma',
        Price: 'Rs 80.00',
        num: 0,

      },
      {
        Name: 'Beef Kibab',
        Price: 'Rs 200.00',
        num: 0,

      },
      {
        Name: 'Chicken Malai Boti',
        Price: 'Rs 260.00',
        num: 0,

      },
      {
        Name: 'Chicken Burger',
        Price: 'Rs 120.00',
        num: 0,
      },
    ],
   
  };

  onSubtract =(item,index)=>{
    let Data =[...this.state.data];
    Data[index].num-= 1;
    this.setState({data: Data});
  };
  onAdd =(items,index) => {
    let Data = [...this.state.data];
    Data[index].num += 1;
    this.setState({data: Data})
  };
  render() {
    // let totalPrice = 0;
    // this.state.data.forEach(item =>{
    //   totalPrice += item.Data*item.Price;
    // });
    const{item}=this.props
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <View
          style={{
            height: 60,
            //backgroundColor: '#faf',
            flexDirection: 'row',
            borderBottomWidth: 0.1,
            borderBottomColor: '#707070',
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
            <Materiallcons
              name={'arrow-back-ios'}
              size={25}
              color={'#FD5867'}
            />
          </TouchableOpacity>
          <View
            style={{
              height: '100%',
              width: '85%',
              //backgroundColor: 'orange',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Your Cart
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 217,
            width: '100%',
            //backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#707070',
            borderRadius: 5,
            borderWidth: 0.6,
          }}>
          <FlatList
          item= {this.props}
          onSubtract={()=>this.onSubtract(item,index)}
          onAdd={()=> this.onAdd(item,index)}
            data={this.state.data}
            renderItem={({item, index}) => (
              <View
                style={{
                  height: h('4%'),
                  width: w('90%'),
                  //backgroundColor: '#fff',
                  alignItems: 'center',
                  flexDirection: 'row',
                  //justifyContent: 'space-evenly',
                  marginBottom: h('2%'),
                  marginTop: index === 0 ? h('2%') : 0,
                }}>
                <TouchableOpacity
                  onPress={this.props.onSubtract}
                  style={{
                    height: '100%',
                    width: '10%',
                    //backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Entypo name={'squared-minus'} size={20} color={'#FD5867'} />
                </TouchableOpacity>
                <View
                  style={{
                    height: '100%',
                    width: '5%',
                    //backgroundColor: 'blue',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    {item.num}
                  </Text>
                </View>
                <TouchableOpacity
                onPress={this.props.onAdd}
                  style={{
                    height: '100%',
                    width: '10%',
                    //backgroundColor: 'purple',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Materiallcons name={'add-box'} size={20} color={'#FD5867'} />
                </TouchableOpacity>
                <View
                  style={{
                    height: '100%',
                    width: '50%',
                    //backgroundColor: 'orange',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                    }}>
                    {item.Name}
                  </Text>
                </View>
                <View
                  style={{
                    height: '100%',
                    width: '30%',
                    //backgroundColor: 'purple',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                {item.Price*item.num}
                  </Text>
                </View>
              </View>
            )}
            data={this.state.data}
            keyExtractor={(index, item) => item.toString()}
          />
        </View>
        <View
          style={{
            height: '7%',
            width: '100%',
            //backgroundColor: 'red',
          }}
        />
        <View
          style={{
            height: '10%',
            width: '100%',
            //backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: '50%',
              width: '100%',
              //backgroundColor: 'orange',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '50%',
                //backgroundColor: 'green',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                }}>
                Subtotal
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                width: '50%',
                //backgroundColor: 'green',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#707070',
                  fontSize: 20,
                }}>
                Rs: 160.00
              </Text>
            </View>
          </View>

          <View
            style={{
              height: '50%',
              width: '100%',
              //backgroundColor: 'orange',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '50%',
                //backgroundColor: 'green',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                }}>
                Delivery fee
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                width: '50%',
                //backgroundColor: 'green',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#707070',
                  fontSize: 20,
                }}>
                Rs: 160.00
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: '9%',
            width: '100%',
            //backgroundColor: 'red',
            borderBottomWidth: 0.2,
            borderTopWidth: 0.2,
            borderBottomColor: '#707070',
            borderTopColor: '#707070',
          }}>
          <View
            style={{
              height: '100%',
              width: '100%',
              //backgroundColor: 'orange',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '12%',
                //backgroundColor: 'green',
                justifyContent: 'center',
                //alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                }}>
                Total
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                width: '38%',
                //backgroundColor: 'green',
                justifyContent: 'center',
                //alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#707070',
                  fontSize: 20,
                }}>
                (Inc.GST)
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                width: '50%',
                //backgroundColor: 'green',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#707070',
                  fontSize: 20,
                }}>
                Rs: 160.00
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 150,
            width: '100%',
            //backgroundColor: 'red',
            borderBottomWidth: 0.2,
            borderTopWidth: 0.2,
            borderBottomColor: '#707070',
            borderTopColor: '#707070',
          }}>
          <View
            style={{
              height: '35%',
              width: '100%',
              //backgroundColor: 'green',
              flexDirection: 'row',
              borderBottomWidth: 0.2,
              borderBottomColor: '#707070',
            }}>
            <View
              style={{
                height: '100%',
                width: '28%',
                //backgroundColor: 'orange',
                alignItems: 'flex-start',
                justifyContent: 'center',
               
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                }}>
                Contact Details
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                width: '60%',
                //backgroundColor: 'orange',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#707070',
                }}>
                Shiekhasadde@gmail.com
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                width: '14%',
                //backgroundColor: 'orange',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Materiallcons
                name={'arrow-forward-ios'}
                size={30}
                color={'#FD5867'}
              />
            </View>
          </View>


          <View
            style={{
              height: '40%',
              width: '100%',
              //backgroundColor: 'orange',
              borderBottomWidth: 0.2,
              borderBottomColor: '#707070',
            }}>
            <View
              style={{
                height: '60%',
                width: '100%',
                //backgroundColor: 'green',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: '100%',
                  width: '28%',
                  //backgroundColor: 'orange',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                  }}>
                  Delivery Details
                </Text>
              </View>
              <View
                style={{
                  height: '100%',
                  width: '60%',
                  //backgroundColor: 'orange',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#707070',
                  }}>
                  Home
                </Text>
              </View>
              <View
                style={{
                  height: '100%',
                  width: '14%',
                  //backgroundColor: 'orange',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Materiallcons
                  name={'arrow-forward-ios'}
                  size={30}
                  color={'#FD5867'}
                />
              </View>
            </View>
            <Text
              style={{
                color: '#707070',
                fontSize: 15,
              }}>
              Street Address,House#Colony.
            </Text>
          </View>


          <View
            style={{
              //backgroundColor: 'green',
              height: '25%',
              width: '100%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '40%',
                //backgroundColor: 'blue',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                }}>
                Delivery time
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                width: '60%',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#707070',
                  fontSize: 18,
                }}>
                20 MIN
              </Text>
            </View>
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
                Order Now
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}
