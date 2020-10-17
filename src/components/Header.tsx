import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 46,
    color: '#ffffff',
    fontWeight: 'bold',
        paddingVertical: 10,
        position: 'absolute',
        left: 5,
        top: 80,
  },
});

export default memo(Header);
