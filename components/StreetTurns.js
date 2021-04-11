import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';
import data from '../data';

const StreetTurns = ({ date }) => {
  const selectedDate = new Date(date);
  const selectedDay = selectedDate.getDay() - 1;

  const { streetTurns } = data;
  const turnIndex = streetTurns.map((el) => el.day).indexOf(selectedDay);

  const monthInitialDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay() - 1;
  const firstChosenDay = monthInitialDay > selectedDay ?
    7 - monthInitialDay + selectedDay + 1 :
    selectedDay - monthInitialDay + 1;
  const numberOfTheMonth = turnIndex !== -1 && firstChosenDay + (7 * streetTurns[turnIndex].week);

  return turnIndex !== -1 && numberOfTheMonth === selectedDate.getDate() ? (
      <View style={styles.section}>
        <Text style={styles.h2}>Turno della lavastrada: </Text>
        <View style={styles.subsection}>
          <Text style={styles.badge}>{streetTurns[turnIndex].street}</Text>
        </View>
    </View>
  ) : null;
}

export default StreetTurns;
