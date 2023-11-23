import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import colors from '../utils/colors';
import {spacing} from '../utils/sizes';

import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({onAddSubject}) => {
  const [inputText, setInputText] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label={'What would you like to focus on?'}
          value={inputText}
          // mode={'outlined'}
          activeOutlineColor={colors.blue}
          onChangeText={setInputText}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={()=>{onAddSubject(inputText)}}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput: {
    marginRight:spacing.sm,
    flex: 1,
    color: colors.white,
  },
  button: { justifyContent: 'center' },
});
