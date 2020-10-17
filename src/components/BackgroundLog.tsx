import React, { memo } from 'react';
import {
    ImageBackground,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';

type Props = {
    children: React.ReactNode;
};

const BackgroundLog = ({ children }: Props) => (
    <ImageBackground
        source={require('../assets/bglogin.png')}
        resizeMode="stretch"
        style={styles.backgroundlog}
    >
        <KeyboardAvoidingView style={styles.container} >
            {children}
        </KeyboardAvoidingView>
    </ImageBackground>
);

const styles = StyleSheet.create({
    backgroundlog: {
        flex: 1,
        width: '100%',
        height: '40%',
    },
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default memo(BackgroundLog);
