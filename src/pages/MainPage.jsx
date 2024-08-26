import { Collection } from '../modules/main-page/Collection';
import { Costumes } from '../modules/main-page/Costumes';
import { Features } from '../modules/main-page/Features';
import { Hero } from '../modules/main-page/Hero';
import { Instagram } from '../modules/main-page/Instagram';
import { Services } from '../modules/main-page/Services';
import { TopProduct } from '../modules/main-page/TopProduct';
import { Store } from '../modules/main-page/Store';
import { Marquee } from '../modules/main-page/Marquee';

export function MainPage() {
	return (
		<>
			<Hero />
			<Features />
			<Collection />
			<Store />
			<Marquee />
			<TopProduct />
			<Costumes />
			<Services />
			<Instagram />
		</>
	);
}
