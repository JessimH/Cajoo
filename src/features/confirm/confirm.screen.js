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
            code: '',
            chr1: '-',
            chr2: '-',
            chr3: '-',
            chr4: '-',
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
    }


    render() {

        if (this.state.code.length === 4) {
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
                            Entrez le code envoyé au +330652405399
                        </Text>

                        <TextInput
                            style={styles.inputHidden}
                            selectionColor={'#FF3537'}
                            keyboardType='numeric'
                            autoFocus={true}
                            maxLength={4}
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
                        </View>

                        <Text style={styles.cgv}>
                            Vous n'avez pas reçu le code? <Text style={styles.span}>Renvoyer</Text>
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

export default Confirm;
