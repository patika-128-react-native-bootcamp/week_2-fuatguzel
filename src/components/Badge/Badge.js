import React from 'react'
import { View, Text } from 'react-native'
import Button from '../Button'
import styles from './Badge.styles'

const Badge = ({onFilter}) => {
  const [filter, setFilter] = React.useState('')

  const handleFilter = () => {
    setFilter("")
    onFilter(filter)
  }

  return (
    <View style={styles.badge}>
      <Button title="Artan" onClick={handleFilter} />
      <Button title="Azalan" onClick={handleFilter} />
      <Button title="Tarih" onClick={handleFilter} />
    </View>
  )
}

export default Badge
