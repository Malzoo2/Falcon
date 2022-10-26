import { StyleSheet, Image, View , Text, FlatList} from 'react-native';
import restaurants from '../../../assets/data/restaurants';
import {Ionicons} from "@expo/vector-icons";
import DishListItem from '../../components/DishListItem';
import  Header  from './Header';
import styles from './styles'

const restaurant = restaurants [0];


const RestaurantDetailsPage = () =>{

  return (
<View style={styles.page}>
 
    <FlatList data={restaurant.dishes}
    ListHeaderComponent={() => <Header restaurant={restaurant}/>}     
    renderItem={({item}) => <DishListItem dish={item} />}/>
  <Ionicons  name='arrow-back-circle'
  size={45}
  color='white'
  style={styles.imageIcon}
  /> 

</View>

  );



};

export default RestaurantDetailsPage;


