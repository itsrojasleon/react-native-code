import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context } from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin } = useContext(Context);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in to your account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Signin"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SigninScreen;
