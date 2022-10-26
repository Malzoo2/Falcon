import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View , Text, FlatList} from 'react-native';
import DishDetailsScreen from './src/screens/DishDetailsScreen';


export default function App() {
  return (
    <View style={styles.container}>
     {/* <HomeScreen/>       */}
     {/* <RestaurantDetailsPage/> */}
     <DishDetailsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  }, 
});
