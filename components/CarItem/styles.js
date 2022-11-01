import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    carContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'orange'
    },
    header:{
        marginTop:30,
        marginLeft:10,
        marginRight:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerTitle:{
        marginTop:30,
        color:'white',
        fontSize:24,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        color:'white'
    },
    backgroundImage:{
        width:'100%',
        height:'100%',
        position:'absolute',
        resizeMode:'cover'
    },
    batterySection:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    batteryImage:{
        height:26,
        width:70,
        marginRight:18,
        marginTop:30
    },
    batteryText:{
        color:"white",
        fontSize:30,
        fontWeight:'bold',
        marginTop:30

    },
    status:{
        alignItems:'center',
        
    },
    controls:{
        flexDirection:'row',
        justifyContent:"center",
        marginTop:160
    },
    controlsButton:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        padding:18,
        marginLeft:25
    },
    menuItems:{
        
    }
})

export default styles;