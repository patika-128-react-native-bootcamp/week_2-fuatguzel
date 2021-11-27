import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View
} from 'react-native';
import styles from './App.style';
import Badge from './components/Badge';
import Button from './components/Button';
import Input from './components/Input';
import ProductCard from './components/ProductCard';
import ProductInput from './components/ProductInput';

const Line = () => {
  return (
    <View style={styles.line} />
  )
}

const App = () => {
  const [productList, setProductList] = React.useState([]);

  const handleProduct = (name, price) => {
    setProductList([...productList, {
      name,
      price
    }]);
  }

//   const handleFilter = (filter) => {
//     switch (filter) {
//       case 'Artan':
//         setProductList(productList.sort((a, b) => a.price - b.price));
//         break;
//       case 'Azalan':
//         setProductList(productList.sort((a, b) => b.price - a.price));
//         break;
//       case 'Tarih':
//         setProductList(productList.sort((a, b) => a.id - b.id));
//         break;
//       default:
//         setProductList(productList.sort((a, b) => a.id - b.id));
//   }
// }

  const renderProducts = ({item}) => {
    return (
      <View>
        <ProductCard name={item.name} price={item.price} />
        <Line />
      </View>
    )
  }
  

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.button_container}>
        {/* // TODO: butonlar badge */}
        <Badge 
          // onFilter={handleFilter("Artan")}
        />
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={productList}
          renderItem={renderProducts}
          keyExtractor={(item, index) => {
          return index.toString();
        }}
        />
      </View>
      <View style={styles.product_container}>
        <ProductInput onInput={handleProduct} />
      </View>
    </SafeAreaView>
  );
};

export default App;
