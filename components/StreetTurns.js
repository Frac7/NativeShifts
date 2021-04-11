import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

	return (
		<View>
			<View>
				<View>
					<Text>Turno della lavastrada: </Text>
				</View>
				<View>
					{turnIndex !== -1 && numberOfTheMonth === selectedDate.getDate() ?
						<Text>
							<Text>{streetTurns[turnIndex].street}</Text>
						</Text> :
						<Text> - </Text>
					}
				</View>
			</View>
		</View>
	);
}

export default StreetTurns;
