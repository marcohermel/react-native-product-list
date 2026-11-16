import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import type { ProductType } from "../../types";

export default function Product({ product }: { product: ProductType }) {
    const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate('Details'); 
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={navegar}>
          <View style={styles.content}>
            <Image source={{ uri: 'https://dummyjson.com/image/150' }} style={styles.image}   />
            <Text style={styles.title}>{product.title}</Text>
            <Text numberOfLines={2} style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
}