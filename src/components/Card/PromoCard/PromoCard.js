import React from 'react';
import { CardContainer } from './card.styles';

function PromoCard(props) {
	return (
		<React.Fragment>
			<CardContainer {...props} />
		</React.Fragment>
	);
}

export default PromoCard;
