import { StyleSheet } from "react-native";


const styles = StyleSheet.create ({
    menuItems:{
        marginTop:20,
        marginLeft:20,
        marginRight:20
    },
    icon:{
        color:'white'
    },
    menuRow:{
        flexDirection:"row",
        alignItems:'center',
        marginBottom:20
    },
    menuTextBox:{
       flexGrow:1 
    },
    menuText:{
        color:'white',
        fontSize:19,
        fontWeight:"bold",
        marginLeft:15
        
    },
    subTitle:{
        color:'gray',
        fontSize:14,
        marginLeft:15
    }
})

export default styles