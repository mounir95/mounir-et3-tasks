import React from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import InpurColumnOne from './columns3/inputcolumn1';
import InpurColumnTwo from './columns3/inputcolumn2';
import InpurColumnThree from './columns3/inputcolumn3';

const InputRowThree = () => {
    return (
        <View>
            <InpurColumnOne />
            <InpurColumnTwo />
            <InpurColumnThree />
        </View>
    );
}
export default InputRowThree;