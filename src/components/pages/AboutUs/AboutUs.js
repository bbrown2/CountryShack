import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ScrollBtn from '../../ScrollBtn/ScrollBtn';
import {
	HeroTitle,
	AboutUsContainer,
	AboutSection,
	AboutInfo,
	SectionTitle,
	Text,
	BusinessHours,
	BusinessInfo,
	Location,
	Contact,
	HeroBackgroundImg,
	CabinImage
} from './about.styles';

function AboutUs() {
	return (
		<React.Fragment>
			<AboutUsContainer>
				<HeroBackgroundImg>
					<HeroTitle>Who Are We?</HeroTitle>
				</HeroBackgroundImg>
				<AboutSection>
					<CabinImage />
					<AboutInfo>
						<SectionTitle>About Us</SectionTitle>
						<Text>
							Country Shack is a family owned business that started in the early 2000s. Since the
							beginning, we've always enjoyed cooking and providing food to our neighborhood. This
							inspired us to create our own business due to the smiles and memories we created throughout
							the neighborhood. As a family owned business, it was our job to ensure everyone had an
							plesant experience while dining at Country Shack. We've build many relations with our
							customers over the years, which plays a huge factor in our success and with plans to make
							many more. The next time you're in the Raleigh, NC area please be sure to stop by and din
							with Country Shack for a delicious meal you won't forget.
						</Text>
					</AboutInfo>
				</AboutSection>
				<BusinessInfo>
					<Location>
						<SectionTitle>Location</SectionTitle>
						<Text className="text">1710 Wenix Ave, Raleigh, NC 27513</Text>
					</Location>
					<Contact>
						<SectionTitle>Contact Us</SectionTitle>
						<div className="flex">
							<FaPhoneAlt />
							<Text>145-424-9404</Text>
						</div>
						<div className="flex">
							<FaEnvelope />
							<Text>countryshack@foods.net</Text>
						</div>
					</Contact>
					<BusinessHours>
						<SectionTitle>Business Hours</SectionTitle>
						<Text>M-F: 9AM-9PM</Text>
						<Text>Sat: 11AM-6PM</Text>
						<Text>Sun: Closed</Text>
					</BusinessHours>
				</BusinessInfo>
				<ScrollBtn />
			</AboutUsContainer>
		</React.Fragment>
	);
}

export default AboutUs;
