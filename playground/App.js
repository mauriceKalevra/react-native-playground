import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Image 
     style={{width: 200}}
     source={require('./assets/themes/stronghold.jpg')}
    />
    
    {/* Entry Screen */}
    <View style={styles.taskWrapper}>

   
      <Text style={styles.sectionTitle}>Welcome to the Stronghold Crusader Soundboard</Text>
      <Text style={styles.undersection}>by Maurice Kalevra</Text>
    </View>
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
  taskWrapper: {
    paddingTop: 250,
    paddingHorizontal: 20,
    
  },
  sectionTitle: {},
  undersection: {
    textAlign: 'center',
  },
});
