import React from 'react'
import { View, Text } from 'react-native'
import styles from './ProductCard.styles'

const ProductCard = ({name, price}) => {
  return (
    <View style={styles.productCard}>
      <Text style={styles.product_text}>{name}</Text>
      <Text style={styles.product_text}>{price}₺</Text>
    </View>
  )
}

export default ProductCard
