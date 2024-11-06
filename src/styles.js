import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: '3%',
  },
  pointsLeft: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3%',
  },
  characteristicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1%',
  },
  characteristicName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    padding: '3%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    width: 60,
    height: 40,
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  bottomButtons: {
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  snackbar: {
    backgroundColor: 'red',
  },
  snackbarText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
  },
  divider: {
    marginVertical: 4,
    height: 2,
    backgroundColor: 'black',
  },
  topTitle: {
    marginBottom: '5%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    marginBottom: 16,
  },
  title: {
    marginVertical: 12,
    fontWeight: 'bold',
    marginLeft: '10%'
  },
  characteristicsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  characteristicsText: {
    marginLeft: '10%'
  },
  icon: {
    marginRight: '10%'
  },
});
  
  export default styles;