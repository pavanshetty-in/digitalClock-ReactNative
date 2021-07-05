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

// Root app function
const App = () => {
  let newTime;
  let hours;
  let minutes;
  let seconds;
  let newDay;
  let months;
  let dates;

  const [time, setTime] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinutes] = useState();
  const [second, setSeconds] = useState();
  const [day, setDayy] = useState();
  const [month, setmonth] = useState();
  const [date, setdate] = useState();

  // Time updated every second
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
    months = new Date().getMonth();
    setmonth(months);
    dates = new Date().getDate();
    setdate(dates);
  };

  // calling UpdateTime every second
  setInterval(updateTime, 1000);

  // change of image
  let bg1 = {
    uri: "https://firebasestorage.googleapis.com/v0/b/digital-clock-1f6ae.appspot.com/o/bg4.jpg?alt=media&token=b8d99ab1-7ad0-47dc-a8a2-e8678c64ccd2",
  };

  if (hour > 9 && hour < 14) {
    bg1 = {
      uri: "https://firebasestorage.googleapis.com/v0/b/digital-clock-1f6ae.appspot.com/o/sky.jpg?alt=media&token=5bed958c-a7ef-43d7-8b13-3c146a867cd5",
    };
  }
  if (hour > 14 && hour < 17) {
    bg1 = {
      uri: "https://firebasestorage.googleapis.com/v0/b/digital-clock-1f6ae.appspot.com/o/sky2.jpg?alt=media&token=d386977c-c5d2-4916-a828-bcac2b85109d",
    };
  }
  if (hour > 17 && hour < 19) {
    bg1 = {
      uri: "https://firebasestorage.googleapis.com/v0/b/digital-clock-1f6ae.appspot.com/o/sunset.jpg?alt=media&token=fb9f6073-e4c8-456a-92c3-c8c8ef0d0880",
    };
  }
  if (hour > 6 && hour < 9) {
    bg1 = {
      uri: "https://firebasestorage.googleapis.com/v0/b/digital-clock-1f6ae.appspot.com/o/sunrise.jpg?alt=media&token=d59fd685-048b-4eee-9a71-4632d4210d9d",
    };
  }
  return (
    <>
      {/* main screen View */}
      <View style={styles.page}>
        <ImageBackground source={bg1} style={styles.bg}>
          <View style={styles.flexs}>
            <View>
              <Text style={styles.head}>Digital Clock</Text>
              <View style={styles.loactionbox}>
                <View>
                  <Icon
                    name="map-marker"
                    type="font-awesome"
                    size={16}
                    color="#ffffff"
                  />
                </View>
                <View>
                  <Text style={styles.loactiontext}>Bangalore, India</Text>
                </View>
              </View>
            </View>
            <View style={styles.timeDaybox}>
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
              <View style={styles.daytext}>
                <Text style={styles.day}>
                  {day === 1
                    ? "Monday,"
                    : day === 2
                    ? "Tuesday,"
                    : day === 3
                    ? "Wednesday,"
                    : day === 4
                    ? "Thursday,"
                    : day === 5
                    ? "Friday"
                    : day === 6
                    ? "Saturday,"
                    : "Sunday,"}
                </Text>
                <Text style={styles.day}>
                  {month === 0
                    ? " January"
                    : month === 1
                    ? " February"
                    : month === 2
                    ? " March"
                    : month === 3
                    ? " April"
                    : month === 4
                    ? " May"
                    : month === 5
                    ? " June"
                    : month === 6
                    ? " July"
                    : month === 7
                    ? " August"
                    : month === 8
                    ? " September"
                    : month === 9
                    ? " October"
                    : month === 10
                    ? " November"
                    : " December"}
                </Text>
                <Text style={styles.day}> {date}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.designed}>Designed By</Text>
              <Text style={styles.pavan}>Pavan S (1RN20MC035)</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

// styling objects
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
  timeDaybox: {
    paddingBottom: "100%",
    display: "flex",
    flexDirection: "column",
  },
  timebox: {
    display: "flex",
    flexDirection: "row",
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
    fontSize: 72,
    color: "#ffffff",
    paddingLeft: 20,
    fontWeight: "100",
  },
  loactionbox: {
    paddingLeft: 20,
    display: "flex",
    flexDirection: "row",
    color: "#ffffff",
    fontSize: 16,
  },
  loactiontext: {
    color: "#ffffff",
    paddingLeft: 5,
  },
  daytext: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 25,
    color: "#ffffff",
  },
  day: {
    color: "#ffffff",
    fontSize: 18,
  },
  pavan: {
    color: "#ffffff",
    paddingLeft: 20,
    fontSize: 18,
  },
  designed: {
    color: "#ffffff",
    paddingLeft: 20,
  },
});

export default App;
