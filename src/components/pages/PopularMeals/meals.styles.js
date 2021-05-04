import styled from 'styled-components';
import PromoCard from '../../Card/PromoCard/PromoCard';
import smoothieImg from './images/hero/smoothie-2.jpeg';
import { Container, Title, Subtitle, Typography, CardGrid, CardFlex, device } from '../../globalStyles';

export const PopularMealsContainer = styled(Container)`
padding: 0;
`;

export const HeroTitle = styled(Title)`
    text-align: center;
    width: auto;
	color: var(--colorBlack);

`;

export const PromoCardContainer = styled(PromoCard)`
	display: grid;
	align-items: end;
	text-align: center;
    background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${smoothieImg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top;
    min-width: 250px;
	margin-top: 0;

	//--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
	background-position: 50% 20%;
	}

`;

export const CardTitle = styled(Subtitle)`
    padding: 20px 0;
	color: var(--colorWhite);
	
`;

export const SectionTitle = styled(HeroTitle)`
    padding: 0 10px 100px;
`;

export const FoodCardGrid = styled(CardGrid)`

`;

export const FoodCardFlex = styled(CardFlex)`

`;

export const Text = styled(Typography)`
`;

export const FoodInfo = styled.div`
	padding: 10px;
	background-color: var(--colorWhite);
	color: var(--colorBlack);
	width: 100%;
`;
