import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from 'react-native';

import { useState } from 'react';

import colors from './src/utils/colors';

import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentsubject] = useState();
  const [history, setHistory] = useState([]);

  const newsubject = (subject)=>{
    setCurrentsubject(subject);
    setHistory(prev=>{
      const tp = prev;
      tp.push(subject);
      return tp;
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus onAddSubject={newsubject} />
          <FocusHistory focusHistory={history} />
        </>
      ) : (
        <Timer subject={currentSubject} clearSubject={()=>{setCurrentsubject(null)}}/>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
