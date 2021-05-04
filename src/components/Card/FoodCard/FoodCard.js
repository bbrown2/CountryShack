import React from 'react';
import { CardContainer } from './card.styles';

function FoodCard(props) {
	return (
		<React.Fragment>
			<CardContainer {...props} />
		</React.Fragment>
	);
}

export default FoodCard;
