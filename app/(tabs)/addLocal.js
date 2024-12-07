import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity} from "react-native";

export default function AddLocal() {

  const [local, setLocal] = useState({
    nome: "",
    cep: "",
    logradouro: "",
    Nº: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

    const handleSalvarLocal = async () => {
        try {
          if (
            !local.nome ||
             !local.cep ||
              !local.logradouro ||
               !local.Nº ||
                !local.bairro ||
                 !local.cidade ||
                  !local.estado
                ) {
            Alert.alert("Erro", "Todos os campos são obrigatórios.");
            return;
          }
    
          const response = await fetch("https://api-produtos-6p7n.onrender.com/locations", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nome: nome,
              cep: cep,
              logradouro: logradouro,
              Nº: Nº,
              bairro: bairro,
              cidade: cidade,
              estado: estado,
            }),
          });

          const result = await response.json();
          
          if (!response.ok) {
            console.error("Erro no servidor:", result);
            throw new Error(result.message || "Erro ao cadastrar o local.");
          } else {
            Alert.alert("Sucesso", "Local cadastrado com sucesso!");
          setLocal({nome: "", cep: "", logradouro: "", Nº: "", bairro: "", cidade: "", estado: "",});
          }
          
        } catch (error) {
          console.error(error);
          Alert.alert("Erro", "Não foi possível cadastrar o local.");
        }
      };

  return (
    <View style={[styles.container]}>
            <Text style={styles.titulo}>Adicionar Local</Text>]

            <View>
                <Text style={styles.descricao}>Nome:</Text>
                <TextInput
                style={styles.input}
                value={local.nome}
                onChangeText={(text) => setLocal({ ...local, nome: text })}
                />
            </View>
      
            <View>
                <Text style={styles.descricao}>CEP:</Text>
                <TextInput
                    style={styles.input}
                    value={local.cep}
                    keyboardType="numeric"
                    onChangeText={(text) => setLocal({ ...local, cep: text })}
                />
            </View>

            <View>
                <Text style={styles.descricao}>Logradouro:</Text>
                <TextInput
                    style={styles.input}
                    value={local.logradouro}
                    onChangeText={(text) => setLocal({ ...local, logradouro: text })}
                />
            </View>

            <View>
                <Text style={styles.descricao}>Nº:</Text>
                <TextInput
                style={styles.input}
                value={local.Nº}
                keyboardType="numeric"
                onChangeText={(text) => setLocal({ ...local, Nº: text })}
            />
            </View>

            <View>
                <Text style={styles.descricao}>Bairro:</Text>
                <TextInput
                style={styles.input}
                value={local.bairro}
                onChangeText={(text) => setLocal({ ...local, bairro: text })}
            />
            </View>
      
            <View>
                <Text style={styles.descricao}>Cidade:</Text>
                <TextInput
                style={styles.input}
                value={local.cidade}
                onChangeText={(text) => setLocal({ ...local, cidade: text })}
            />
            </View>
      
            <View>
                <Text style={styles.descricao}>Estado:</Text>
                <TextInput
                 style={styles.input}
                value={local.estado}
                onChangeText={(text) => setLocal({ ...local, estado: text })}
                />
            </View>
     
            <View>
                <TouchableOpacity style={styles.buttonSalvar} onPress={handleSalvarLocal}>
                    <Text style={styles.textButtonSalvar}>Salvar</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16,
    backgroundColor: "#fff", 
    justifyContent: 'space-evenly'},
  titulo: { 
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 10 },
  descricao: { 
    fontSize: 14, 
    marginVertical: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: "#f9f9f9",
    marginBottom: 8,
  },
  buttonSalvar: {
    height: 60,
    width: 372,
    backgroundColor: '#14AE5C',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
},
textButtonSalvar: {
    color: 'white',
    fontSize: 20,
},
});
