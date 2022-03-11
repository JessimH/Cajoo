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
    button1: {
        position: 'absolute',
        bottom: height * 0.12,
        marginTop: 80,
        backgroundColor: '#FF3537',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 13
    },
    textButton1: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Inter-Black'
    },
})

export default styles;