import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    main: {
        height: height,
        width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    titre: {
        color: '#2b2b4f',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Inter-ExtraBold'
    },
    fakebtn: {
        position: 'absolute',
        bottom: height * 0.07,
        fontSize: 13,
        fontFamily: 'Inter-Bold',
        textDecorationLine: 'underline',
        color: '#FF3537'
    },
    button3: {
        marginTop: 20,
        backgroundColor: '#FF3537',
        width: width * 0.9,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 13,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textButton3: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Inter-Black'
    },
    icon: {
        height: 20,
        width: 20,
        marginRight: 15
    }
})

export default styles;