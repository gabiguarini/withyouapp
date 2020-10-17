import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';

type Props = React.ComponentProps<typeof PaperButton>;

const NextBtn = ({ mode, style, children, ...props }: Props) => (
    
    <PaperButton
        style={[
            styles.nextbtn,
            mode === 'contained' && { backgroundColor: theme.colors.withucolor },
            style,
        ]}
        
        mode={mode}
        {...props}
    >
        <Image style={styles.image} source={require('../assets/nextbtn.png')} />
        {children}
    </PaperButton>
);

const styles = StyleSheet.create({
    nextbtn: {
        marginVertical: 20,
        borderRadius: 100,
        position: "absolute",
        right: 10,
        bottom: 20,
    },
    image: {
        width: 12,
        height: 12,
    },
   
});

export default memo(NextBtn);
