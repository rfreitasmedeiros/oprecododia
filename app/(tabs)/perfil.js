import React from "react";

import { Text, View, StyleSheet, Image, TouchableOpacity, TouchableHighlight, TextInput} from "react-native";
import useAuthStore from "../../Store/authStore";
import { router } from "expo-router";

export default function Perfil(){

    const { usuario, usuarioLogado, logout, avatar } = useAuthStore();

    const quitar = () => {
        logout();
    }

    return (
        <>
            {
                usuarioLogado ?(
                    <View>
                        <Text style={{fontSize: 20}}>Perfil: {usuario}</Text>
                        <Image style={{width: 300, height: 300,}} source={avatar}/>
                        <TouchableHighlight onPress={quitar}>
                            <Text style={{textDecorationLine: 'underline', color: 'blue'}}>Retornar</Text>
                        </TouchableHighlight>
                </View>
                ) : router.replace('telaLogin')

            }

        </>
       
    )
}