import React, { useEffect } from "react";
import { router } from "expo-router";
import { Text, View, Image, TouchableHighlight, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import useAuthStore from "../../Store/authStore";
import { Home, User, LayoutGrid, List, MapPin } from "lucide-react-native";

export default function Perfil(){

    const { usuario, usuarioLogado, logout} = useAuthStore();

    const quitar = () => {
        logout();
    }

    return (
        <>
            {
                usuarioLogado ?(
                    <View style={styles.container}>
                        <View style={{width: 300, height: 200,}}>
                            <Image style={{width: 100, height: 100, borderRadius: 360}} source={{uri: `https://dummyjson.com/auth/emilys/128`}}/>
                            <Text style={{fontSize: 40, textAlign:'center', marginLeft: 100, color: "#fff", fontWeight: 'bold'}}>{usuario}</Text>
                        </View> 
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{color: "gray", fontSize: 22, textAlign: 'left', }}>Editar Perfil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{color: "gray", fontSize: 22, textAlign: 'left'}}>Notificações</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{color: "gray", fontSize: 22, textAlign: 'left'}}>Excluir minha conta</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text onPress={quitar} style={{color: "gray", fontSize: 22, textAlign: 'left'}}>Sair</Text>
                            </TouchableOpacity>
                        </View>
                        
                </View>
                ) : router.replace('telaLogin') 
            }

        </>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14AE5C',
    },
    box: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",

    },
    button: {
      height: 50,
      width: 400,
      padding: 10,
      borderRadius: 20,
      borderBottomWidth: 1,
      marginTop: 10,
      marginLeft: 5,
    },

})