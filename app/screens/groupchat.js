import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button
} from 'react-native';
import HeaderComponent from '../components/header';

export default class Groupchat extends Component {
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
      ]
    };
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

        <HeaderComponent
          title={"Group chat"}
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
             />

          </TouchableOpacity>
        </View>
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
  uploadIcon:{
    fontSize:24,
    color:'#2ba1d0',
    margin:10,
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
})