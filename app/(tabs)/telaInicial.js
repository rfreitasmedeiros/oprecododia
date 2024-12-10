import React, { useState, useEffect } from "react";
import {View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from "react-native";

export default function telaInicial() {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [processo, setProcesso] = useState(false);

  const listaProdutos = async () => {
    setProcesso(true);
    try {
      const response = await fetch("https://api-produtos-9jmi.onrender.com/products", {
        method: "GET",
        headers: {
          "Content-Type" : "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }

      const data = await response.json();
      setProdutos(data);
      setProdutosFiltrados(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setProcesso(false);
    }
  };

  useEffect(() => {
    listaProdutos();
  }, []);

  const handleSearch = (query) => {
    setPesquisa(query);
    if (query === "") {
      setProdutosFiltrados(produtos);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: `https://api-produtos-9jmi.onrender.com/products/${listaProdutos.image}` }} style={styles.productImage}/>
      <Text style={styles.itemTitulo}>{item.nome}</Text>
      <Text style={styles.itemSubtitulo}>Preço: R$ {item.preco}</Text>
      <Text style={[styles.itemSubtitulo]}></Text>
      <Text style={styles.itemSubtitulo}>Local: {item.Location.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar produtos..."
        value={pesquisa}
        onChangeText={handleSearch}
      />

      {processo ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto encontrado.</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  itemTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemSubtitulo: {
    fontSize: 14,
    color: "#555",
  },
  emptyText: {
    textAlign: "center",
    color: "#777",
    marginTop: 20,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
});
