import React from 'react';
import SmallPromoCard from '../../Card/SmallPromoCard/SmallPromoCard';
import PromoCard from '../../Card/PromoCard/PromoCard';
import ScrollBtn from '../../ScrollBtn/ScrollBtn';
import { Link } from 'react-router-dom';
import {
	TitleContainer,
	HeroTitle,
	HeroTitle2,
	HeroSubtitle,
	SubtitleContainer,
	CardTitle,
	CardContainer,
	HeroBackgroundImg,
	PromoImageLarge,
	PromoImageSmall,
	PromoImageSmall2
} from './home.styles';

const linkStyle = {
	textDecoration: 'none'
};

const scrollToTop = () => window.scrollTo(0, 0);

function Home() {
	return (
		<React.Fragment>
			<HeroBackgroundImg>
				<TitleContainer>
					<HeroTitle>All You</HeroTitle>
					<HeroTitle2>Can Eat</HeroTitle2>
				</TitleContainer>
				<SubtitleContainer>
					<HeroSubtitle>Every Tuesday</HeroSubtitle>
					<HeroSubtitle>1pm-7pm</HeroSubtitle>
				</SubtitleContainer>
			</HeroBackgroundImg>
			<PromoCard>
				<Link to="/popular-meals" onClick={scrollToTop} style={linkStyle}>
					<PromoImageLarge>
						<CardTitle>Our Popular Dishes</CardTitle>
					</PromoImageLarge>
				</Link>
			</PromoCard>
			<CardContainer>
				<SmallPromoCard>
					<Link to="/popular-meals" onClick={scrollToTop} style={linkStyle}>
						<PromoImageSmall>
							<CardTitle>New Beverages</CardTitle>
						</PromoImageSmall>
					</Link>
				</SmallPromoCard>
				<SmallPromoCard>
					<Link to="/menu#Desserts" onClick={scrollToTop} style={linkStyle}>
						<PromoImageSmall2>
							<CardTitle>35% Off Desserts</CardTitle>
						</PromoImageSmall2>
					</Link>
				</SmallPromoCard>
			</CardContainer>
			<ScrollBtn />
		</React.Fragment>
	);
}

export default Home;
