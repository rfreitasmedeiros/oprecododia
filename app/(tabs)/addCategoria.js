import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Alert,
  StyleSheet,
} from "react-native";

export default function Categories() {
  const [categoryName, setCategoryName] = useState(""); // Estado para o nome da categoria
  const [categories, setCategories] = useState([]); // Estado para lista de categorias

  // Função para buscar categorias existentes (GET)
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://api-produtos-6p7n.onrender.com/categories",
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error("Erro ao carregar categorias.");
      }

      const result = await response.json();
      setCategories(result); // Atualiza as categorias no estado
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível carregar as categorias.");
    }
  };

  // Função para cadastrar uma nova categoria (POST)
  const handleSaveCategory = async () => {
    if (!categoryName.trim()) {
      Alert.alert("Erro", "O nome da categoria é obrigatório.");
      return;
    }

    try {
      const response = await fetch(
        "https://api-produtos-6p7n.onrender.com/categories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: categoryName }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao cadastrar a categoria.");
      }

      Alert.alert("Sucesso", "Categoria cadastrada com sucesso!");
      setCategoryName(""); // Limpa o campo de entrada
      fetchCategories(); // Atualiza a lista de categorias
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível cadastrar a categoria.");
    }
  };

  // Carregar as categorias quando o componente é montado
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Categorias</Text>

      {/* Campo de Nome */}
      <Text style={styles.label}>Nome da Categoria:</Text>
      <TextInput
        style={styles.input}
        value={categoryName}
        onChangeText={setCategoryName}
        placeholder="Digite o nome da categoria"
      />

      {/* Botão de Salvar */}
      <Button title="Salvar Categoria" onPress={handleSaveCategory} />

      {/* Lista de Categorias */}
      <Text style={styles.listTitle}>Categorias Cadastradas:</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma categoria cadastrada.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  label: { fontSize: 16, marginVertical: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#f9f9f9",
    marginBottom: 8,
  },
  listTitle: { fontSize: 18, fontWeight: "bold", marginTop: 16 },
  categoryItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  categoryText: { fontSize: 16 },
  emptyText: { fontSize: 16, fontStyle: "italic", textAlign: "center", marginTop: 16 },
});
