import { Image, StyleSheet, Text, View } from "react-native";
import { elevation } from '../common/styles';

function CategoryItem({name, imageUrl,index}){
    return(
        <View style={[styles.container,styles.elevation, index === 0 ? {marginLeft:25} : {marginLeft:15}]}>
            <View style={styles.imageContainer}>
                <Image source={imageUrl} style={styles.image}/>
            </View>
            <Text style={styles.header}>{name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      width:70,
      height:100,
      borderRadius:50,
      marginVertical:15,
    //   marginHorizontal:25,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white'
    },
    elevation,
    image:{
        height:35,
        width:35
    },
    imageContainer:{
        width:50,
        height:50,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginBottom:5
    },
    header:{
        fontWeight:'bold',
    }   
  });

export default CategoryItem;