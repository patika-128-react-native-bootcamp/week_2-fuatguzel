import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Input.styles'
import Button from '../Button'

const Input = ({label,setData}) => {

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.instructions}>{label}: </ Text>
        <TextInput style={styles.input} type="text" onChangeText={setData} />
      </View>
    </View>
  )
}

export default Input
