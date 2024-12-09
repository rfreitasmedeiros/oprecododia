import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import api from '../../services/api';


export default function addCategoria() {


  const [Categoria, SetCategoria] = useState({
    nome: "",
  });

  const addCategorias = async () => {
    try {
      const categoriaResponse = await fetch("https://api-produtos-9jmi.onrender.com/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(Categoria),
      });

      const categoriaData = await categoriaResponse.json();
      console.log('categoriaData', categoriaData);

      if (categoriaData){
        SetCategoria({nome: nome});
        Alert.alert("Categoria adicionada com sucesso!");
      }else{
        const errorData = await response.json();
        alert.Alert(errorData.message || "Erro ao adicionar a categoria");
      }
      
    } catch (error) {
      
    }
    SetCategoria({nome: ""});
  };

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Cadastrar Categoria</Text>
      
      <TextInput
        style={styles.input}
        value={Categoria.nome}
        placeholder="Nome da categoria"
        onChangeText={(text) => SetCategoria({ ...Categoria, nome: text}) }
      />

      <TouchableOpacity style={styles.button} onPress={addCategorias}>
        <Text style={styles.textButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 40,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    height: 50,
    width: 372,
    backgroundColor: '#14AE5C',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    textAlign: "center",
  },
});
