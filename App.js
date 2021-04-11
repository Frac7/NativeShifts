import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker'

import { TrashTurns, CleanTurns, StreetTurns } from './components';

export default function App() {
  const [date, setDate] = useState(new Date());
  const handleChange = newDate => setDate(newDate);

  return (
    <View style={styles.container}>
      <DatePicker date={date} minDate={new Date()} onDateChange={handleChange} />
      <Text>Turni</Text>
      <Text>Data:</Text>
      <TrashTurns date={date} />
      <CleanTurns date={date} />
      <StreetTurns date={date} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
