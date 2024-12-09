import React from "react";
import { router } from "expo-router";
import { Text, View, Image, TouchableHighlight} from "react-native";
import useAuthStore from "../../Store/authStore";

export default function Perfil(){

    const { usuario, usuarioLogado, logout} = useAuthStore();

    const quitar = () => {
        logout();
    }

    return (
        <>
            {
                usuarioLogado ?(
                    <View>
                        <View style={{width: 300, height: 300,}}>
                            <Image style={{width: 100, height: 100, borderRadius: 360}} source={{uri: `https://dummyjson.com/auth/emilys/128`}}/>
                        </View>
                        <Text style={{fontSize: 20}}>"{usuario}"</Text>
                        <TouchableHighlight>
                            <Text style={{textDecorationLine: 'underline', color: 'blue'}}>Editar Perfil</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Text style={{textDecorationLine: 'underline', color: 'blue'}}>Notificações</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Text style={{textDecorationLine: 'underline', color: 'blue'}}>Excluir minha conta</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Text onPress={quitar} style={{textDecorationLine: 'underline', color: 'blue'}}>Sair</Text>
                        </TouchableHighlight>
                </View>
                ) : router.replace('telaLogin')
            }

        </>
       
    )
}