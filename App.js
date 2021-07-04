import React, { useState } from "react";
import {
  AppRegistry,
  View,
  StyleSheet,
  Platform,
  Text,
  ImageBackground,
} from "react-native";
import { Header } from "react-native-elements";

// import {
//   useFonts,
//  POPPINS_400Regular,
//  POPPINS_500Regular,
//  POPPINS_200Regular,
//  POPPINS_600Regular,

// } from "@expo-google-fonts/POPPINS";

import Name from "./components/time";
const App = () => {
  let newTime;
  let hours;
  let minutes;
  let seconds;
  let newDay;

  const [time, setTime] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinutes] = useState();
  const [second, setSeconds] = useState();
  const [day, setDayy] = useState();

  const updateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);

    hours = new Date().getHours();

    setHour(hours);

    minutes = new Date().getMinutes();
    setMinutes(minutes);
    seconds = new Date().getSeconds();
    setSeconds(seconds);

    newDay = new Date().getDay();
    setDayy(newDay);
  };

  setInterval(updateTime, 1000);
  let bg1 = {
    uri: "https://firebasestorage.googleapis.com/v0/b/digital-clock-1f6ae.appspot.com/o/bg1.jpg?alt=media&token=65c14ea1-0a21-4adb-be23-1cc74eeb7945",
  };
  if (hour > 20) {
    bg1 = {
      uri: "https://firebasestorage.googleapis.com/v0/b/digital-clock-1f6ae.appspot.com/o/bg4.jpg?alt=media&token=8961818f-fc6a-4c76-9e73-d06ce9aaaa07",
    };
  }
  return (
    <>
      {/* <View>
        <Header
          centerComponent={{
            text: "Digital Clock",
            style: { color: "#fff", fontSize: 15, fontWeight: "bold" },
          }}
        />
        <View style={styles.timesec}>
          <Text style={styles.timetxt}>
            {hour > 12 ? hour - 12 : hour == 0 ? 12 : hour}:
            {minute < 10 ? "0" + minute : minute}
          </Text>
          <Text style={styles.timeam}>{hour < 12 ? "AM" : "PM"}</Text>
        </View>

        <Text>{second < 10 ? "0" + second : second}</Text>
        <Text>
          {day === 1
            ? "Monday"
            : day === 2
            ? "Tuesday"
            : day === 3
            ? "Wednesday"
            : day === 4
            ? "Thursday"
            : day === 5
            ? "Friday"
            : day === 6
            ? "Saturday"
            : "Sunday"}
        </Text>
      </View> */}
      <View style={styles.page}>
        <ImageBackground source={bg1} style={styles.bg}>
          <View>
            <Text style={styles.head}>Digital Clock</Text>
            {/* <Text style={styles.timetxt}>{hour}</Text> */}
          </View>
          <View>
            <Text style={styles.timetxt}>
              {hour > 12 ? hour - 12 : hour == 0 ? 12 : hour}:
              {minute < 10 ? "0" + minute : minute}
            </Text>
          </View>
          <View>
            <Text>Pavan S</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  head: {
    fontSize: 38,
    paddingTop: "15%",
    paddingLeft: 20,
    color: "#ffffff",
    
  },

  timetxt: {
    fontSize: 68,
    color: "#ffffff",
    marginBottom: "80%",
    paddingLeft: 20,
    fontWeight:'100',
  },
  timeam: {
    alignSelf: "baseline",
    padding: 10,
    fontSize: 28,
  },
});

export default App;
