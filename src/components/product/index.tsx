import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import type { ProductType } from "../../types";

export default function Product({ product }: { product: ProductType }) {
    const navigation = useNavigation();

  const navegar = () => {
    console.log('Navigating to Details screen with productId:', product.id);
    navigation.navigate('Details', { productId: product.id });
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={navegar}>
          <View style={styles.content}>
            <Image source={{ uri: product.images[0] }} style={styles.image}   />
            <Text style={styles.title}>{product.title}</Text>
            <Text numberOfLines={2} style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>US$ {product.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
}