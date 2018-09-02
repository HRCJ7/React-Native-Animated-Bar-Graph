import React, { Component } from "react";
import {
  Modal,
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from "react-native";
import ColumnBar from "./ColumnBar";

class App extends Component {
  // ******************************************************* //
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modalVisible: false
    };
  }

  // ******************************************************* //
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: [],
  //     modalVisible: false
  //   };
  // }
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  componentDidMount() {
    this.generateData();
    this.interval = setInterval(() => {
      this.generateData();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateData = () => {
    var sortArray = [];
    var barArray = [];
    const data = [
      { amount: 15.2, current: false, duration: "Jan" },
      { amount: 30, current: false, duration: "Feb" },
      { amount: 20, current: false, duration: "Mar" },
      { amount: 10, current: false, duration: "Apr" },
      { amount: 6.7, current: true, duration: "May" },
      { amount: 11.1, current: false, duration: "Jun" },
      { amount: 23.2, current: false, duration: "Jul" },
      { amount: 5.4, current: false, duration: "Aug" }
    ];

    data.map((value, index) => sortArray.push(value.amount));
    sortArray.sort(function(a, b) {
      return b - a;
    });

    data.map((value, index) =>
      barArray.push({
        height: (200 / sortArray[0]) * value.amount,
        current: value.current,
        duration: value.duration,
        amount: value.amount
      })
    );

    this.setState({
      data: barArray
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginLeft: 15,
          marginRight: 15,
          backgroundColor: "#F5FCFF",
          justifyContent: "center"
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              color: "#42b3f4"
            }}
          >
            Monthly Sales
          </Text>
          <Text
            style={{
              paddingTop: 10,
              fontSize: 20,
              textAlign: "center",
              color: "#000000"
            }}
          >
            Aug-17-2018
          </Text>
        </View>
        <View
          style={{
            height: 275,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          {this.state.data.map((value, index) => (
            <ColumnBar
              action={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              value={value.height}
              delay={100}
              flag={value.current}
              duration={value.duration}
              amount={value.amount}
            />
          ))}
        </View>
        <View
          style={{
            marginTop: 10,
            height: 50,
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              flex: 4,
              paddingTop: 20,
              fontSize: 12,
              textAlign: "left",
              color: "#000000"
            }}
          >
            Toatl Sales for the month of
          </Text>
          <Text
            style={{
              flex: 1.5,
              paddingLeft: 5,
              paddingTop: 20,
              fontSize: 13,
              fontWeight: "bold",
              textAlign: "left",
              color: "#40e8aa"
            }}
          >
            August
          </Text>
          <View style={styles.lable_view}>
            <Text
              style={{
                paddingTop: 5,
                fontWeight: "bold",
                textAlign: "center",
                color: "#000000"
              }}
            >
              100,000 LKR
            </Text>
          </View>
          <View />
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  lable_view: {
    flex: 3,
    marginTop: 10,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#40e8aa"
  },

  lable_text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontSize: 18
  }
});
