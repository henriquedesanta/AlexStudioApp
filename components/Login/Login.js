import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable'

export default function LoginScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <View style={styles.container}>
      <Animatable.Image animation="flipInY" style={styles.logo} source={require('./../../assets/logo.png')} />

      <View style={styles.inputContainerEmail}>
        <Image style={styles.inputIcon} source={require('../../assets/icons/email.png')} />
        <TextInput style={styles.input} placeholder="E-mail" />
      </View>

      <View style={styles.inputContainerPwd}>
        <Image style={styles.inputIcon} source={require('../../assets/icons/pwd.png')} />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={!isPasswordVisible} />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.passwordIcon}>
        <Icon
        name={isPasswordVisible ? "eye" : "eye-off"}
        size={20}
        color="black"
        onPress={togglePasswordVisibility}
        marginRight={25}
        />
        </TouchableOpacity>
          {/* <Image style={styles.passwordIcon} source={isPasswordVisible ? require('./../../assets/password-visible.png') : require('./../../assets/password-hidden.png')} /> */}
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text  style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPwdButton}>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.forgotPwdButton}>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
  },
  logo: {
    width: 269.98,
    height: 250,
    marginBottom: 57,
  },
  inputContainerEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '80%',
    height: 50,
  },
  inputContainerPwd: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    width: '80%',
    height: 50,
  },
  inputIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginEnd: 10,
  },
  passwordIcon: {
  },
  loginButton: {
    backgroundColor: '#C16C27',
    borderRadius: 3,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 20,
    width: '80%',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  forgotPwdButton: {
    backgroundColor: 'rgba(193, 108, 39, 0.2)',
    borderRadius: 0,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 20,
    width: '100%',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#2E1F13',
  },
});