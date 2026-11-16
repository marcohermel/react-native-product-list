import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import type { ProductType } from "../../types";

export default function Product({ product }: { product: ProductType }) {
    const navigation = useNavigation();

  const navegar = () => {
    console.log('Navigating to Details screen with productId:', product._id);
    navigation.navigate('Details', { productId: product._id }); 
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={navegar}>
          <View style={styles.content}>
            <Image source={{ uri: product.url_imagem }} style={styles.image}   />
            <Text style={styles.title}>{product.nome}</Text>
            <Text numberOfLines={2} style={styles.description}>{product.descricao}</Text>
            <Text style={styles.price}>R$ {product.preco}</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
}