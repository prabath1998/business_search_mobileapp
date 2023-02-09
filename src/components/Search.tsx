import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {elevation} from '../common/styles';
import {useState} from 'react';

function Search({setTerm}) {
  const [input, setInput] = useState('');

  const handleEndEditing = () => {
    if (!input) return
    setTerm(input);
    setInput('');
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <Icon name="search" color="#000" size={25} style={styles.icon} />
      <TextInput
        placeholder="Restaurants, Food..."
        style={styles.input}
        onChangeText={(text) => {
          setInput(text);
        }}
        onEndEditing={handleEndEditing}
        value={input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 25,
    backgroundColor: 'white',
    marginBottom:10,
    borderRadius: 40,
    padding: 3,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    marginLeft: 3,
  },
});

export default Search;
