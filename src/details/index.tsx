import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";
import Header from '../components/header';
import { styles } from './styles';
import { Host, Icon } from '@expo/ui';

export const DetailsScreen = ({ productId }: { productId: number }) => {

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Alexa</Text>
        <Text style={styles.subtitle}>Details Screen</Text>
        <Image source={{ uri: 'https://dummyjson.com/image/150' }} style={styles.image} />
        <Text style={styles.price}>$199.99</Text>
        <Text style={styles.subtitle}>k is a detailed description of the product. It provides all the necessary information that a user might want to know before making a purchase.</Text>
        <View style={{ gap: 30, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => console.log('Star pressed')}>
            <Host matchContents >
              <Icon
                name={Icon.select({
                  ios: 'pencil.circle',
                  android: import('@expo/material-symbols/edit.xml'),
                })}
                size={32}
                color="blue"
              />
            </Host>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Hexagon pressed')}>
            <Host matchContents >
              <Icon
                name={Icon.select({
                  ios: 'trash.circle',
                  android: import('@expo/material-symbols/delete.xml'),
                })}
                size={32}
                color="green"
              />
            </Host>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

