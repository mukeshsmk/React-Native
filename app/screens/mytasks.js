import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button, TextInput } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import HeaderComponent from '../components/header';

export default class Mytasks extends Component {
  render() {
    return (
      <View style={styles.containerView}>
         <HeaderComponent
            title={"Mytasks"}
            navigation={this.props.navigation}
          />   
     
      <View style={styles.container}>

       

        <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.taskHeader}>
            <View>
              <Text style={styles.taskName}>test</Text>
              <Text style={styles.taskEntry}>Number of Entries : 1</Text>
            </View>
          </CollapseHeader>
          <CollapseBody style={styles.taskBody}>
            <View>
              <Text style={styles.tasksType}>Photo/Video/Audio/Due: No Time Limit</Text>

              <View style={styles.newentryView}>
                <TouchableOpacity
                  style={styles.newentry}
                >
                  <Text style={styles.newentryText}> New Entry </Text>
                </TouchableOpacity>
              </View>
            </View>
          </CollapseBody>
        </Collapse>

        <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.taskHeader}>
            <View>
              <Text style={styles.taskName}>test</Text>
              <Text style={styles.taskEntry}>Number of Entries : 1</Text>
            </View>
          </CollapseHeader>
          <CollapseBody style={styles.taskBody}>
            <View>
              <Text style={styles.tasksType}>Photo/Video/Audio/Due: No Time Limit</Text>

              <View style={styles.newentryView}>
                <TouchableOpacity
                  style={styles.newentry}
                >
                  <Text style={styles.newentryText}> New Entry </Text>
                </TouchableOpacity>
              </View>
            </View>
          </CollapseBody>
        </Collapse>

        <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.taskHeader}>
            <View>
              <Text style={styles.taskName}>test</Text>
              <Text style={styles.taskEntry}>Number of Entries : 1</Text>
            </View>
          </CollapseHeader>
          <CollapseBody style={styles.taskBody}>
            <View>
              <Text style={styles.tasksType}>Photo/Video/Audio/Due: No Time Limit</Text>

              <View style={styles.newentryView}>
                <TouchableOpacity
                  style={styles.newentry}
                >
                  <Text style={styles.newentryText}> New Entry </Text>
                </TouchableOpacity>
              </View>
            </View>
          </CollapseBody>
        </Collapse>

        <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.taskHeader}>
            <View>
              <Text style={styles.taskName}>test</Text>
              <Text style={styles.taskEntry}>Number of Entries : 1</Text>
            </View>
          </CollapseHeader>
          <CollapseBody style={styles.taskBody}>
            <View>
              <Text style={styles.tasksType}>Photo/Video/Audio/Due: No Time Limit</Text>

              <View style={styles.newentryView}>
                <TouchableOpacity
                  style={styles.newentry}
                >
                  <Text style={styles.newentryText}> New Entry </Text>
                </TouchableOpacity>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    margin: 0

},
  container: {
    flex: 1,
    backgroundColor: '#e8e7e7a8',
    padding: 15,
  },
  collapse: {
    borderWidth: 1,
    borderColor: '#e8e8e8a8',
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: '#000',
    shadowOpacity: 1.0,
    shadowRadius: 2,
    marginTop: 12,
    marginBottom: 12,
  },
  taskHeader: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#2885cf',
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  taskBody: {
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  taskName: {
    color: '#171717'
  },
  taskEntry: {
    color: '#727272',
    margin: 5,
  },
  tasksType: {
    color: '#727272',
    marginTop: 10,
    marginBottom: 10,
  },
  newentryView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  newentry: {
    width: "35%",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#2ba1d0',
    padding: 10,
    color: '#fff',
    borderRadius: 30,
  },
  newentryText: {
    color: '#fff',
    paddingLeft: 20
  },
})
