import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import useRestaurants from '../hooks/useRestaurants';
import {useEffect} from 'react';
import RestaurantItem from './RestaurantItem';

function Restautants({term}) {
  const [{data, loading, error}, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  console.log({data: data, loading, error});

  if (loading)
    return <ActivityIndicator size="large" color="gold" marginVertical={50} />;

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>        
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
          data={data}
          keyExtractor={restaurant => restaurant.id}
          renderItem={({item}) => <RestaurantItem restaurant={item}/>}
          
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
  },  
});

export default Restautants;
