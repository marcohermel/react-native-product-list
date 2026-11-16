import * as React from 'react';
import { Text, View, Image, ScrollView, useWindowDimensions } from "react-native";
import RenderHtml from 'react-native-render-html';
import Header from '../components/header';
import { styles } from './styles';
import axios from 'axios';
import type { StaticScreenProps } from '@react-navigation/native';
import type { ProductType } from '../types';

type Props = StaticScreenProps<{ productId: number }>;

export const DetailsScreen = ({ route }: Props) => {
  const { productId } = route.params;
  const [productDetails, setProductDetails] = React.useState<ProductType | null>(null);
  const { width } = useWindowDimensions();

  const getProductDetails = async (id: number): Promise<ProductType | null> => {
    try {
      const response = await axios.get<ProductType>(`https://dummyjson.com/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar detalhes do produto:', error);
      return null;
    }
  };

  React.useEffect(() => {
    const fetchProductDetails = async () => {
      const details = await getProductDetails(productId);
      setProductDetails(details);
    };

    fetchProductDetails();
  }, [productId]);


  return (
    <ScrollView>
      <View>
        <Header />
        <View style={styles.container}>
          <Text style={styles.title}>{productDetails?.title}</Text>
          <Text style={styles.subtitle}>Details Screen</Text>
          <Image source={{ uri: productDetails?.images[0] }} style={styles.image} />
          <Text style={styles.price}>US$ {productDetails?.price}</Text>
          {productDetails?.description ? (
            <RenderHtml
              contentWidth={width - 32}
              source={{ html: productDetails.description }}
              baseStyle={styles.subtitle}
            />
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
}

