import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from "react-native";
import api from '../../services/api';

export default function AddLocal() {

const [Local, SetLocal] = useState({
    nome: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const addLocais = async () => {
    try {
      const localResponse = await fetch("https://api-produtos-9jmi.onrender.com/locations", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(Local)
      });

      const localData = await localResponse.json();
      console.log('localData', localData);

      if (localData) {
        SetLocal({nome: nome, cep: cep, logradouro: logradouro, numero: numero,
        bairro: bairro, cidade: cidade, estado: estado });
        Alert.alert("Local adicionado com sucesso!");
      } else {
        const errorData = await localResponse.json();
        alert.Alert(errorData.message || "Erro ao adicionar local");
      }
    } catch (error) {

    }
    SetLocal({nome: "", cep: "", logradouro: "", numero: "", bairro: "", cidade: "", estado:"" });
  };

  return (
    <View style={[styles.container]}>
            <Text style={styles.titulo}>Adicionar Local</Text>

            <View>
                <Text style={styles.descricao}>Nome:</Text>
                <TextInput
                style={styles.input}
                value={Local.nome}
                onChangeText={(text) => SetLocal({ ...Local, nome: text })}
                />
            </View>
      
            <View>
                <Text style={styles.descricao}>CEP:</Text>
                <TextInput
                    style={styles.input}
                    value={Local.cep}
                    keyboardType="numeric"
                    onChangeText={(text) => SetLocal({ ...Local, cep: text })}
                />
            </View>

            <View>
                <Text style={styles.descricao}>Logradouro:</Text>
                <TextInput
                    style={styles.input}
                    value={Local.logradouro}
                    onChangeText={(text) => SetLocal({ ...Local, logradouro: text })}
                />
            </View>

            <View>
                <Text style={styles.descricao}>Nº:</Text>
                <TextInput
                style={styles.input}
                value={Local.numero}
                keyboardType="numeric"
                onChangeText={(text) => SetLocal({ ...Local, numero: text })}
            />
            </View>

            <View>
                <Text style={styles.descricao}>Bairro:</Text>
                <TextInput
                style={styles.input}
                value={Local.bairro}
                onChangeText={(text) => SetLocal({ ...Local, bairro: text })}
            />
            </View>
      
            <View>
                <Text style={styles.descricao}>Cidade:</Text>
                <TextInput
                style={styles.input}
                value={Local.cidade}
                onChangeText={(text) => SetLocal({ ...Local, cidade: text })}
            />
            </View>
      
            <View>
                <Text style={styles.descricao}>Estado:</Text>
                <TextInput
                 style={styles.input}
                value={Local.estado}
                onChangeText={(text) => SetLocal({ ...Local, estado: text })}
                />
            </View>
     
            <View>
                <TouchableOpacity style={styles.buttonSalvar} onPress={addLocais}>
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
    justifyContent: 'space-evenly'
  },
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
