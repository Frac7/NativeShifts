import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import data from '../data';

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
		<View>
			<View>
				<View>
					<Text>Turno delle pulizie: </Text>
				</View>
				<View>
					<Text>
            <Text>
              {people[currentPersonIndex]}
            </Text>
          </Text>
				</View>
				<View>
					<Text>
						Pulire la cucina, pulire l'andito, spolverare
					</Text>
				</View>
			</View>
			{greenBathroomIndex > 0 && (
				<View >
          <View>
            <Text>Pulizia bagno grande: </Text>
          </View>
          <View>
            <Text>
              <Text>
                {people[greenBathroomIndex]}
              </Text>
            </Text>
          </View>
        </View>
			)}
		</View>
	);
}

export default CleanTurns;
