import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const AddButton = () => {
    return (
    <View style = {styles.container}>
        <TouchableOpacity>
            <Text style = {styles.text}>Add</Text>
        </TouchableOpacity>
    </View>
    )
}
export default AddButton;
const styles = StyleSheet.create ({
    container: {
    alignItems: 'center',
    },
    text: {
    borderWidth: 2,
    borderRadius:25,
    padding: 10,
    marginBottom: 10,
    borderColor: '#776677',
    color: '#776677',
    backgroundColor: 'white'
    }
})