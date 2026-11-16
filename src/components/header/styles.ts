import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E87D00',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    title: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 0,
        fontFamily: 'Poppins-Bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    safeArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },
    backButton: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        color: '#FFFFFF',
        marginLeft: 10,
    }
})