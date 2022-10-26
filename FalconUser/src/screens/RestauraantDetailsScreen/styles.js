import { StyleSheet } from "react-native";


const styles = StyleSheet.create({ 
    image: {
      width: '100%',
      aspectRatio: 5/3,
    },
    imageIcon : {
      position: 'absolute',
      top: 40,
      left: 10,
    },
    page: {
      flex: 1
    },
    title: {
      fontSize: 35,
      fontWeight: "600",
      marginVertical: 10,
  
    },
    subtitle:{
      fontSize: 15,
      color: 'gray',
    },
    container: {
      margin:10
    }
   });

   export default styles;