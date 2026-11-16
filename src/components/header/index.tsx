import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Host, Icon } from '@expo/ui';

type HeaderProps = {
    disabledBackButton?: boolean;
};

export default function Header({ disabledBackButton }: HeaderProps) {
    const navigation = useNavigation();

    const voltar = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                {!disabledBackButton && (
                    <TouchableOpacity onPress={voltar} style={styles.backButton}>
                        <Host matchContents >
                            <Icon
                                name={Icon.select({
                                    ios: 'chevron.backward',
                                    android: import('@expo/material-symbols/arrow_back.xml'),
                                })}
                                size={24}
                                color="white"
                            />
                        </Host>
                    </TouchableOpacity>
                )}
                <Text style={styles.title}>My App</Text>
            </SafeAreaView>
        </View>
    );
}   