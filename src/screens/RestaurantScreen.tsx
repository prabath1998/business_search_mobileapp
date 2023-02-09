import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import useRestaurant from '../hooks/useRestaurant';
import {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';

function RestaurantScreen({navigation}) {
  const [{data, loading, error}, searchRestaurant] = useRestaurant();
  const id = navigation.getParam('id');

  const dimensions = Dimensions.get('window');
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9) / 16);

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  if (loading)
    return <ActivityIndicator size="large" color="black" marginVertical={50} />;

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );
  }

  return (
    <View >
      {data && (
        <FlatList        
        data={data.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={[{height: imageHeight, width: imageWidth,marginBottom:10,borderRadius:30}]}
          />
        )}
      />
      )}
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
  parent: {   
    borderRadius: 10,      
    marginVertical: 15,
    marginRight:10
    
    
  },
});

export default RestaurantScreen;
