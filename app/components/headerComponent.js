import React, { Component } from "react";
import { 	View,	Text,	StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Container, Header, Title, Left, Right, Button, Body, Content, Card, CardItem } from "native-base";


    const CustomHeader = ({ navigation }) => (
        <View>
         <Icon 
            name="home"
            size={32}
            color="black"
            onPress={() => this.props.navigation.openDrawer()}
          />
        </View>
      );
      
      export default CustomHeader;