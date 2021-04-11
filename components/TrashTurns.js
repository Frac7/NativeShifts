import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import data from '../data';
import styles from '../styles';

const startingDate  = '2020-10-01';

const TrashTurns = ({ date }) => {
  const { turns, people, trashTurns } = {
    turns: data.trash,
    ...data
  };

  const selectedDate = new Date(date);
  
  const dayOfTheWeek = selectedDate.getDay() - 1;
  const trashTurnIndex = dayOfTheWeek === -1 ? trashTurns.length - 1 : dayOfTheWeek;

  const turnObject = trashTurns[trashTurnIndex];
  
  const initialDate = new Date(startingDate);
  const shift = (selectedDate.getMonth() - initialDate.getMonth()) + (12 * (selectedDate.getFullYear() - initialDate.getFullYear()));

  return selectedDate.getDay() - 1 === 5 ? null : (
    <View style={styles.section}>
        <Text style={styles.h2}>Turni della spazzatura: </Text>
          {(trashTurns[trashTurnIndex].length > 0 && trashTurns[trashTurnIndex].map((turn, i) => (
              <View key={i} style={styles.subsection}>
                <Text style={styles.h3}>{turns[turn].trash}:</Text>
                <Text style={styles.badge}>
                  {people[Math.floor(turns[turn].initial + shift) % 5]}
                </Text>
              </View>
              ))) || (
              <View style={styles.subsection}>
                <Text style={styles.h3}>{turns[turnObject].trash}:</Text>
                <Text style={styles.badge}>
                  {people[Math.floor(turns[turnObject].initial + shift) % 5]}
                </Text>
              </View>
              )
          }
    </View>
  );
}

export default TrashTurns;
