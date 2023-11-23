import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RoundedButton } from '../components/RoundedButton';

import { spacing } from '../utils/sizes';

export const Timing = (props) => {
  return (
    <View style={styles.timingWrapper}>
      <RoundedButton
        title={'+5'}
        size={75}
        onPress={() => {
          props.onChangeTime((prev) => prev + 5);
        }}
      />
      <RoundedButton
        title={'+10'}
        size={75}
        onPress={() => {
          props.onChangeTime((prev) => prev + 10);
        }}
      />
      <RoundedButton
        title={'+15'}
        size={75}
        onPress={() => {
          props.onChangeTime((prev) => prev + 15);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timingWrapper: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
  },
});
