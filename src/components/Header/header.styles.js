import styled from 'styled-components';
import { Container, device } from '../globalStyles';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled(Container)`
    background-color: var(--colorWhite);
	height: 100px;
    width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	//--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
		justify-content: space-between;
	}

`;

//===============================================================
//Sidebar
//===============================================================

export const Backdrop = styled.div`
	background-color: rgba(0, 0, 0, 0.8);
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	z-index: 2;
	display: ${({ slide }) => (slide ? 'block' : 'none')};

	//--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
		display: none;
	}
`;

export const SidebarContainer = styled.div`
	background-color: var(--colorWhite);
	height: 100vh;
	width: 260px;
	position: fixed;
	top: 0;
	left: ${({ slide }) => (slide ? 0 : '-1000px')};
	z-index: 2;
	transition: all .3s ease-in-out;

	//--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
		display: none;
	}
`;

export const SideNavUl = styled.ul`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin-top: 100px;
	font-size: var(--fontMd);
	font-weight: var(--fontBold);
`;

export const SideNavLi = styled.li`list-style: none;`;

export const SideItemLink = styled(Link)`
	text-decoration: none;
	color: var(--colorBlack);

	&:hover {
		color: var(--colorPurple);
	}
`;

export const Icon = styled.div`
	position: absolute;
	height: 50px;
	width: 50px;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: var(--fontMd);
	z-index: 1;
	cursor: pointer;
	color: var(--colorBlack);

	//--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
		display: none;
	}
`;

//===============================================================
//Navbar
//===============================================================
export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	img {
		height: 50px;
		width: 100%;
	}

	//--------> MEDIA QUERIES <--------
	@media ${device.mobileL} {
		img {
			height: 60px;
		}
	}

	@media ${device.tablet} {
		justify-content: flex-start;

		img {
			height: 70px;
		}
	}
`;

export const NavUl = styled.ul`
	display: none;

	//--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
		min-width: 400px;
		display: flex;
		justify-content: space-evenly;
	}
`;

export const NavLi = styled.li`
	font-size: var(--fontSm);
	font-weight: var(--fontBold);
	list-style: none;

	@media ${device.laptopL} {
		font-size: 18px;
	}
`;
export const ItemLink = styled(Link)`
	color: var(--colorBlack);
	text-decoration: none;

	&:hover {
		color: var(--colorPurple);
	}
`;
