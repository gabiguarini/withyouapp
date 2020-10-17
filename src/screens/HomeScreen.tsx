import React, { memo } from 'react';
import BgLogin from '../components/BgLogin';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <BgLogin>
    <Logo />
   
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
  </BgLogin>
);

export default memo(HomeScreen);
