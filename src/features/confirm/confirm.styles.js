import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    main: {
        height: height,
        width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        display: 'flex',
        paddingVertical: height * 0.1
    },
    container: {
        flex: 1
    },
    titre: {
        color: '#2b2b4f',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Inter-ExtraBold'
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
    button3Disable: {
        marginTop: 20,
        backgroundColor: '#ffb0b1',
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
    },
    containerInputs: {
        width: width * 0.9,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputContainer: {
        width: width / 5,
        marginTop: 30,
        height: 55,
        backgroundColor: '#ebebeb',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    placeholder: {
        fontSize: 16,
        color: '#4e4e63',
        fontFamily: 'Inter-Black',
        marginRight: 5,
    },
    inputHidden: {
        display: 'none'
    },
    textInput: {
        width: '20%',
        height: 55,
        fontSize: 16,
        color: '#4e4e63',
        fontFamily: 'Inter-Black',
    },
    cgv: {
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        fontSize: 12,
        marginTop: 10
    },
    bottomContainer: {
        marginTop: height * .25,
    },
    falseInput: {
        width: width / 5,
        marginTop: 30,
        height: 55,
        backgroundColor: '#ebebeb',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    falseInputText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#4e4e63',
        fontFamily: 'Inter-Black',
    },
    span: {
        color: '#FF3537',
        textDecorationLine: 'underline',
    }
})

export default styles;