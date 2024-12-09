import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, TextInput, FlatList} from "react-native";
import api from '../../services/api';
import { SafeAreaView } from "react-native-web";

export default function TelaInicial() {
    const [produtos, setProdutos] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
  
      // Função para buscar produtos da API
  const products = async () => {
    try {
      const response = await fetch("https://api-produtos-6p7n.onrender.com/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!produtosData) {
        throw new Error("Erro ao buscar produtos");
      }

      const produtosData = await response.json();
      setProdutos(produtosData); // Salva a lista de produtos
    } catch (error) {
      console.error("Erro ao buscar produtos:", error.message);
    }
  };

  // Chamada da API ao montar o componente
  useEffect(() => {
    products();
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
            <Image style={styles.image} source={{uri:`https://api-produtos-9jmi.onrender.com/products/${produtos.image}`}}/>
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
      position: 'absolute',
      width: 30,
      height: 30,
    },
  });
