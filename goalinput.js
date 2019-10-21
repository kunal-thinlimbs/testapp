import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  FlatList,
  Modal,
} from 'react-native';
const GoalInput = props => {
  const [enterGoal, setEnterGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);
  const handleChange = e => {
    setEnterGoal(e);
  };

  return (
    <Modal
      onRequestClose={() => props.onClose()}
      visible={props.visible}
      animationType="slide">
      <View style={styles.inputConatiner}>
        <TextInput
          onChangeText={handleChange}
          style={styles.input}
          placeholder="Enter Tag"
        />

        <View style={styles.buttonCoitainer}>
          <View style={styles.button}>
            <Button onPress={() => props.onAddGoal(enterGoal)} title="add" />
          </View>
          <View style={styles.fancybutton}>
            <Button onPress={() => props.onClose()} title="close" color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: '80%',
    borderColor: 'black',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    margin: 40,
  },
  buttonCoitainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },

  button: {
    width: '40%',
  },
});
