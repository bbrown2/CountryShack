import React from 'react';
import { HeroContainer } from './hero.styles';

function Hero(props) {
	return (
		<React.Fragment>
			<HeroContainer {...props} />
		</React.Fragment>
	);
}

export default Hero;
