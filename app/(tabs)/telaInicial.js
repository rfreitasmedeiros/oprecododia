import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, TextInput, FlatList} from "react-native";
import api from '../../services/api';
import { SafeAreaView } from "react-native-web";

export default function TelaInicial() {
    const [produtos, setProdutos] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
  
    useEffect(() => {
      async function listarProdutos(){
        const response = await api.get('/products');
        setProdutos(response.data);
      };

      async function Pesquisa(){
        const response = await api.get('/products/nome');
        setPesquisa(response.data);
      };

      listarProdutos();
      Pesquisa();
    }, []);
  
    return (
      <View style={styles.container}>
      <TextInput
        data={pesquisa}
        placeholder="Pesquisar produtos"
        onChangeText={setPesquisa}
        style={styles.input}
      />
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image style={styles.image} source={{uri:`https://api-produtos-9jmi.onrender.com/${produtos.Image}`}}/>
            <Text>Nome: {item.nome}</Text>
            <Text>Preço: R$ {item.preco}</Text>
            <Text>Endereço: {item.Location.nome} </Text>
          </View>
        )}
      />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        backgroundColor: "#fff"
    },
    input: { 
        borderWidth: 1, 
        marginVertical: 8, 
        padding: 8, 
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1, 
      },
    image: {
      width: 100,
      height: 100,
    },
  });
