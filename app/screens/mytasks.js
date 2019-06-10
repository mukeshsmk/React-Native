import React, { Component } from 'react';
import { ScrollView, TouchableHighlight, FlatList, AsyncStorage, ActivityIndicator, TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import HeaderComponent from '../components/header';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Newentry from '../screens/newentry';
import { WebView } from 'react-native-webview';
import { createStackNavigator } from 'react-navigation';
import Surveyscale from '../screens/surveyscale'



export default class Mytasks extends Component {

  constructor() {
    super()
    this.state = {
      showMe: true,
      id: null,
      dataSource: null,
      isLoading: true,
      id_token: null,
      XAPIKEY: null,
      Project_id: null
    }
  }

  
  
  _onPress() {
    this.setState({
      showMe: !this.state.showMe
    })
  }

  
  newentry(id,type) {
    const { navigate } = this.props.navigation;

    navigate('Newentry',{'type': type,'id': id })
    console.log('type',type)
    console.log('id',id)
    const data = this.state.dataSource.tasks;
  }

  async componentWillMount() {
    this.props.navigation.addListener('willFocus', (playload) => {
      this.setState({
        dataSource: null
      })

      AsyncStorage.multiGet(['id_token', 'X-API-KEY', 'Project_id']).then((data) => {
        this.setState({
          id_token: data[0][1],
          XAPIKEY: data[1][1],
          Project_id: data[2][1]
        })
        this.getTasks();
      })
    });
  }

  getTasks() {
    fetch("http://api-dev.ethosapp.com/v3/projects/" + this.state.Project_id, {
      method: "GET",
      headers: {
        'Authorization': 'bearer ' + this.state.id_token,
        'X-API-KEY': this.state.XAPIKEY,
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading || this.state.dataSource == null) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    else {
      const data = this.state.dataSource.tasks;
      console.log("data", data)

      return (

        <View style={styles.containerView}>
          <HeaderComponent
            title={"Mytasks"}
            navigation={this.props.navigation}
          />
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
              {
                data.map((tasks) =>
                  <Collapse style={styles.collapse} onPress={() => this._onPress()}>
                    <CollapseHeader style={styles.taskHeader} onPress={() => this._onPress()}>
                      <View>
                      <Text style={styles.taskName}>{tasks.name} </Text>
                        {
                          this.state.showMe ?
                            <Icon style={styles.upIcon} name="chevron-down" />
                            : <Icon style={styles.upIcon} name="chevron-up" />
                        }
                        <Text style={styles.taskEntry}>Number of Entries : {tasks.entry_count}</Text>
                      </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.taskBody}>
                      <View>
                        {(() => {
                          switch (tasks.type) {
                            case "-1": return <Text style={styles.tasksType}> Photo/Audio/Video/Due : No Time LImit</Text>;
                            case "0": return <Text style={styles.tasksType}> Photo/Due : No Time LImit</Text>;
                            case "1": return <Text style={styles.tasksType}> Audio/Due : No Time LImit</Text>;
                            case "2": return <Text style={styles.tasksType}> Video/Due : No Time LImit</Text>;
                            case "3": return <Text style={styles.tasksType}> Text/Due : No Time LImit</Text>;
                            case "4": return <Text style={styles.tasksType}> Scale /Due : No Time LImit</Text>;
                            default: return <Text style={styles.tasksType}> Photo/Audio/Video/Due : No Time LImit</Text>;
                          }
                        })()}
                        <Text style={styles.taskDescription}> {tasks.description} </Text>
                        <View>
                          <WebView style={styles.description}
                            source={{ html: tasks.description }}
                          />
                        </View>
                        <View style={styles.newentryView}>
                          <TouchableOpacity
                            style={styles.newentry}
                            onPress={() => this.newentry(tasks.id,tasks.type)}
                          >
                            <Text style={styles.newentryText}> New Entry </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </CollapseBody>
                  </Collapse>
                )}
            </View>
          </ScrollView>
        </View>
      );
    }
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
  upIcon: {
    fontSize: 16,
    textAlign: 'right',
  },
  collapse: {
    borderWidth: 1,
    borderColor: '#e8e8e8a8',
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


const NewEntryNav = createStackNavigator({
  NewEntry : { screen: Newentry },
  Surveyscale: { screen: Surveyscale },
},{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
  }
 }
);