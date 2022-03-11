import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { SvgUri } from 'react-native-svg';

import styles from './landing.styles'

class Landing extends React.Component {
    openSeConnecter = () => {
        this.props.navigation.navigate('login')
    }

    render() {
        return (
            <View style={styles.main}>
                <SvgUri
                    width="70%"
                    height="20%"
                    uri="https://uploads-ssl.webflow.com/61e5838000d49c4e2127ae8b/61e585f8231fd9bb8fa1d1d9_cajoo-logo.svg"
                />
                <Text style={styles.titre}>
                    Vos courses en 3 clics !
                </Text>
                <TouchableOpacity style={styles.button1}
                    onPress={this.openSeConnecter}>
                    <Text style={styles.textButton1}>ME CONNECTER 👋</Text>
                </TouchableOpacity>
                <Text style={styles.fakebtn}>Découvrir l'app</Text>
            </View>
        );
    }
}

export default Landing;
