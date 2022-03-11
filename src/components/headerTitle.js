import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HeaderTitle = (props) => {

    return (
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <TouchableOpacity style={styles.boutton1}
                    onPress={() => props.navigation.goBack()}>
                    <Image source={require('../assets/back.png')}
                        style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Connexion</Text>
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: height * 0,
        backgroundColor: '#FF3537',
        width,
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 15,
        paddingHorizontal: 15
    },
    headerContent: {
        width,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: '38%'
    },
    icon: {
        alignSelf: 'flex-start',
        height: 25,
        width: 30
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Inter-Black',
    }
})

export default HeaderTitle;