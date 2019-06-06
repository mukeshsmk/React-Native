import React, { Component } from 'react';
import { ScrollView, FlatList, AsyncStorage, ActivityIndicator, TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import HeaderComponent from '../components/header';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Mytasks extends Component {


  constructor() {
    super()
    this.state = {
      showMe: true,
      id: null,
      dataSource: null,
      isLoading: true
    }
  }

  _onPress() {
    this.setState({
      showMe: !this.state.showMe
    })
  }

 
  async componentDidMount() {


    AsyncStorage.multiGet(['id_token', 'X-API-KEY','Project_id']).then((data) => {

        const { navigation } = this.props;
        const id = navigation.getParam('_id');

      
        let id_token = data[0][1];
        let XAPIKEY = data[1][1];
        let Project_id = data[2][1];
        console.log('id',id);
        fetch("http://api-dev.ethosapp.com/v3/projects/" + Project_id, {
            method: "GET",
            headers: {
                'Authorization': 'bearer ' + id_token,
                'X-API-KEY': XAPIKEY,
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
    });

}

async componentDidUpdate(prevProps, prevState) {

    try {
      const id = await AsyncStorage.getItem('Project_id');
      console.log("Check",id)
     
      if (id !== prevState.id) {
        this.setState({
            dataSource: null,
            id: id
        })
        this.componentDidMount();
      }
      
    } catch (error) {
      console.log('Error',error);
    }


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
        console.log("data",data)
    
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.containerView}>
        <HeaderComponent
          title={"Mytasks"}
          navigation={this.props.navigation}
        />

        <View style={styles.container}>
          {
            data.map((tasks) =>
             

          <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.taskHeader}>
            <View>
              <Text style={styles.taskName}>{tasks.name}</Text>
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
              
     )}
 
    </View>
    
    </View>
    </ScrollView>
  
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
    shadowOffset: { width: 10, height: 10, },
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
