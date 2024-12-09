import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import addCategoria from "./addCategoria";
import AddLocal from "./addLocal";
import axios from "axios";

export default function AddProduct() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [local, setLocal] = useState("");

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Preço" onChangeText={setPreco} style={styles.input} />
      <TextInput placeholder="Categoria" onChangeText={setCategoria} style={styles.input} />
      <TextInput placeholder="Localização" onChangeText={setLocal} style={styles.input} />
      <Button title="Adicionar Produto"  />
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