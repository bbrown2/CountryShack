import React from 'react';
import Hero from '../../Hero/Hero';
import { appetizerMenu, breadcrumb, dessertMenu, traditionalMenu } from './data';
import { Link } from 'react-scroll';
import ScrollBtn from '../../ScrollBtn/ScrollBtn';
import {
	MenuContainer,
	HeroTitle,
	BreadCrumbNav,
	BreadCrumbText,
	FoodCardGrid,
	FoodCardFlex,
	FoodInfo,
	Text,
	SectionTitle,
	HeroBackgroundImg
} from './menu.styles';

const priceStyle = {
	textDecoration: 'line-through',
	paddingRight: '10px'
};
const saleStyle = {
	color: 'red',
	fontWeight: 'var(--fontBold)'
};

function Menu() {
	return (
		<React.Fragment>
			<MenuContainer>
				<Hero style={{ padding: 0 }}>
					<HeroBackgroundImg>
						<HeroTitle className="text-color">A Meal You Won't Forget</HeroTitle>
					</HeroBackgroundImg>
				</Hero>
				<BreadCrumbNav>
					{breadcrumb.map((item) => {
						return (
							<BreadCrumbText key={item.uniqueId}>
								<Link activeClass="active" to={item.title} smooth={true} style={{ cursor: 'pointer' }}>
									{item.title}
								</Link>
							</BreadCrumbText>
						);
					})}
				</BreadCrumbNav>
				<SectionTitle id={'Appetizers'}>Appetizers</SectionTitle>
				<FoodCardGrid>
					{appetizerMenu.map((item, id) => {
						return (
							<FoodCardFlex key={id}>
								<img
									src={item.img}
									style={{ backgroundColor: 'royalblue', height: '250px', width: '100%' }}
									alt="appetizers"
								/>
								<FoodInfo>
									<Text style={{ fontWeight: ' var(--fontBold)', fontSize: 'var(--fontMd)' }}>
										{item.foodName}
									</Text>
									<Text>{item.calories} Cal</Text>
									<Text>{item.price}</Text>
								</FoodInfo>
							</FoodCardFlex>
						);
					})}
				</FoodCardGrid>
				<SectionTitle id={'Traditional'}>Traditional</SectionTitle>
				<FoodCardGrid>
					{traditionalMenu.map((item, id) => {
						return (
							<FoodCardFlex key={id}>
								<img
									src={item.img}
									style={{ backgroundColor: 'royalblue', height: '250px', width: '100%' }}
									alt="traditional"
								/>
								<FoodInfo>
									<Text style={{ fontWeight: ' var(--fontBold)', fontSize: 'var(--fontMd)' }}>
										{item.foodName}
									</Text>
									<Text>{item.calories} Cal</Text>
									<Text>{item.price}</Text>
								</FoodInfo>
							</FoodCardFlex>
						);
					})}
				</FoodCardGrid>
				<SectionTitle id={'Desserts'}>Desserts</SectionTitle>
				<FoodCardGrid>
					{dessertMenu.map((item, id) => {
						return (
							<FoodCardFlex key={id}>
								<img
									src={item.img}
									style={{ backgroundColor: 'royalblue', height: '250px', width: '100%' }}
									alt="desserts"
								/>
								<FoodInfo>
									<Text style={{ fontWeight: ' var(--fontBold)', fontSize: 'var(--fontMd)' }}>
										{item.foodName}
									</Text>
									<Text>{item.calories} Cal</Text>
									<Text>
										<span style={priceStyle}>{item.price}</span>
										<span style={saleStyle}>{item.salePrice}</span>
									</Text>
								</FoodInfo>
							</FoodCardFlex>
						);
					})}
				</FoodCardGrid>
				<ScrollBtn />
			</MenuContainer>
		</React.Fragment>
	);
}

export default Menu;
