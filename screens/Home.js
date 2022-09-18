import React, { Component } from 'react';
import {
    
    Text,
     View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    Image,
    ImageBackground
    } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style = {styles.container}      >
               <SafeAreaView style = {styles.AndroidSafeArea}/>
            <ImageBackground source={require("../assets/bg_image.png")}
            style = {styles.backgroundImage}
            >
            <View style = {styles.TitleBar}>
             <Text style = {styles.TitleText}>IssTrackerApp </Text>
             </View>
            
              <TouchableOpacity style = {styles.routeCard}
              onPress = {()=>
            this.props.navigation.navigate("IssLocation")
               }
              >
                
                <Text style = {styles.routeText}>IssLocation</Text>
                <Text style = {styles.knowMore}>{"Know More -->"}</Text>
                <Text style = {styles.bgDigit}>1</Text>
                <Image source={require("../assets/iss_icon.png")}>
                style = {styles.iconImage}
                </Image>
                </TouchableOpacity>  

                <TouchableOpacity style = {styles.routeCard}
                onPress = {()=>
                this.props.navigation.navigate("Meteors")
                }>

                    <Text style = {styles.routeText}>Meteors</Text>
                    <Text style = {styles.knowMore}>{"Know More -->"}</Text>
                    <Text style = {styles.bgDigit}>2</Text>
                    <Image source={require("../assets/meteor_icon.png")}>
                        style = {styles.iconImage}
                    </Image>
                 </TouchableOpacity>
                  </ImageBackground>
                  </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1
        
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"
    },
    TitleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
    },
    TitleText:{
        fontSize:40,
        color:"white",
        fontWeight:"bold"
    },
    routeText:{
        fontSize:35,
        color:"black",
        fontWeight:"bold",
        marginTop:75
    },
    knowMore:{
        fontSize:15,
        color:"red",
         
    },
        
    bgDigit:{
        position:"absolute",
        color:"rgba(183,183,183,0.5)",
        fontSize:150,
        right:20
         },
         iconImage:{
            position:"absolute",
            height:200,
            width:200,
            right:20,
            top:-80
         },
         AndroidSafeArea:{
            marginTop:Platform.os === "android"?statusbar.currentHeight:0
         }
    
})

