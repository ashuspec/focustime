import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Vibration } from 'react-native';

import { ProgressBar } from 'react-native-paper';

import { useKeepAwake } from 'expo-keep-awake';

import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';

import { spacing, fontSizes } from '../utils/sizes';
import colors from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;

const Pattern = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = (props) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(Pattern);
            setProgress(1);
            setIsStarted(false);
            setMinutes(0);
          }}
        />
        <View
          style={{
            paddingTop: spacing.xxl,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Focusing On : </Text>
          <Text style={styles.task}>{props.subject}</Text>
        </View>
      </View>
      <View>
        <ProgressBar
          color={colors.blue}
          progress={progress}
          style={{ height: spacing.sm }}
        />
      </View>
      <View
        style={styles.timingWrapper}
        pointerEvents={minutes !== 0 && isStarted ? 'none' : 'auto'}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View
        style={styles.buttonWrapper}
        pointerEvents={minutes === 0 ? 'none' : 'auto'}>
        <RoundedButton
          title={isStarted ? 'pause' : 'start'}
          onPress={() => {
            setIsStarted((prev) => !prev);
          }}
        />
      </View>
      <View style={styles.cancelWrapper}>
        <RoundedButton
          title={'-'}
          size={50}
          onPress={() => {
            props.clearSubject();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: { flex: 0.5, justifyContent: 'center', alignItems: 'center' },
  timingWrapper: { flex: 0.1, paddingTop: spacing.xxl },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSizes.lg,
  },
  task: { color: colors.white, textAlign: 'center', fontSize: fontSizes.lg },
  cancelWrapper: { flex: 0.1, justifyContent: 'center', alignItems: 'center' },
});
