import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform } from 'react-native';

import { Header } from 'react-native-elements';

import Name from './components/time'

export default class App extends Component {

  constructor() {
    super();

    this.state = { currentTime: null, currentDay: null }
    this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  }

  componentWillMount() {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'PM';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'AM';
    }

    this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' '});
    this.setState({ currentap:am_pm })

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase() });
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  render() {

    return (
      
      <View >
        <Header
            centerComponent={{ text: 'Digital Clock', style: { color: '#fff',fontSize:15,fontWeight: 'bold'} }}
       />
        <View style={styles.container}>
          <Text style={styles.daysText}>{this.state.currentDay}</Text>
          <Text style={styles.timeText}>{this.state.currentTime}{this.state.currentap}</Text>
          
        </View>
        <Name style={styles.myName} ></Name>
      </View>
      
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    myName: {
      color: '#fefefe',
      flex: 1,
      justifyContent:'flex-end',
      alignItems: 'center',
    },
    
    timeText: {
      fontSize: 40,
      color: '#f45336',
      fontWeight:'100',
    },
    daysText: {
      color: '#2196f3',
      fontSize: 25,
      paddingBottom: 2
    }

  });