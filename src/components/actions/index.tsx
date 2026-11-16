import { Host, Icon } from '@expo/ui';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

<View style={styles.container}>
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