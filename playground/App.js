import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,} from 'react-native';
import ButtonComponent from './assets/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}> 

  <ButtonComponent />


    </View>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  wrapper: {
    marginTop: 10
    
  },
  sectionTitle: {},
  undersection: {
    textAlign: 'center',
  },
});
