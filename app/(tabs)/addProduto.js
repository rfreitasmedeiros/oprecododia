import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

export default function AddProduct() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [local, setLocal] = useState("");

  const handleAddProduto = async () => {
    try {
      await fetch("https://api-produtos-6p7n.onrender.com/products", {
        nome,
        preco,
        categoria,
        local,
      });
      alert("Produto adicionado!");
    } catch (error) {
      alert("Erro ao adicionar o produto");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Preço" onChangeText={setPreco} style={styles.input} />
      <TextInput placeholder="Categoria" onChangeText={setCategoria} style={styles.input} />
      <TextInput placeholder="Localização" onChangeText={setLocal} style={styles.input} />
      <Button title="Adicionar Produto" onPress={handleAddProduto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16 },
  input: { 
    borderWidth: 1, 
    marginVertical: 8, 
    padding: 8 },
});