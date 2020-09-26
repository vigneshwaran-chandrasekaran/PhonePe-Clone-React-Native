import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";

const width = Dimensions.get("window")?.width - 20;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
        },
        {
          title: "Item 2",
          text: "Text 2",
        },
        {
          title: "Item 3",
          text: "Text 3",
        },
        {
          title: "Item 4",
          text: "Text 4",
        },
        {
          title: "Item 5",
          text: "Text 5",
        },
      ],
    };
  }

  _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          margin: 10,
          height: 250,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30, color: "red" }}>{item.title}</Text>
        <Text style={{ fontSize: 30, color: "red" }}>{item.text}</Text>
      </View>
    );
  };

  render() {
    return (
      <View>
        <Carousel
          data={this.state.carouselItems}
          renderItem={this._renderItem}
          itemWidth={width}
          sliderWidth={width}
          layout={"default"}
          ref={(ref) => (this.carousel = ref)}
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
        />
      </View>
    );
  }
}
