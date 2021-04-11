import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import data from '../data';

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

	return (
		<View>
			<View>
				<View>
					<Text>Turni della spazzatura: </Text>
				</View>
				<>
					{selectedDate.getDay() - 1 === 5 ?
						<View>
							<Text> - </Text>
						</View>:
							(trashTurns[trashTurnIndex].length > 0 && trashTurns[trashTurnIndex].map((turn, i) => (
							<View key={i}>
								<View>
									<View>
										<Text>{turns[turn].trash}:</Text>
									</View>
									<View>
										<Text>
											<Text>
												{people[Math.floor(turns[turn].initial + shift) % 5]}
											</Text>
										</Text>
									</View>
								</View>
							</View>
							))) || (
								<>
									<View>
										<Text>{turns[turnObject].trash}:</Text>
									</View>
									<View>
										<Text>
											<Text>
												{people[Math.floor(turns[turnObject].initial + shift) % 5]}
											</Text>
										</Text>
									</View>
									{turnObject === 3 && (
										<View>
											<Text>Conferire tra le 18/18:30</Text>
										</View>
									)}
								</>
							)
					}
				</>
			</View>
		</View>
	);
}

export default TrashTurns;
