import React, { useState } from 'react';
import { ButtonContainter, Button } from './scroll.styles';
import { animateScroll as scroll } from 'react-scroll';

function ScrollBtn() {
	const [ showBtn, setShowBtn ] = useState(false);

	const scrollToTop = () => scroll.scrollTo();

	window.document.body.onscroll = () => {
		if (window.pageYOffset > 1200) {
			setShowBtn((prev) => (prev = true));
		} else {
			setShowBtn((prev) => (prev = false));
		}
	};

	return (
		<React.Fragment>
			<ButtonContainter>
				<Button $visible={showBtn} onClick={scrollToTop} />
			</ButtonContainter>
		</React.Fragment>
	);
}

export default ScrollBtn;
