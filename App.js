import React , {useState} from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform } from 'react-native';
import { Header } from 'react-native-elements';
import ""

import Name from './components/time'
const App = () => {
    let newTime;
    let newAmPm;
    let newDay;
    
const [time, setTime] = useState();
const [AmPm, setAmPm] = useState();
const [day, setDayy] = useState();


const updateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    newAmPm = new Date().getHours();
    setAmPm(newAmPm);
    newDay = new Date().getDay();
    setDayy(newDay);
}

setInterval(updateTime,1000)
    return (
        <>
        <View >
        <Header
            centerComponent={{ text: 'Digital Clock', style: { color: '#fff',fontSize:15,fontWeight: 'bold'} }}
       / >
       {
           (AmPm < 12)? 
           <Text>am</Text>
           :
           
           <Text>pm</Text>
       }

            <Text className="text">{time}</Text>
            <Text>
                {
                    (day === 1)? 
                    <Text>Monday</Text>
                    :
                    (day === 2)? 
                    <Text>Tue</Text>
                    :
                    (day === 3)? 
                    <Text>wedday</Text>
                    :
                    (day === 4)? 
                    <Text>thuday</Text>
                    :
                    (day === 5)? 
                    <Text>friday</Text>
                    :
                    (day === 6)? 
                    <Text>satday</Text>
                    :
                    <Text>sunday</Text>


                }
            </Text>

    </View>
        </>
    )
}

export default App

