import react, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';;
import Header from '../components/header';
import axios from 'axios';
import { type ProductType } from '../types';
import Product from '../components/product';


export const HomeScreen = () => {
  const [produtos, setProdutos] = useState<ProductType[]>([]);

  const getProdutos = async (): Promise<ProductType[]> => {
    try {
      const response = await axios.get('https://api-produtos-unyleya.vercel.app/produtos');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return [];
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const produtos = await getProdutos();
      setProdutos(produtos);
    };

    fetchProducts();
  }, []);

  return (
    <View>
      <Header disabledBackButton />
      <View >
        <FlatList
          data={produtos}
          renderItem={({ item }) => <Product product={item} />}
          keyExtractor={(item) => item._id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
}
