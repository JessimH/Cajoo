import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const LandingButton = () => {
    openSeConnecter = () => {
        this.props.navigation.navigate('login')
    }

    return (
        <TouchableOpacity style={styles.boutton1}
            onPress={this.openSeConnecter}>
            <Text style={styles.textButton1}>ME CONNECTER 👋</Text>
        </TouchableOpacity>
    )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    boutton1: {
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
    }
})

export default LandingButton;