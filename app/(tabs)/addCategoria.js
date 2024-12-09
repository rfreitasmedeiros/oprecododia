import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function addCategoria() {


  const [categoria, setCategoria] = useState({
    nome: ""
  });

  const addCategoria = async () => {
    try {
      const categoriaResponse = await fetch("https://api-produtos-9jmi.onrender.com/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categoria)
      });

      const categoriaData = await categoriaResponse.json();
      console.log('categoriaData', categoriaData);

      if (categoriaData.ok) {
        alert("Categoria adicionada com sucesso!");
        setCategoria({nome: nome});
      } else {
        const errorData = await categoriaResponse.json();
        alert(errorData.message || "Erro ao adicionar a categoria.");
      }
    } catch (error) {

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.titulo}>Cadastrar Categoria</Text>
      </View>
      
      <TextInput
        style={styles.input}
        value={categoria.nome}
        placeholder="Nome da categoria"
        onChangeText={(text) => setCategoria({categoria, nome: text}) }
      />

      <TouchableOpacity style={styles.button} onPress={addCategoria}>
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
    borderColor: "gray",
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
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  categoryText: {
    fontSize: 16,
  },
  button: {
    height: 60,
    width: 372,
    backgroundColor: '#14AE5C',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
},
textButton: {
    color: 'white',
    fontSize: 20,
},
});
