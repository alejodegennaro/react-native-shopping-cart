import Expo, {AppLoading, Font, Asset} from "expo";
import React, { Component } from "react";
import { Provider } from 'react-redux';
import configStore from './src/store';
import MobileApp from './src/MobileApp';

const store = configStore({}); //initial state passed here if needed

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }


  //preload fonts, assets, etc
  async _cacheResourcesAsync() {

    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });

    const images = [
      require('./assets/images/gmaps.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages)

  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />;
    }
    return (
      <Provider store={store}>
          <MobileApp />
      </Provider>
    )
  }
}
