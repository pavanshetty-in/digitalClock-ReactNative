import React, { useState } from "react";
import {
  AppRegistry,
  View,
  StyleSheet,
  Platform,
  Text,
  ImageBackground,
} from "react-native";
import { Header, Icon } from "react-native-elements";

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
  if (hour >= 0) {
    bg1 = {
      uri: "https://firebasestorage.googleapis.com/v0/b/digital-clock-1f6ae.appspot.com/o/bg4.jpg?alt=media&token=8961818f-fc6a-4c76-9e73-d06ce9aaaa07",
    };
  }
  return (
    <>
      <View style={styles.page}>
        <ImageBackground source={bg1} style={styles.bg}>
          <View style={styles.flexs}>
            <View>
              <Text style={styles.head}>Digital Clock</Text>
              <View style={styles.loactionbox}>
                <View>
                  <Icon name="map-marker" type="font-awesome" size={16} color="#ffffff" />
                </View>
                <View>
                  <Text style={styles.loactiontext}>Bangalore, India</Text>
                </View>
              </View>
            </View>
            <View style={styles.timebox}>
              <View>
                <Text style={styles.timetxt}>
                  {hour > 12 ? hour - 12 : hour == 0 ? 12 : hour}:
                  {minute < 10 ? "0" + minute : minute}
                </Text>
              </View>
              <View style={styles.timesub}>
                <Text style={styles.timesubtext}>
                  {second < 10 ? "0" + second : second}
                </Text>
                <Text style={styles.timesubtext}>
                  {hour < 12 ? "AM" : "PM"}
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.timesubtext}>Pavan S</Text>
            </View>
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
  },
  flexs: {
    flex: 1,
    justifyContent: "space-between",
  },
  head: {
    fontSize: 38,
    paddingTop: "15%",
    paddingLeft: 20,
    color: "#ffffff",
  },
  timebox: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 30,
  },
  timesub: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
  },
  timesubtext: {
    color: "#ffffff",
    fontSize: 26,
    paddingLeft: 10,
  },

  timetxt: {
    fontSize: 68,
    color: "#ffffff",
    marginBottom: "50%",
    paddingLeft: 20,
    fontWeight: "100",
  },
  loactionbox: {
    paddingLeft:20,
    display: "flex",
    flexDirection: "row",
    color: "#ffffff",
    fontSize:16
  },
  loactiontext:{
    color: "#ffffff",
    paddingLeft:5
  },
  timeam: {
    alignSelf: "baseline",
    padding: 10,
    fontSize: 28,
    fontWeight:'100'
  },
});

export default App;
