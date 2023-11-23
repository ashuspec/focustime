import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import colors from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = (props) => {
  if (props.focusHistory.length === 0)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          We haven't focused on anything yet
        </Text>
      </View>
    );

  const renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <FlatList data={props.focusHistory} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.sm,
  },
});
