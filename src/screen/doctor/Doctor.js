import React from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {AppBtn, NavHeader} from '../../components';
export class Doctor extends React.Component {
  state = {
    modalVisible: false,
    modalVisible2: false,
  };
  render() {
    return (
      <View
        style={{
          //backgroundColor: '#fafa',
          height: '100%',
          width: '100%',
        }}>
        <NavHeader
          title={'Doctor'}
          leftIc={'arrow-back-ios'}
          leftPressed={() => {
            this.props.navigation.navigate('TabNavigator');
          }}
        />
        <View
          style={{
            height: '40%',
            width: '100%',
            //backgroundColor: 'yellow',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: '60%',
              width: '100%',
              //backgroundColor: 'green',
              overflow: 'hidden',
            }}>
            <Image
              style={{
                resizeMode: 'contain',
                height: '100%',
                width: '100%',
              }}
              source={require('../../assets/1.jpg')}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
            }}>
            Dr.Testing Name
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
            }}>
            Location
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
            }}>
            MBBS
          </Text>
        </View>
        <View
          style={{
            height: '55%',
            width: '100%',
            //backgroundColor: 'red',
            //justifyContent: 'center',
            //alignItems: 'center',
          }}>
          <View
            style={{
              height: '14%',
              width: '100%',
              backgroundColor: '#5C47C4',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible: true});
              }}
              style={{
                height: '100%',
                width: '50%',
                //backgroundColor: '#fa3',
                alignItems: 'center',
                justifyContent: 'center',
                // borderBottomWidth: 4,
                // borderBottomColor: '#FBB03B',
              }}>
              <Text>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible2: true});
              }}
              style={{
                height: '100%',
                width: '50%',
                //backgroundColor: '#fa3',
                alignItems: 'center',
                justifyContent: 'center',
                // borderBottomWidth: 4,
                // borderBottomColor: '#FBB03B',
              }}>
              <Text>Visit History</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '63%',
              width: '100%',
              backgroundColor: '#faf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setState({modalVisible: true});
              }}>
              <View
                style={{
                  height: '75%',
                  width: '100%',
                  //backgroundColor: '#ff1',
                  //alignItems: 'flex-end',
                  //justifyContent: 'flex-end',
                }}>
                <NavHeader
                  title={'Doctor'}
                  leftIc={'arrow-back-ios'}
                  leftPressed={() => {
                    this.props.navigation.replace('Doctor');
                  }}
                />
                <View
                  style={{
                    height: '90%',
                    width: '100%',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    Fusce at nisi eget dolor rhoncus facilisis. Mauris ante
                    nisl, consectetur et luctus et, porta ut dolor. Curabitur
                    ultricies ultrices nulla. Morbi blandit nec est vitae
                    dictum. Etiam vel consectetur diam. Maecenas vitae egestas
                    dolor. Fusce tempor magna at tortor aliquet finibus. Sed eu
                    nunc sit amet elit euismod faucibus. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Duis gravida eget neque vel vulputate.
                  </Text>
                </View>
              </View>
            </Modal>

            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible2}
              onRequestClose={() => {
                this.setState({modalVisible2: false});
              }}>
              <View
                style={{
                  height: '75%',
                  width: '100%',
                  //backgroundColor: '#ff1',
                  alignItems: 'flex-end',
                  //justifyContent: 'flex-end',
                }}>
                  <NavHeader
                  title={'Doctor'}
                  leftIc={'arrow-back-ios'}
                  leftPressed={() => {
                    this.props.navigation.replace('Doctor');
                  }}
                />
                <View
                  style={{
                    height: '90%',
                    width: '100%',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    Fusce at nisi eget dolor rhoncus facilisis. Mauris ante
                    nisl, consectetur et luctus et, porta ut dolor. Curabitur
                    ultricies ultrices nulla. Morbi blandit nec est vitae
                    dictum. Etiam vel consectetur diam. Maecenas vitae egestas
                    dolor. Fusce tempor magna at tortor aliquet finibus. Sed eu
                    nunc sit amet elit euismod faucibus. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Duis gravida eget neque vel vulputate.
                  </Text>
                </View>
              </View>
            </Modal>
          </View>
          <View
            style={{
              height: '15%',
              width: '100%',
              //backgroundColor: 'yellow',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <AppBtn
              onPress={() => {
                this.props.navigation.navigate('VisitHistory');
              }}
              txt={'Book Now'}
            />
          </View>
        </View>
      </View>
    );
  }
}
