import React from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform } from 'react-native';

function Name() {
    return(
        
     <Text style={styles.myName}>Pavan Shetty</Text>
     
    );
    
    
}
const styles = StyleSheet.create(
  {
    myName: {
     color:"#ffa500",
    
    },
    

  });

export default Name
