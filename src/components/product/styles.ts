import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,  
        width: '50%',
        margin: 2,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,  
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        fontFamily: 'Poppins-Bold',
        color: '#000'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        width: 100,
        height: 100,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Poppins-Regular',
        color: '#000'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        fontFamily: 'Poppins-Bold',
        color: '#000'
    }
});