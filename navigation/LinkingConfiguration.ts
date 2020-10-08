import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          MapView: {
            screens: {
              MapViewScreen: "two",
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: "three",
            },
          },
          TabFour: {
            screens: {
              TabFourScreen: "four",
            },
          }
        },
      },
      NotFound: "*",
    },
  },
};
