import React, { Component } from "react";
import { Animated, View, Text, TouchableWithoutFeedback } from "react-native";

class ColumnBar extends Component {
  constructor(props) {
    super(props);

    this._height = new Animated.Value(0);
    this.state = {
      flag: false
    };
  }

  componentDidMount() {
    this.animateTo(this.props.delay, this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    this.animateTo(nextProps.delay, nextProps.value);
  }

  animateTo = (delay, value) => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this._height, {
        toValue: value
      })
    ]).start();
  };
  onMethod = () => {
    this.props.action();
  };

  render() {
    const barStyles = {
      backgroundColor: this.props.flag ? "#40e8aa" : "#42b3f4",
      height: this._height,
      width: 25,

      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,

      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4
    };

    return (
      <View>
        <Text
          style={{
            paddingBottom: 15,

            fontWeight: "bold",

            textAlign: "center",

            color: "#93989b"
          }}
        >
          {this.props.amount}
        </Text>
        <TouchableWithoutFeedback onPressIn={this.onMethod}>
          <Animated.View style={barStyles} />
        </TouchableWithoutFeedback>
        <Text
          style={{
            paddingTop: 5,

            textAlign: "center",
            fontWeight: "bold",
            color: "#42b3f4"
          }}
        >
          {this.props.duration}
        </Text>
      </View>
    );
  }
}

export default ColumnBar;
