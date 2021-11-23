import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import styles from './Button.style'

const Button = ({title, onClick}) => {
  return ( 
  <TouchableOpacity style={styles.container} onPress={onClick}>
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button