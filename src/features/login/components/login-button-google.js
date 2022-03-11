import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';

const LoginButtonGoogle = (props) => {
    return (
        <TouchableOpacity style={styles.google}>
            <Image source={props.img}
                style={styles.icon} />
            <Text style={styles.textButton1}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    textButton1: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Inter-Black'
    },
    icon: {
        height: 30,
        width: 30,
        marginRight: 15
    },
    google: {
        backgroundColor: 'white',
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 13,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default LoginButtonGoogle;