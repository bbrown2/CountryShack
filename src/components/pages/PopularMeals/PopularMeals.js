import React from 'react';
import Hero from '../../Hero/Hero';
import { mostPopularMenu } from './data';
import ScrollBtn from '../../ScrollBtn/ScrollBtn';
import {
	HeroTitle,
	CardTitle,
	PopularMealsContainer,
	SectionTitle,
	FoodCardGrid,
	FoodCardFlex,
	Text,
	FoodInfo,
	PromoCardContainer
} from './meals.styles';

function PopularMeals() {
	return (
		<React.Fragment>
			<PopularMealsContainer>
				<Hero>
					<HeroTitle>Try Our New Beverages</HeroTitle>
				</Hero>
				<PromoCardContainer>
					<CardTitle>Only $5.99</CardTitle>
				</PromoCardContainer>
				<SectionTitle>Most Popular</SectionTitle>
				<FoodCardGrid>
					{mostPopularMenu.map((item) => {
						return (
							<FoodCardFlex key={item.id}>
								<img
									src={item.img}
									style={{ backgroundColor: 'royalblue', height: '250px', width: '100%' }}
									alt={item.foodName}
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
				<ScrollBtn />
			</PopularMealsContainer>
		</React.Fragment>
	);
}

export default PopularMeals;
