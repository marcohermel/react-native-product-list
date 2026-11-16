import * as React from 'react';
import { Text, View, Image, ScrollView, useWindowDimensions } from "react-native";
import RenderHtml from 'react-native-render-html';
import Header from '../components/header';
import { styles } from './styles';
import axios from 'axios';
import type { StaticScreenProps } from '@react-navigation/native';

type Props = StaticScreenProps<{ productId: string }>;

export const DetailsScreen = ({ route }: Props) => {
  const { productId } = route.params;
  const [productDetails, setProductDetails] = React.useState<any>(null);
  const { width } = useWindowDimensions();

  const getProductDetails = async (id: string) => {
    try {
      const response = await axios.get(`https://api-produtos-unyleya.vercel.app/produtos/${id}`);
      const data = await response.data;
      return data;
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
          <Text style={styles.title}>{productDetails?.nome}</Text>
          <Text style={styles.subtitle}>Details Screen</Text>
          <Image source={{ uri: productDetails?.url_imagem }} style={styles.image} />
          <Text style={styles.price}>R$ {productDetails?.preco}</Text>
          {productDetails?.descricao ? (
            <RenderHtml
              contentWidth={width - 32}
              source={{ html: productDetails.descricao }}
              baseStyle={styles.subtitle}
            />
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
}

