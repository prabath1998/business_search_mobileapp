import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItem from './src/components/CategoryItem';

function App(): JSX.Element {
  const commonCategories = [
    {
      name: 'Burger',
      img: require('./src/assets/images/burger.png'),
    },
    {
      name: 'Pizza',
      img: require('./src/assets/images/pizza.png'),
    },
    {
      name: 'Dessert',
      img: require('./src/assets/images/cake.png'),
    },
    {
      name: 'Drinks',
      img: require('./src/assets/images/smoothies.png'),
    },
    {
      name: 'Steak',
      img: require('./src/assets/images/steak.png'),
    },
    {
      name: 'Pasta',
      img: require('./src/assets/images/pasta.png'),
    },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View>
        <Header />
        <Search />

        <FlatList
          data={commonCategories}
          renderItem={({item, index}) => {
            return <CategoryItem name={item.name} imageUrl={item.img} index={index}/>;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={category => category.name}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // container:{
  //   flex: 1,
  //   backgroundColor:'#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }
});

export default App;
