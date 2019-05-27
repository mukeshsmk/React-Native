import React, { Component } from "react";
import { 	View,	Text,	StyleSheet} from "react-native";
import { Icon } from 'react-native-elements';
import { Container, Header, Title, Left, Right, Button, Body, Content, Card, CardItem } from "native-base";

class HeaderComponent extends Component {
  render() {
    return (
      <Header style={styles.drawerHeader}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}>
            <Icon name='sort'style={styles.menuIcon} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>{this.props.title.toUpperCase()}</Title>
        </Body>
        <Right>
          <Icon name='tune' />
        </Right>
      </Header>  
    );
  }
}
export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuIcon:{
    color: '#fff',
    fontSize: 18,
    marginRight:5,
    transform: [{ rotateY: '180deg'}],
  },
  title:{
    fontSize:14
  }
});