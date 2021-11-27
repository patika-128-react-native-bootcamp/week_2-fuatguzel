import React from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import Button from '../Button'
import Input from '../Input'
import styles from './ProductInput.styles'

const ProductInput = ({onInput}) => {
  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState('')

  const handleAdd = () => {
    onInput(name, price)
  }

  return (
    <KeyboardAvoidingView style={styles.container} >
      <Input setData={setName} label="Name" />
      <Input setData={setPrice}label="Price" />
      <View style={styles.button_container}>
        <Button title="Add" onClick={handleAdd} />
      </View>
    </KeyboardAvoidingView>  
  )
}

export default ProductInput
