import { useParams } from 'react-router-dom';

import { BreadCrumbs } from '../modules/BreadCrumbs';
import Filter from '../modules/products-page/Filter';

export const ProductsPage = () => {
	const { category, subcategory } = useParams();

	return (
		<>
			<BreadCrumbs category={category} subCategory={subcategory} />

			<div className="container">
				<h1>ProductsPage</h1>

				<Filter />
			</div>
		</>
	);
};
