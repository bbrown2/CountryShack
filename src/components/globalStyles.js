import styled, { createGlobalStyle } from 'styled-components';

//===============================================================
//Rest
//===============================================================

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding:0;
    font-family: 'Roboto', sans-serif;


	/* font-size variables */
	--fontXSm: 14px;
	--fontSm: 16px;
	--fontMd: 24px;
	--fontLg: 36px; 
	--fontXl: 42px; 
	--fontHuge: 56px; 

	/* font-weight variables */
	--fontThin: 300;
	--fontRegular: 400;
	--fontBold: 900;

	/* colors */
	--colorWhite: #fafafa;
	--colorBlack: #000;
	--colorTan: #ffc996;
	--colorPink: #ff8474;
	--colorPurple: #583d72;

	html {
		height: 100%;
	}

	body {
		min-height: 100%;

	}
}
`;

//===============================================================
//Breakpoints
//===============================================================

const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
};

export const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`
};

//===============================================================
//Utilities
//===============================================================

export const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 50px;
	overflow: hidden;

	@media screen and (max-width: 991px) {
		padding: 0 15px;
	}
`;

export const Title = styled.h1`
	font-size: var(--fontLg);
	font-weight: var(--fontBold);
	text-transform: uppercase;

	//--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
		font-size: var(--fontXl);
		width: 150px;
	}

	@media ${device.laptopL} {
		font-size: var(--fontHuge);
	}
`;

export const Subtitle = styled.h4`
	font-size: var(--fontSm);
	font-weight: var(--fontBold);
	text-transform: uppercase;

	//--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
		font-size: var(--fontMd);

		@media ${device.laptopL} {
			font-size: var(--fontLg);
		}
	}
`;

export const FooterTitle = styled.h1`
	font-size: var(--fontMd);
	font-weight: var(--fontThin);

	//--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
		font-size: var(--fontXl);
		width: 100px;
	}
`;

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Typography = styled.p`
	font-size: var(--fontSm);
	line-height: 1.6;

	//--------> MEDIA QUERIES <--------
	@media ${device.laptopL} {
		font-size: 18px;
	}
`;

export const CardGrid = styled(Container)`
    margin: 0 auto;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
    grid-auto-rows: 400px;
    justify-content: center;
    gap: 50px 100px;

`;

export const CardFlex = styled(Flex)`
    flex-direction: column;
    justify-content: space-evenly;
`;

export default GlobalStyle;
