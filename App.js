import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker'

import { TrashTurns, CleanTurns, StreetTurns } from './components';
import styles from './styles';

export default function App() {
  const [date, setDate] = useState(new Date());
  const handleChange = newDate => setDate(newDate);

  return (
    <View style={styles.container}>
      <View style={styles.divider}>
        <Text style={styles.h1}>Turni</Text>
      </View>
      <View style={styles.section}>
        <DatePicker date={date} minDate={new Date()} onDateChange={handleChange} />
      </View>
      <TrashTurns date={date} />
      <CleanTurns date={date} />
      <StreetTurns date={date} />
    </View>
  );
}
