import styled from 'styled-components';
import burgerHeroImg from './images/hero/burger-background.jpg';
import dessertCardImg from './images/cards/dessert-background.jpg';
import smoothieCardImg from './images/cards/smoothie-2.jpeg';
import steakCardImg from './images/cards/steak-background.jpg';
import Hero from '../../Hero/Hero';
import { device, Subtitle, Title, Container } from '../../globalStyles';

export const HeroBackgroundImg = styled(Hero)`
	background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${burgerHeroImg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export const CardContainer = styled(Container)`
    height: 100%;
    /* margin: 100px auto; */
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 100px;

`;

export const TitleContainer = styled.div`min-width: 200px;`;

export const HeroTitle = styled(Title)`
	color: var(--colorWhite);
`;

export const HeroTitle2 = styled(HeroTitle)`
    color: var(--colorTan);

	//--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
		width: 200px;

	}
	@media ${device.laptopL} {
		width: 300px;
	}
`;

export const SubtitleContainer = styled.div`
	min-width: 200px;
	padding-top: 20px;
`;
export const HeroSubtitle = styled(Subtitle)`
	color: var(--colorWhite);
`;

export const CardTitle = styled(Title)`
	height: inherit;
	display: grid;
	align-items: center;
	text-align: center;
	width: inherit;
	padding: 15px;
	color: var(--colorWhite);
`;

export const PromoImageLarge = styled.div`
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${steakCardImg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 100%;
`;
export const PromoImageSmall = styled(PromoImageLarge)`
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${smoothieCardImg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 100%;
`;
export const PromoImageSmall2 = styled(PromoImageLarge)`
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${dessertCardImg});
`;
