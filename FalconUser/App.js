import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View , Text, FlatList} from 'react-native';
import Basket from './src/screens/Basket';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import OrderDetails from './src/screens/OrderDetails';
import OrderScreen from './src/screens/OrdersScreen';


export default function App() {
  return (
    <View style={styles.container}>
     {/* <HomeScreen/>       */}
     {/* <RestaurantDetailsPage/> */}
     {/* <DishDetailsScreen /> */}
     {/* <Basket /> */}
     {/* <OrderScreen/> */}
     <OrderDetails/>
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
