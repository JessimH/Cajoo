import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import LoginButtonApple from './components/login-button-apple'
import LoginButtonFacebook from './components/login-button-facebook'
import LoginButtonGoogle from './components/login-button-google'

import HeaderTitle from '../../components/headerTitle'

import styles from './login.styles'

class Login extends React.Component {

    openPhone = () => {
        this.props.navigation.navigate('phone')
    }


    render() {
        return (
            <View style={styles.main}>
                <HeaderTitle navigation={this.props.navigation} />
                <Text style={styles.titre}>
                    Connectez vous simplement !
                </Text>
                <LoginButtonApple title="Continuer avec Apple" img={require("../../assets/apple.png")} />
                <LoginButtonFacebook title="Continuer avec Facebook" img={require("../../assets/facebook.png")} />
                <LoginButtonGoogle title="Continuer avec Google" img={require("../../assets/google.png")} />
                <TouchableOpacity style={styles.button3} onPress={this.openPhone}>
                    <Image source={require("../../assets/phone.png")}
                        style={styles.icon} />
                    <Text style={styles.textButton3}>Avec votre numéro</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;
