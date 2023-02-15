import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
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
