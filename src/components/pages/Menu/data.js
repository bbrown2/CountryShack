// appetizers
import chipsAndDip from './images/appetizers/chips-n-dip.jpg';
import croissant from './images/appetizers/croissant.jpg';
import miniChickenWraps from './images/appetizers/mini-chicken-wraps.jpg';
import salad from './images/appetizers/salad.jpg';

// traditional
import chickenStrip from './images/traditional/chicken-strips.jpg';
import beerBatteredFish from './images/traditional/battered-fish.jpg';
import bbqRibs from './images/traditional/bbq-ribs.jpg';
import beefyFlatTaco from './images/traditional/beefy-flat-taco.jpg';
import cheesePasta from './images/traditional/cheese-pasta.jpg';
import meatloaf from './images/traditional/meatloaf.jpg';
import pennePasta from './images/traditional/penne-pasta.jpg';
import spaghetti from './images/traditional/spaghetti.jpg';

// desserts
import cheeseCake from './images/desserts/cheese-cake.jpg';
import chocolateCake from './images/desserts/chocolate-cake.jpg';
import cinnamonRoll from './images/desserts/cinnamon-roll.jpg';
import iceCream from './images/desserts/ice-cream.jpg';
import strawberryCake from './images/desserts/strawberry-cake.jpg';

export const breadcrumb = [
	{
		uniqueId: 1,
		title: 'Appetizers'
	},
	{
		uniqueId: 2,
		title: 'Traditional'
	},
	{
		uniqueId: 3,
		title: 'Desserts'
	}
];

export const appetizerMenu = [
	{
		img: chipsAndDip,
		foodName: 'Chips & Dip',
		calories: 500,
		price: '$8.99'
	},
	{
		img: croissant,
		foodName: 'Double Croissant',
		calories: 462,
		price: '$6.99'
	},
	{
		img: miniChickenWraps,
		foodName: 'Mini Chicken Wraps',
		calories: 2254,
		price: '$12.99'
	},
	{
		img: salad,
		foodName: 'Battered Chicken Salad',
		calories: 781,
		price: '$11.99'
	}
];

export const traditionalMenu = [
	{
		img: chickenStrip,
		foodName: 'Battered Chicken Strips',
		calories: 475,
		price: '$8.99'
	},
	{
		img: beefyFlatTaco,
		foodName: 'Beefy Flat Taco',
		calories: 484,
		price: '$10.99'
	},
	{
		img: cheesePasta,
		foodName: 'Alfredo Cheese Pasta',
		calories: 1486,
		price: '$15.99'
	},
	{
		img: meatloaf,
		foodName: 'Classic Beef Meatloaf',
		calories: 797,
		price: '$13.99'
	},
	{
		img: spaghetti,
		foodName: 'Classic Spaghetti',
		calories: 904,
		price: '$10.99'
	},
	{
		img: beerBatteredFish,
		foodName: 'Beer Battered Fish w/ Fries',
		calories: 743,
		price: '$12.99'
	},
	{
		img: bbqRibs,
		foodName: 'BBQ Baby Back Ribs w/ Fries ',
		calories: 1048,
		price: '$15.99'
	},
	{
		img: pennePasta,
		foodName: 'Seasoned Penne Pasta',
		calories: 836,
		price: '$14.99'
	}
];

export const dessertMenu = [
	{
		img: cheeseCake,
		foodName: 'Strawberry Cheese Cake',
		calories: 374,
		price: '$4.99',
		salePrice: '$3.24'
	},
	{
		img: chocolateCake,
		foodName: 'Triple Fudge Cake',
		calories: 269,
		price: '$3.99',
		salePrice: '$2.59'
	},
	{
		img: cinnamonRoll,
		foodName: 'Glazed Cinnamon Roll Pan',
		calories: 3404,
		price: '$14.99',
		salePrice: '$9.74'
	},
	{
		img: iceCream,
		foodName: 'Double Truffle Chocolate Cake',
		calories: 863,
		price: '$6.99',
		salePrice: '$4.54'
	},
	{
		img: strawberryCake,
		foodName: 'Filled Strawberry Shortcake',
		calories: 454,
		price: '$8.99',
		salePrice: '$5.84'
	}
];
