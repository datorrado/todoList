import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Task from './components/task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
      
        <View style={styles.items}>
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
          <Task text={'Task 3'} />
        </View>
      </View>

      <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} /> 
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
     </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  items:{},
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    width:250,
    backgroundColor: '#FFF',
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth: 1,
  },
  addWrapper:{
    width: 60,
    height:60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:"#C0C0C0",
    borderWidth: 1,
  },
  addText:{},
});
