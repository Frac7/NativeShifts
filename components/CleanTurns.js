import React from 'react';
import { Text, View } from 'react-native';

import data from '../data';
import styles from '../styles';

const initialDate = '2020-10-11';

const CleanTurns = ({ date }) => {
  const {
    greenBathroom,
    people
  } = data;

  const timeDivider = 1000 * 60 * 60 * 24 * 7;

  const selectedDate = new Date(date);
  
  const dayOfTheWeek = selectedDate.getDay();
  if(dayOfTheWeek !== 1) {
    const offset = dayOfTheWeek - 1;
    selectedDate.setDate(selectedDate.getDate() - offset);
  }

  const currentPersonIndex = Math.floor(((selectedDate - new Date(initialDate)) / timeDivider) % 5);

  let greenBathroomIndex = -1;
  
  if (!Object.values(greenBathroom).includes(currentPersonIndex)) {
    greenBathroomIndex = greenBathroom[Math.floor((((selectedDate - new Date(initialDate)) / timeDivider) % 15))];
  }

  return (
    <View style={styles.section}>
        <Text style={styles.h2}>Turno delle pulizie: </Text>
        <View style={styles.subsection}>
          <Text style={styles.badge}>
            {people[currentPersonIndex]}
          </Text>
        </View>
      {greenBathroomIndex > 0 && (
        <>
          <Text style={styles.h2}>Pulizia bagno grande: </Text>
          <View style={styles.subsection}>
            <Text style={styles.badge}>
              {people[greenBathroomIndex]}
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

export default CleanTurns;
