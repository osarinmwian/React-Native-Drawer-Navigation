import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'


function Home ({navigation}){
  
  return (
    <View style={styles.container}>
   <Text style={styles.text}>
  Home
   </Text>
  
 </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:40,
    fontWeight:"bold",
    margin:10
  }
});

export default Home;