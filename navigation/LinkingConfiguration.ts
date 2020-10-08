import * as Linking from 'expo-linking';
import FAQScreen from '../screens/FAQScreen';

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
              MapViewScreen: 'map view',
            },
          },
          UserClinics: {
            screens: {
              UserClinicsScreen: "user clinics",
            },
          },
          UserProfile: {
            screens: {
              UserProfileScreen: "user profile",
            },
          },
          FAQ: {
            screens: {
              FAQScreen: "FAQs",
            },
          }
        },
      },
      NotFound: "*",
    },
  },
};
