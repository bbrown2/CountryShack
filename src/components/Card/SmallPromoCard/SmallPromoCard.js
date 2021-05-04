import React from 'react';
import { CardContainer } from './card.styles';

function SmallPromoCard(props) {
	return (
		<React.Fragment>
			<CardContainer {...props} />
		</React.Fragment>
	);
}

export default SmallPromoCard;
