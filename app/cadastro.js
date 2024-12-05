import React from "react";
import { router } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from "react-native";

const cadastro = () => {

    const salvar = () => {
        router.replace('telaLogin');
    }

    return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textCadastro}></Text>
                </View>

                <View style={styles.box}>
                    <TextInput
                    style={styles.textBox}
                    placeholder="E-mail"
                    placeholderTextColor={'black'}
                    autoCorrect={false}
                    onChangeText={() => {}}/>
                </View>

                <View style={styles.box}>
                    <TextInput
                    style={styles.textBox}
                    placeholder="Senha"
                    placeholderTextColor={'black'}
                    autoCorrect={false}
                    onChangeText={() => {}}/>
                </View>

                <View style={styles.box}>
                    <TextInput
                    style={styles.textBox}
                    placeholder="Nome Completo"
                    placeholderTextColor={'black'}
                    autoCorrect={false}
                    onChangeText={() => {}}/>
                </View>

                <View style={styles.box}>
                    <TextInput
                    style={styles.textBox}
                    placeholder="Usuário"
                    placeholderTextColor={'black'}
                    autoCorrect={false}
                    onChangeText={() => {}}/>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonSalvar} onPress={salvar}>
                        <Text style={styles.textButtonSalvar}>Salvar</Text>
                    </TouchableOpacity>
                </View>
              
            </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'white',
        height: 60,
        width: 380,
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        borderColor: 'grey',
        borderWidth: 0.5,
    },
    textBox: {
        fontSize: 14,
        textAlign: 'left',
        color: 'blue',
    },
    buttonSalvar: {
        height: 60,
        width: 372,
        backgroundColor: '#14AE5C',
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonSalvar: {
        color: 'white',
        fontSize: 20,
    },
})

export default cadastro;