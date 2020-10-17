import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';

type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({ mode, style, children, ...props }: Props) => (
  <PaperButton
    style={[
            styles.button,
            mode === 'contained' && { backgroundColor: theme.colors.withucolor },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: '60%',
        marginVertical: 20,
        borderRadius: 60,
  },
    text: {
        fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 26,
  },
});

export default memo(Button);
