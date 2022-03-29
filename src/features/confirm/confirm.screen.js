import React from 'react';
import {
    View,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Alert
} from 'react-native';

import HeaderTitle from '../../components/headerTitle'

import { validatePhone } from './phone.helper'
import { Auth } from 'aws-amplify';


import styles from './confirm.styles'

class Confirm extends React.Component {

    createTwoButtonAlert = () => Alert.alert(
        "Fin du devoir",
        "Je mérite un 20/20 🔥",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );


    constructor(props) {
        super(props)
        this.state = {
            phone: this.props.route.params.phone,
            code: '',
            chr1: '-',
            chr2: '-',
            chr3: '-',
            chr4: '-',
            chr5: '-',
            chr6: '-',
        }
    }

    onChangeCode = (code) => {
        this.setState({
            code
        })
        this.setState({ chr1: code.charAt(0) });
        this.setState({ chr2: code.charAt(1) });
        this.setState({ chr3: code.charAt(2) });
        this.setState({ chr4: code.charAt(3) });
        this.setState({ chr5: code.charAt(4) });
        this.setState({ chr6: code.charAt(5) });
    }

    confirmUser = async () => {
        try {
            const response = await Auth.confirmSignUp('+33' + this.state.phone, this.state.code);
            console.log('response:', JSON.stringify(response))
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    reSendCode = () => {
        Auth.forgotPassword(this.state.phone)
            .then(data =>
                console.log(data),
                Alert.alert('Nouveau code', "Vous avez du recevoir votre nouveau code sur votre téléphone", [{ text: 'Fermer' }])
            ).catch(err => console.log(err));
    }


    render() {

        if (this.state.code.length === 6) {
            this.createTwoButtonAlert()
        }
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.main}>
                        <HeaderTitle navigation={this.props.navigation} />

                        <Text style={styles.titre}>
                            Confirmez votre numéro !
                        </Text>

                        <Text style={styles.cgv}>
                            Entrez le code envoyé au +33 {this.state.phone}
                        </Text>

                        <TextInput
                            style={styles.inputHidden}
                            selectionColor={'#FF3537'}
                            keyboardType='numeric'
                            autoFocus={true}
                            maxLength={6}
                            onChangeText={(code) => this.onChangeCode(code)}
                            value={this.state.code}
                        />

                        <View style={styles.containerInputs}>
                            <View style={styles.falseInput}>
                                <Text style={styles.falseInputText}>{this.state.chr1}</Text>
                            </View>
                            <View style={styles.falseInput}>
                                <Text style={styles.falseInputText}>{this.state.chr2}</Text>
                            </View>
                            <View style={styles.falseInput}>
                                <Text style={styles.falseInputText}>{this.state.chr3}</Text>
                            </View>
                            <View style={styles.falseInput}>
                                <Text style={styles.falseInputText}>{this.state.chr4}</Text>
                            </View>
                            <View style={styles.falseInput}>
                                <Text style={styles.falseInputText}>{this.state.chr5}</Text>
                            </View>
                            <View style={styles.falseInput}>
                                <Text style={styles.falseInputText}>{this.state.chr6}</Text>
                            </View>
                        </View>

                        <Text style={styles.cgv}>
                            Vous n'avez pas reçu le code? <TouchableOpacity onPress={this.reSendCode}><Text style={styles.span}>Renvoyer</Text></TouchableOpacity>
                        </Text>

                        <TouchableOpacity style={
                            styles.button3
                        }
                            onPress={this.confirmUser}>
                            <Text style={styles.textButton3}>CONTINUER</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

export default Confirm;
