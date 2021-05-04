import styled from 'styled-components';
import { device, Container, Title, Typography, CardGrid, CardFlex } from '../../globalStyles';
import customersEating from './images/hero/customers-eating.jpg';

export const MenuContainer = styled(Container)`
    padding: 0;
    overflow: visible;

`;

export const HeroBackgroundImg = styled.div`
	background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${customersEating});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top;
	height: 100%;
	width: 100%;
	display: grid;
	align-items: center;
	padding: 0;
	background-color: red;
`;

export const HeroTitle = styled(Title)`
    width: auto;
    text-align: center;
    color: var(--colorBlack);

    &.text-color {
        color: var(--colorWhite);
    }
`;

export const BreadCrumbNav = styled(CardGrid)`
	background-color: var(--colorWhite);
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    grid-auto-rows: auto;
    align-items: center;
    text-align: center;
    margin-bottom: 0;
    position: sticky;
    top: 0;

	//--------> MEDIA QUERIES <--------
    @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

    @media screen and (max-width: 991px) {
    margin: 0 15px;
        
    }

`;

export const BreadCrumbText = styled(Typography)`
    padding: 0 5px;
    font-weight: var(--fontBold);
    color: var(--colorBlack);


`;

export const SectionTitle = styled(HeroTitle)`
    padding: 100px 10px;

`;

export const FoodCardGrid = styled(CardGrid)` 
    margin-bottom: 0;

`;

export const FoodCardFlex = styled(CardFlex)`

`;

export const Text = styled(Typography)`
`;

export const FoodInfo = styled.div`
	padding: 10px;
	background-color: var(--colorWhite);
	width: 100%;
`;
