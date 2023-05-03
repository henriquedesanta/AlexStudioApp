import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./../../assets/logo.png')} />
      <Text style={styles.label}>Entre com Login e Senha</Text>
      <TextInput style={styles.input} placeholder="Usuário" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <TouchableOpacity>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 358,
    height: 210,
    marginBottom: 150,
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 20,
    marginTop: 0,
    marginBottom: 50,
  },
  input: {
    fontFamily: 'Inter',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    width: '80%',
  },
  link: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#C16C27',
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontSize: 20,
    color: '#fff',
  },
});