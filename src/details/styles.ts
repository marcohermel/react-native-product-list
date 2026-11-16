import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
    color: '#000'
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    color: '#000'
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
    color: '#000'
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    width: 250,
    height: 250,
  }
});