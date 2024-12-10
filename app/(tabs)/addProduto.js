import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView, StyleSheet } from 'react-native';
import api from '../../services/api'
import { Picker } from '@react-native-picker/picker';
import useAuthStore from "../../Store/authStore";
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraView } from 'expo-camera';
import CameraViewComponent from '../../components/CameraViewComponent';
import { router } from 'expo-router';


const FormScreen = () => {

  const { usuario } = useAuthStore();

  const [categorias, setCategorias] = useState([]);
  const [locais, setLocais] = useState([]);

  const [local, setLocal] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [observacao, setObservacao] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); 

    

  useEffect(() => {
    async function loadCategorias() {
        const response = await api.get('/categories');
        setCategorias(response.data);
    }

    async function loadLocais() {
        const response = await api.get('/locations');
        setLocais(response.data);

    }

    loadCategorias();
    loadLocais();
}
    , []);

  const valInfo = () => {
    if (!local || !nome || !preco || !categoria|| !selectedImage) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return false;
    }

    salvarDados();
  };


  const salvarDados = async () => {
    const data = new FormData();
    data.append('nome', nome);
    data.append('preco', preco);
    data.append('descricao', observacao);
    data.append('usuario', usuario);
    data.append('categoriaId', categoria);
    data.append('localId', local);
    data.append('image', {
          uri: selectedImage,
          type: 'image/jpeg',
          name: 'image.jpg',
    })

    console.log(data);

    const url = "https://api-produtos-9jmi.onrender.com/products";

    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });

    if (response.status === 201) {
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!!', [{
        onPress: () => router.replace('(tabs)/telaInicial')
      }])

    } else {
      Alert.alert('Erro ao cadastrar produto!!')
    }

    setLocal('');
    setNome('');
    setPreco('');
    setCategoria('');
    setObservacao('');
    setSelectedImage(null);

  };


  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
        alert("Necessita de permissão para acessar a galeria");
        return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
  }

};

const removeImage = () => {
  setSelectedImage(null);
}


  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Adicionar Produto</Text>
        </View>
        <Text style={styles.label}>Local *</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={local} onValueChange={(itemValue) => setLocal(itemValue)} style={styles.picker}>

          <Picker.Item label='Selecione um local...' value="" />
            {locais.map(location => (
              <Picker.Item key={location.id} label={location.nome} value={location.id} />
            ))}

          </Picker>
        </View>

        <Text style={styles.label}>Nome: *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Preço: *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o preço"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Categoria: *</Text>
        <View style={styles.pickerContainer}>

          <Picker selectedValue={categoria} style={styles.picker} onValueChange={(itemValue) => setCategoria(itemValue)}>

            <Picker.Item label='Selecione uma categoria...' value="" />
            {categorias.map(category => (
              <Picker.Item key={category.id} label={category.nome} value={category.id} />
            ))}

          </Picker>

        </View>

        <Text style={styles.label}>Observação:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite a observação"
          value={observacao}
          onChangeText={setObservacao}
          multiline
        />

        <Text style={styles.label}>Fotos: *</Text>

          <View style={styles.imageContainer}>
            <Image source={{ uri: selectedImage }} style= {{ width: 100, height: 100, margin: 20, borderRadius:20, borderWidth:2, borderColor: "Gray" }} />
          </View>

          <View>
          <TouchableOpacity style={styles.buttonAdd} onPress={pickImage}>
              <Text style={styles.textButton}>Adicionar foto</Text>
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity style={styles.buttonRemove} onPress={removeImage}>
              <Text style={styles.textButton}>Remover Imagem</Text>
            </TouchableOpacity>
          </View>
          
        <TouchableOpacity style={styles.button} onPress={valInfo}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#fff",
    },
    label: {
      margin: 5,
    },
    pickerContainer: {
      borderWidth: 0.2,
      borderColor: "Gray",
      borderRadius: 20,
      margin: 10,
    },
    title: {
      fontSize: 24, 
      fontWeight: "bold", 
      marginBottom: 40,
      textAlign: "center",
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 20,
      paddingHorizontal: 10,
      margin: 10,
      borderWidth: 0.5,
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
    imageContainer: {
      width: '100%',
      minHeight: 200,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      marginTop: 20,
    },
    buttonAdd: {
      height: 50,
      width: 372,
      backgroundColor: 'darkcyan',
      padding: 10,
      borderRadius: 20,
      marginBottom: 5,
      marginTop: 5,
    },
    photoButtonText: {
      textAlign: "center",
      color: "black"
    },
    button: {
      height: 50,
      width: 372,
      backgroundColor: '#14AE5C',
      padding: 10,
      borderRadius: 20,
      marginTop: 10,
    },
    buttonRemove: {
      height: 50,
      width: 372,
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 20,
      marginBottom: 5,
      marginTop: 5,
    },
    textButton: {
      color: 'white',
      fontSize: 20,
      textAlign: "center",
    },


});

export default FormScreen;