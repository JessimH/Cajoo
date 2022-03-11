import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';

const LoginButtonApple = (props) => {
    return (
        <TouchableOpacity style={styles.apple}>
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
        color: 'white',
        fontFamily: 'Inter-Black'
    },
    icon: {
        height: 30,
        width: 30,
        marginRight: 15
    },
    apple: {
        backgroundColor: 'black',
        marginTop: 20,
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

export default LoginButtonApple;