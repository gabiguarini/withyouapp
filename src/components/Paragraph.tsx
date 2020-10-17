import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: Props) => (
  <Text style={styles.text}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 20,
    color: '#ffffff',
        textAlign: 'left',
        position: "absolute",
        left: 5,
        top: 175,
  },
});

export default memo(Paragraph);
