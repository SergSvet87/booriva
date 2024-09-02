import { useParams } from 'react-router-dom';

import { BreadCrumbs } from '../modules/BreadCrumbs';
import { ProductDetails } from '../modules/product-page/ProductDetails';
import { Instagram } from '../modules/main-page/Instagram';
import { Services } from '../modules/main-page/Services';

const data = [
	{
		id: 1,
		title: 'Бомбер Gone Crazy хаки',
		images: {
			small: [
				'/images/product-slide-1.png',
				'/images/product-slide-2.png',
				'/images/product-slide-3.png',
				'/images/product-slide-4.png',
				'/images/product-slide-1.png',
				'/images/product-slide-3.png',
			],

			big: [
				'/images/product-slide-1.png',
				'/images/product-slide-2.png',
				'/images/new-3.jpg',
				'/images/product-slide-4.png',
				'/images/product-slide-1.png',
				'/images/new-3.jpg',
			],
		},
		price: 2499,
		additional: ['50% вискоза', '50% полиэстер'],
		sizes: ['XS - s', 's - m', 'm - l', 'l - xl'],
		description:
			'Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура выполнена в серебряном цвете. Акцентными деталями выступают объемные нашитые карманы и капюшон, который отстёгивается. Один',
	},
];

export const ProductPage = () => {
	const { category, subcategory, productName } = useParams();

	return (
		<>
			<BreadCrumbs category={category} subCategory={subcategory} product={productName} />

			<ProductDetails data={data[0]} />

			<Services />

			<Instagram />
		</>
	);
};
