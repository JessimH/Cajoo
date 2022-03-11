import React from 'react';
import {
    View,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';

import HeaderTitle from '../../components/headerTitle'

import { validatePhone } from './phone.helper'

import styles from './phone.styles'

class Phone extends React.Component {

    openConfirm = () => {
        this.props.navigation.navigate('confirm')
    }

    constructor(props) {
        super(props)
        this.state = {
            phone: '',
        }
    }

    onChangePhone = (phone) => {
        let canGo = false;
        this.setState({
            phone
        })
        if (validatePhone(phone)) {
            canGo = true;
        }
        this.setState({
            canGo
        })
    }


    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.main}>
                        <HeaderTitle navigation={this.props.navigation} />

                        <Text style={styles.titre}>
                            Quel est votre numéro ?
                        </Text>

                        <Text style={styles.cgv}>
                            Pour que notre livreur puisse vous contacter 😄
                        </Text>

                        <View style={styles.textInputContainer}>
                            <Image source={require('../../assets/france.png')} style={styles.contry} />
                            <Image source={require('../../assets/down.png')} style={styles.arrow} />
                            <Text style={styles.placeholder}>+ 33</Text>
                            <TextInput
                                style={styles.textInput}
                                selectionColor={'#FF3537'}
                                keyboardType='numeric'
                                onChangeText={(phone) => this.onChangePhone(phone)}
                                value={this.state.phone}
                            />
                        </View>

                        <View style={styles.bottomContainer}>
                            <Text style={styles.cgv}>
                                En cliquant sur "CONTINUER", vous acceptez la <Text style={styles.span}>Politique de Confidentialité</Text>, les <Text style={styles.span}>CGU</Text> et les <Text style={styles.span}>CGV</Text> de Cajoo.
                            </Text>
                            <TouchableOpacity style={
                                this.state.canGo ?
                                    styles.button3 :
                                    styles.button3Disable
                            }
                                onPress={this.openConfirm}>
                                <Text style={styles.textButton3}>CONTINUER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

export default Phone;
