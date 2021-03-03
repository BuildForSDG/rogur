import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { render } from 'react-dom';
import { useForm } from 'react-hook-form';

const Profile = () => {

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => console.log(data);

  useEffect(() => {
    register('firstName');
    register('lastName');
    register('phone');
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First name</Text>
      <TextInput style={styles.input} onChangeText={text => {
        setValue('firstName', text)
      }}/>

      <Text style={styles.label}>Last name</Text>
      <TextInput style={styles.input} onChangeText={text => {
        setValue('lastName', text)
      }}/>

      <Text style={styles.label}>Phone</Text>
      <TextInput style={styles.input} onChangeText={text => {
        setValue('lastName', text)
      }}/>

      <View style={styles.button}>
        <Button
          title="S U B M I T"
          style={styles.buttonText}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  )
}

// function mapStateToProps(state) {
//     return {

//     }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  label: {
    fontSize: 15,
    padding: 10,
    margin: 10,
    color: 'grey'
  },

  input: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },

  button: {
    padding: 10,
    margin: 10,
    // backgroundColor: 'pink',
  },

})

export default Profile