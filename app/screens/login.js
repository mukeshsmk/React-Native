
import React, { Component } from 'react';
import { Platform, Alert, AsyncStorage, TouchableOpacity, StyleSheet, Image , Button, TextInput, Text, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        email: '',
        password: ''
      }
    }
  }


  render() {

    return (
      <View style={styles.containerView}>

        <View style={styles.loginView}>
          <Image style={styles.logoImage} source={require("../images/logo.png")} />
        </View>

        <View style={styles.inputView}>
          <TextField
            label='Email'
            onChangeText={(email) => this.setState({ email })}
          />
          <TextField
            label='Password'
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        {/* disabled={this.state.isLoggingIn || !this.state.email || !this.state.password} */}

        <View style={styles.loginView}>
          <TouchableOpacity 
            style={styles.login}
            onPress={() => this.props.navigation.navigate('Projects')}
          >
            <Text style={styles.loginText}> SIGN IN </Text>
          </TouchableOpacity>
        </View>


        <View style={styles.forgotView}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ visible: true });
            }}>
            <Text style={styles.forgot}>
              Forgot Password
            </Text>
          </TouchableOpacity>
          <Dialog style={styles.dialogbox}
            visible={this.state.visible}
            onTouchOutside={() => {
              this.setState({ visible: false });

            }}
            dialogTitle={<DialogTitle title="Forget Password" />}
          >
            <DialogContent>
              <Text style={styles.dialogboxText}>
                Enter the email
              </Text>
              <View style={styles.inputView}>
                <TextField
                  label='Email'
                  onChangeText={(email) => this.setState({ email })}
                />
              </View>
              <View style={styles.resetView}>
                <TouchableOpacity
                  style={styles.reset}
                  onPress={this._login}
                >
                  <Text style={styles.resetText}
                   onPress={() => {
                    this.setState({ visible: false });
                  }}>
                     Reset </Text>
                </TouchableOpacity>
              </View>
            </DialogContent>
          </Dialog>
        </View>

        <View>
          <Text style={styles.conditionView}>
            By signing in you are agreeing to our {"\n"} Terms & Conditions and Privacy policy
          </Text>
        </View>




      </View>
    );
  }
}


const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafafa'

  },
  logoView:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage:{
    width: '30%',
    height:'25%',
    margin:0,
  },
  inputView: {
    marginTop: 0,
    marginBottom: 20
  },
  loginView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: "35%",
    margin: 0,
    backgroundColor: '#2ba1d0',
    padding: 10,
    color: '#fff',
    borderRadius: 30,
  },
  loginText: {
    color: '#fff',
    paddingLeft: 20
  },
  forgotView: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  forgot: {
    color: '#6ca8c7',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,
  conditionView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
    marginLeft: 70,
  },
  dialogbox: {
    width: 100,
  },
  dialogboxText: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '50%',
    marginTop: 10,
  },
  resetView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  reset: {
    width: "35%",
    margin: 0,
    backgroundColor: '#2ba1d0',
    padding: 10,
    color: '#fff',
    borderRadius: 30,
  },
  resetText: {
    color: '#fff',
    paddingLeft: 20
  },
});
