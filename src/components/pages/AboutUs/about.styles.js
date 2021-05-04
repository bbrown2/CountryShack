import styled from 'styled-components';
import cabinImg from './images/hero/cabin.jpg';
import workersImg from './images/cards/workers.jpg';
import Hero from '../../Hero/Hero';
import { CardFlex, CardGrid, Container, device, Subtitle, Title, Typography } from '../../globalStyles';

export const AboutUsContainer = styled(Container)`  
    padding: 0;
`;

export const HeroBackgroundImg = styled(Hero)`
	background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${workersImg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50% 20%;

	//--------> MEDIA QUERIES <--------
    @media ${device.tablet} {
        	background-position: auto ;

    }
`;

export const HeroTitle = styled(Title)`
    width: auto;
    text-align: center;
    color: var(--colorWhite);
`;

export const AboutSection = styled(CardGrid)`
    margin: 100px auto;
    grid-template-columns: repeat(auto-fit, minmax(250px, 500px));
    grid-auto-rows: 250px auto;
    justify-content: space-evenly;

    //--------> MEDIA QUERIES <--------
	@media ${device.mobileL} {
    grid-auto-rows: 1fr;

	}

`;

export const CabinImage = styled.div`
	background-image: url(${cabinImg});
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
`;

export const SectionTitle = styled(Subtitle)`
    padding: 10px;
    width: 100%;
`;

export const AboutInfo = styled(CardFlex)`

`;

export const Text = styled(Typography)`
    padding: 10px;
    font-weight: var(--fontRegular);

`;

export const BusinessInfo = styled(AboutSection)`
    margin-top: 200px;
    margin-bottom: 0;
    grid-template-columns: repeat(auto-fit, minmax(250px, 350px));

`;

export const Location = styled(CardFlex)`
    justify-content: flex-start;
    align-items: flex-start;
`;
export const Contact = styled(Location)`
    .flex {
        display: flex;
        align-items: center;
    }
`;
export const BusinessHours = styled(Location)``;
