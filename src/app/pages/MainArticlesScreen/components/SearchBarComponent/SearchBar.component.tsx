import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { StyledInputField } from './SearchBar.styles';

export const SearchBar: React.FC<{}> = () => {
  return (
    <View>
      <Text>input</Text>
      <StyledInputField onChangeText={text => Alert.alert(text)} />
    </View>
  );
};
