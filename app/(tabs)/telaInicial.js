import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, FlatList} from "react-native";
import axios from "axios";

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
  
    useEffect(() => {
      listarProdutos();
    }, []);
  
    const listarProdutos = async () => {
      try {
        const response = await fetch("https://api-produtos-6p7n.onrender.com/products");
        setProdutos(response.data);
      } catch (error) {
        Alert.alert("Erro ao listar os produtos");
      }
    };
  
    const handlePesquisa = async () => {
      if (!pesquisa) return listarProdutos();
      try {
        const response = await fetch(`https://api-produtos-6p7n.onrender.com/products/${search}`);
        setProdutos([response.data]);
      } catch (error) {
        alert("Erro ao procurar pelo produto");
      }
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Pesquisar produtos"
          onChangeText={setPesquisa}
          onSubmitEditing={handlePesquisa}
          style={styles.input}
        />
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.nome}</Text>
              <Text>{item.preco}</Text>
              <Text>{item.endereco}</Text>
              <Text>{item.usuario}</Text>
            </View>
          )}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16 
    },
    input: { 
        borderWidth: 1, 
        marginVertical: 8, 
        padding: 8, 
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1, }
        
  });
