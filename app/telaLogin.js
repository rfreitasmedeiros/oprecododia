import React, {useState, useEffect} from "react";
import { router } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity, TouchableHighlight, TextInput, Alert} from "react-native";
import useAuthStore from "../Store/authStore";

const home = () => {

    const [usuario, setUsuario] = useState("emilys");
    const [senha, setSenha] = useState("emilyspass");

    const { login, mensagemErro, usuarioLogado } = useAuthStore();

    useEffect(() => {
        console.log(usuarioLogado);
    }, []);

    const handleInputUsuario = (text) => {
        setUsuario(text);

        console.log(usuario);
    }

    const handleInputSenha = (text) => {
        setSenha(text);

        console.log(senha);
    }

    const logar = async () => {
        if (usuario && senha) {
            login(usuario, senha);
        }else{
            Alert.alert("Deve preencher as informações para continuar!");
        }

        if (mensagemErro != ""){
            Alert.alert(mensagemErro);
        }

        if(usuarioLogado){
            router.navigate('telaInicial');
        }
    }

    const registrar = () => {
        router.navigate('cadastro');
    }

    return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                </View>

                <View>
                    <Text style={styles.textLogin}>Login</Text>
                </View>

                <View>
                    <Text style={styles.texto}>Usuário</Text>
                    <View style={styles.box}>
                        <TextInput
                        style={styles.textBox}
                        placeholder="Usuário"
                        placeholderTextColor={'black'}
                        autoCorrect={false}
                        onChangeText={handleInputUsuario}
                        value={usuario}/>
                    </View>
                </View>

                <View>
                    <Text style={styles.texto}>Senha</Text>
                    <View style={styles.box}>
                        <TextInput style={styles.textBox}
                        placeholder="Senha"
                        placeholderTextColor={'black'}
                        autoCorrect={false}
                        onChangeText={handleInputSenha}
                        value={senha}
                        secureTextEntry={true}/>
                    </View>
                </View>

                    

                <View>
                    <TouchableOpacity style={styles.buttonEntrar} onPress={logar}>
                        <Text style={styles.textButtonEntrar}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableHighlight onPress={registrar}>
                        <Text style={styles.textButtonRegistrar}>Registrar</Text>
                    </TouchableHighlight>
                </View>
            </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    logo: {
        width: 300,
        height: 300,
    },
    textLogin: {
        fontSize: 38.4,
        fontWeight: 'bold',
    },
    box: {
        backgroundColor: 'white',
        height: 60,
        width: 372,
        padding: 10,
        borderRadius: 20,
        alignItems: 'stretch',
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    textBox: {
        fontSize: 18,
        
    },
    buttonEntrar: {
        height: 60,
        width: 372,
        backgroundColor: '#14AE5C',
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonEntrar: {
        color: 'white',
        fontSize: 20,
    },
    textButtonRegistrar:{
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#007AFF',
    },
    texto: {
        fontSize: 20,
        margin: 10,
    }
})

export default home;