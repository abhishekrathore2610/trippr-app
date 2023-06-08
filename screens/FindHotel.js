import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FindHotel = () => {
  return (
    <View style={styles.container}>
        <View style={styles.uppercontainer}>
            <Image source={require('../assets/hotel-booking-new.png')} style={styles.image1} />
        </View>
        <View style={styles.lowercontainer}>
            <Image source ={require('../assets/backgroung-one.png')} resizeMode='cover' style={styles.image2}/>
            <Text style={styles.text1}>Find Hotel and Homestays</Text>
            <Text style={styles.text2}>Discover new places and share with your friends and travel Together</Text>

        </View>
      
    </View>
  )
}

export default FindHotel

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
        width: '100%',
        height:'100%',
        position:'relative'
        

    },
    uppercontainer: {
        flex: 0.5,
        alignItems:'center',
        justifyContent:'center',
    },
    lowercontainer: {
        flex: 0.5,
        justifyContent:'flex-end',
        width:'100%',
        alignContent:'center',
        position:'relative',
        bottom:0,
        
        
        

    },
    image2 : {
        width: '100%',
    },
    text1 : {
        position:'absolute',
        bottom:"33%",
        textAlign:'center',
        width:'100%',
        fontSize:25,
        // fontFamily:'Montserrat',
        color:'#5158D5',
        fontWeight:"400",
        // letterSpacing:'.5'

    }, text2: {
        position:'absolute',
        bottom:'14%',
        textAlign:'center',
        width: '100%',
        color:'#9747FF',
        bottom: '20%',
        // fontFamily:'Montserrat',
        // letterSpacing:'.7'
    }, image1: {
        width:'75%',
        height:'60%'
    }
    



    
})