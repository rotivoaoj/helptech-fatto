import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  lista: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#83d9ec',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    marginTop: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  campo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
});