import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Slider from '@react-native-community/slider'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HeaderComponent from '../components/header';

const optionsImage = {
  title: 'Choose Photo',
  takePhotoButtonTitle: 'Camera',
  chooseFromLibraryButtonTitle: 'Photo Library'
};

const optionsVideos = {
  title: 'Video Picker',
  takePhotoButtonTitle: 'Take Video...',
  mediaType: 'video',
  videoQuality: 'medium',
};

export default class Newentry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet" },
        { id: 2, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet" },
        { id: 3, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met" },
        { id: 4, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met" },
        { id: 5, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met" },
        { id: 6, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met" },
        { id: 7, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met" },
        { id: 8, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met" },
        { id: 9, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met" },
      ],
      comments: '',
      MultishowMe: true,
      sliderValue: 7,
      RangeshowMe: true,
      isLoading: true,
      avatarSource: null,
    };
  }

  uploadImage = () => {

    ImagePicker.showImagePicker(optionsImage, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri }
        this.setState({
          avatarSource: source,
        });
        console.log('avatarSource', this.state.avatarSource)
      }
    })

  }

  uploadVideo = () => {

    ImagePicker.showImagePicker(optionsVideos, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton === 'video') {
        ImagePicker.launchCamera(optionsVideos, (response) => {
          //do what you want with the video
        });
      } else if (response.customButton === 'video_library') {
        ImagePicker.launchImageLibrary(optionsVideos, (response) => {
          //do what you want with the video
        });
      } else {
        //do what you want with the picture
      }
    });
  }
  _onPressRange() {
    this.setState({
      RangeshowMe: false,
    })
  }

  _onPressMulti() {
    this.setState({
      MultishowMe: false,
    })
  }

  componentDidMount() {
    const { navigation } = this.props;
    const type = navigation.getParam('type');
    const id = navigation.getParam('id');
    const survey_type = navigation.getParam('survey_type');
    const name = navigation.getParam('name');
    const options = navigation.getParam('options');
    const order_priority = navigation.getParam('order_priority');
    this.setState({
      type: type,
      id, id,
      survey_type: survey_type,
      name: name,
      options: options,
      order_priority: order_priority
    })
    console.log("GetParam", type);
    console.log("id", id);
    console.log('survey_type', survey_type);
    console.log('name', name);
    console.log('options', options);
    console.log('order_priority', order_priority);
  }

  componentDidUpdate(prevProps, prevState) {

    const { navigation } = this.props;
    const id = navigation.getParam('id');
    console.log(id, prevState.id);

    if (id !== prevState.id) {
      this.setState({
        dataSource: null,
        id: id
      })
      this.componentDidMount();
    }
  }

  onPressSubmitButton() {
    this.onEnterComments();
  }

  async onEnterComments() {
    var data = {
      comments: this.state.comments
    };
    try {
      let response = await fetch(
        "http://http://{{baseUrl}}/v3/entries/v3/entries",
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );
      if (response.status >= 200 && response.status < 300) {
        alert("authenticated successfully!!!");
      }
    } catch (errors) {

      alert(errors);
    }
  }


  renderItem = ({ item }) => {
    return (
      <Text style={styles.MultiradioButtonText}>
        {this.state.options}
      </Text>

    )
  }

  renderDate = (date) => {
    return (
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }

  render() {

    return (
      <View style={styles.container}>
        {(() => {
          switch (this.state.type) {
            case "-1":
              return <View style={styles.container}>

                <HeaderComponent
                  title={"All"}
                  navigation={this.props.navigation}
                />

                <FlatList style={styles.list}
                  data={this.state.data}
                  keyExtractor={(item) => {
                    return item.id;
                  }}
                  renderItem={(message) => {
                    console.log(item);
                    const item = message.item;
                    let inMessage = item.type === 'in';
                    let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                    return (
                      <View>
                        {!inMessage && this.renderDate(item.date)}
                        <View style={[styles.item, itemStyle]}>

                          <Text style={styles.msg}>{item.message}</Text>

                        </View>
                        {inMessage && this.renderDate(item.date)}
                      </View>
                    )
                  }} />
                <View style={styles.footer}>

                  <TouchableOpacity>
                    <Icon name="upload" style={styles.uploadIcon}

                    />

                  </TouchableOpacity>
                  <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                      placeholder="New Comment"
                      underlineColorAndroid='transparent'
                      onChangeText={text => this.setState({ passWord: text })} />
                  </View>

                  <TouchableOpacity style={styles.btnSend}>
                    <Image source={{ uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png" }} style={styles.iconSend}
                      onPress={this.onPressSubmitButton.bind(this)} />

                  </TouchableOpacity>
                </View>
              </View>;

            case "0":
              return <View style={styles.container}>

                <HeaderComponent
                  title={"Photo"}
                  navigation={this.props.navigation}
                />

                <FlatList style={styles.list}
                  data={this.state.data}
                  keyExtractor={(item) => {
                    return item.id;
                  }}
                  renderItem={(message) => {
                    console.log(item);
                    const item = message.item;
                    let inMessage = item.type === 'in';
                    let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                    return (
                      <View>
                        {!inMessage && this.renderDate(item.date)}
                        <View style={[styles.item, itemStyle]}>

                          <Text style={styles.msg}>{item.message}</Text>

                        </View>
                        {inMessage && this.renderDate(item.date)}
                      </View>
                    )
                  }} />
                <View style={styles.footer}>

                  <TouchableOpacity>
                    <Icon name="upload" style={styles.uploadIcon}
                      onPress={this.uploadImage}
                    />

                  </TouchableOpacity>
                  <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                      placeholder="New Comment"
                      underlineColorAndroid='transparent'
                      onChangeText={text => this.setState({ passWord: text })} />
                  </View>

                  <TouchableOpacity style={styles.btnSend}>
                    <Image source={{ uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png" }} style={styles.iconSend}
                      onPress={this.onPressSubmitButton.bind(this)} />

                  </TouchableOpacity>
                </View>
              </View>;

            case "1":
              return <View style={styles.container}>

                <HeaderComponent
                  title={"Audio"}
                  navigation={this.props.navigation}
                />

                <FlatList style={styles.list}
                  data={this.state.data}
                  keyExtractor={(item) => {
                    return item.id;
                  }}
                  renderItem={(message) => {
                    console.log(item);
                    const item = message.item;
                    let inMessage = item.type === 'in';
                    let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                    return (
                      <View>
                        {!inMessage && this.renderDate(item.date)}
                        <View style={[styles.item, itemStyle]}>

                          <Text style={styles.msg}>{item.message}</Text>

                        </View>
                        {inMessage && this.renderDate(item.date)}
                      </View>
                    )
                  }} />
                <View style={styles.footer}>

                  <TouchableOpacity>
                    <Icon name="upload" style={styles.uploadIcon}

                    />

                  </TouchableOpacity>
                  <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                      placeholder="New Comment"
                      underlineColorAndroid='transparent'
                      onChangeText={text => this.setState({ passWord: text })} />
                  </View>

                  <TouchableOpacity style={styles.btnSend}>
                    <Image source={{ uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png" }} style={styles.iconSend}
                      onPress={this.onPressSubmitButton.bind(this)} />

                  </TouchableOpacity>
                </View>
              </View>;

            case "2":
              return <View style={styles.container}>

                <HeaderComponent
                  title={"Video"}
                  navigation={this.props.navigation}
                />

                <FlatList style={styles.list}
                  data={this.state.data}
                  keyExtractor={(item) => {
                    return item.id;
                  }}
                  renderItem={(message) => {
                    console.log(item);
                    const item = message.item;
                    let inMessage = item.type === 'in';
                    let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                    return (
                      <View>
                        {!inMessage && this.renderDate(item.date)}
                        <View style={[styles.item, itemStyle]}>

                          <Text style={styles.msg}>{item.message}</Text>

                        </View>
                        {inMessage && this.renderDate(item.date)}
                      </View>
                    )
                  }} />
                <View style={styles.footer}>

                  <TouchableOpacity>
                    <Icon name="upload" style={styles.uploadIcon}
                      onPress={this.uploadVideo}
                    />

                  </TouchableOpacity>
                  <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                      placeholder="New Comment"
                      underlineColorAndroid='transparent'
                      onChangeText={text => this.setState({ passWord: text })} />
                  </View>

                  <TouchableOpacity style={styles.btnSend}>
                    <Image source={{ uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png" }} style={styles.iconSend}
                      onPress={this.onPressSubmitButton.bind(this)} />

                  </TouchableOpacity>
                </View>
              </View>;

            case "3":
              return <View style={styles.container}>

                <HeaderComponent
                  title={"Text"}
                  navigation={this.props.navigation}
                />

                <FlatList style={styles.list}
                  data={this.state.data}
                  keyExtractor={(item) => {
                    return item.id;
                  }}
                  renderItem={(message) => {
                    console.log(item);
                    const item = message.item;
                    let inMessage = item.type === 'in';
                    let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                    return (
                      <View>
                        {!inMessage && this.renderDate(item.date)}
                        <View style={[styles.item, itemStyle]}>

                          <Text style={styles.msg}>{item.message}</Text>

                        </View>
                        {inMessage && this.renderDate(item.date)}
                      </View>
                    )
                  }} />
                <View style={styles.footer}>
                  <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                      placeholder="New Comment"
                      underlineColorAndroid='transparent'
                      onChangeText={text => this.setState({ passWord: text })} />
                  </View>

                  <TouchableOpacity style={styles.btnSend}>
                    <Image source={{ uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png" }} style={styles.iconSend}
                      onPress={this.onPressSubmitButton.bind(this)} />

                  </TouchableOpacity>
                </View>
              </View>

            case "4":

              if (this.state.survey_type == 1) {
                return <View style={styles.MulticontainerView}>
                  <HeaderComponent
                    title={"Servey"}
                    navigation={this.props.navigation}

                  />

                  <View style={styles.MultisurveyView}>
                    <Text style={styles.Multisurvey}>{this.state.name}</Text>
                    <Text>please select one answer</Text>
                    <RadioGroup onSelect={() => this._onPressMulti()}>
                      <RadioButton style={styles.MultiradioButton}>
                        {/* 
                        <FlatList
                          data={this.state.options}
                          showsVerticalScrollIndicator={false}
                          renderItem={({ item }) =>
                          }

                        /> */}
                        <Text style={styles.MultiradioButtonText}>
                          {this.state.options}
                        </Text>

                      </RadioButton>
                    </RadioGroup>
                    <View>

                      {
                        this.state.MultishowMe ?
                          null
                          : <View style={styles.MultitextAreaContainer} >
                            <TextInput
                              style={styles.MultitextArea}
                              underlineColorAndroid="transparent"
                              placeholder="Type something"
                              placeholderTextColor="grey"
                              numberOfLines={10}
                              multiline={true}
                            />
                          </View>
                      }

                      <View style={styles.MultisendView}>
                        <TouchableOpacity style={styles.Multisend}>
                          <Text style={styles.MultisendText}>
                            SEND
                          </Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                  </View>
                </View>

              } else (this.state.survey_type == 0); {
                return <View style={{ flex: 1 }}>

                  <HeaderComponent
                    title={"Servey"}
                    navigation={this.props.navigation}
                  />

                  <View style={{ backgroundColor: this.state.ColorHolder }} >
                    <View style={styles.RangescaleView}>
                      <Text style={styles.Rangenewscale}>{this.state.name} </Text>
                      <Text>please move the slider to select an answer</Text>
                    </View>

                    <Text style={styles.RangeheaderText}>Value of slider is : {this.state.sliderValue}</Text>

                    <Slider
                      maximumValue={10}
                      minimumValue={0}
                      minimumTrackTintColor="#307ecc"
                      maximumTrackTintColor="#000000"
                      step={1}
                      value={this.state.sliderValue}
                      onValueChange={(sliderValue) => this.setState({ sliderValue, RangeshowMe: false, })}
                      style={{ width: '80%', height: 40, marginRight: '5%', marginLeft: '5%', }}
                    />


                    <View>
                      {
                        this.state.RangeshowMe ?
                          null

                          : <View style={styles.RangetextAreaContainer} >
                            <Text style={styles.Rangerating}>Why did you give that rating?</Text>
                            <TextInput
                              style={styles.RangetextArea}
                              underlineColorAndroid="transparent"
                              placeholderTextColor="grey"
                              numberOfLines={10}
                              multiline={true}
                            />
                          </View>
                      }

                    </View>

                  </View>

                  <View style={styles.RangesendView} >
                    <TouchableOpacity>
                      <Text style={styles.RangesendText}>
                        SEND
          </Text>
                    </TouchableOpacity>
                  </View>

                </View>
              }


            default: return <View style={styles.container}>

              <HeaderComponent
                title={"All"}
                navigation={this.props.navigation}
              />

              <FlatList style={styles.list}
                data={this.state.data}
                keyExtractor={(item) => {
                  return item.id;
                }}
                renderItem={(message) => {
                  const item = message.item;
                  let inMessage = item.type === 'in';
                  let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                  return (
                    <View>
                      {!inMessage && this.renderDate(item.date)}
                      <View style={[styles.item, itemStyle]}>

                        <Text style={styles.msg}>{item.message}</Text>

                      </View>
                      {inMessage && this.renderDate(item.date)}
                    </View>
                  )
                }} />
              <View style={styles.footer}>

                <TouchableOpacity>
                  <Icon name="upload" style={styles.uploadIcon}

                  />

                </TouchableOpacity>
                <View style={styles.inputContainer}>
                  <TextInput style={styles.inputs}
                    placeholder="New Comment"
                    underlineColorAndroid='transparent'
                    onChangeText={text => this.setState({ passWord: text })} />
                </View>

                <TouchableOpacity style={styles.btnSend}>
                  <Image source={{ uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png" }} style={styles.iconSend}
                    onPress={this.onPressSubmitButton.bind(this)} />

                </TouchableOpacity>
              </View>
            </View>;
          }
        })()}

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    padding: 5,
    borderTopColor: '#e7e7e7',
    borderTopWidth: 1,
  },
  uploadIcon: {
    fontSize: 30,
    color: '#2ba1d0',
    margin: 10,
    marginTop: 5,
  },
  btnSend: {
    backgroundColor: "#00BFFF",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconSend: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    borderColor: '#a4a4a4',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize: 12,
    color: "#808080",
  },
  msg: {
    color: '#fff',
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#9ea09fdb',

    borderRadius: 5,
    padding: 10,
  },



  MulticontainerView: {
    flex: 1,
    margin: 0,

  },
  Multisurvey: {
    fontSize: 18,
    color: '#000',
  },
  MultisurveyView: {
    marginLeft: '5%',
    marginTop: 5,
  },
  MultiradioButtonText: {
    fontSize: 16,
    color: '#000',
  },
  MultiradioButton: {
    borderBottomColor: '#2289dc',
    borderBottomWidth: 2,
    paddingTop: 15,
    paddingBottom: 15,

  },
  MultitextAreaContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    margin: 20,


  },
  MultitextArea: {
    height: 120,
  },
  MultisendView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  Multisend: {
    width: "30%",
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#2ba1d0',
    padding: 12,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  MultisendText: {
    color: '#fff',
  },


  RangeheaderText: {
    fontSize: 18,
    margin: 10,
    marginLeft: '8%',
    color: 'black',
  },
  Rangenewscale: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
    marginTop: 10,
  },
  RangescaleView: {
    marginRight: '8%',
    marginLeft: '8%',
  },
  Rangerating: {
    marginLeft: '8%',
  },
  RangetextArea: {
    height: 120,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    margin: 20,
  },
  RangesendView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '5%',
    marginLeft: '32%',
  },
  RangesendText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#2ba1d0',
    color: '#fff',
    borderRadius: 25,
  },
});  