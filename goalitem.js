import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Goitem = props => {
  console.log('rpoos', props.itemData);
  return (
    <TouchableOpacity
      activeOpacit={0.8}
      onPress={() => props.onDelete(props.itemData.index)}>
      <View key={props.itemData.index} style={styles.listItem}>
        <Text>{props.itemData.item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    margin: 40,
  },
});
export default Goitem;
