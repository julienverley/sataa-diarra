// "use client";

// import { FC } from "react";
// import Image from "next/image";

// interface Product {
// 	id: number;
// 	title: string;
// 	description: string;
// 	ingredients: string;
// 	image: string;
// 	type: string;
// }

// interface HeroClientProps {
// 	products: Product[];
// }

// const HeroClient: FC<HeroClientProps> = ({ products }) => {
// 	return (
// 		<section className="flex flex-col justify-center relative py-12 h-[calc(100vh-128px)] bg-stone-300/10 max-w-[1800px] mx-auto">
// 			{products.map((item) => (
// 				<div className="max-w-[350px] md:max-w-[1000px] mx-auto" key={item.id}>
// 					<div
// 						className="max-w-[350px] md:max-w-[1000px] mx-auto relative"
// 						key={item.id}
// 					>
// 						<Image
// 							src={item.image}
// 							alt="Pâtisserie"
// 							width={1000}
// 							height={1000}
// 							priority={true}
// 							className="w-full h-auto object-cover"
// 						/>
// 					</div>
// 				</div>
// 			))}
// 			<br />
// 			<div className="relative inset-0 flex flex-col justify-center items-center">
// 				<h1 className="text-2xl md:text-4xl text-stone-600 font-bold">
// 					La pâtisserie de Sataa Diarra
// 				</h1>
// 				<p className="text-sm md:text-lg text-stone-600 mt-2 px-4 text-center">
// 					Des douceurs artisanales préparées avec passion
// 				</p>
// 			</div>
// 		</section>
// 	);
// };

// export default HeroClient;

"use client";

import { FC } from "react";
import Image from "next/image";

interface Product {
	id: number;
	title: string;
	description: string;
	ingredients: string;
	image: string;
	type: string;
}

interface HeroClientProps {
	products: Product[];
}

const HeroClient: FC<HeroClientProps> = ({ products }) => {
	return (
		<section className="flex flex-col justify-center relative py-12 h-[calc(100vh-128px)] bg-stone-300/10 max-w-[1800px] mx-auto">
			{products.map((item) => (
				<div className="max-w-[350px] md:max-w-[500px] mx-auto" key={item.id}>
					<div
						className="max-w-[350px] md:max-w-[500px] mx-auto relative"
						key={item.id}
					>
						<Image
							src={item.image}
							alt="Pâtisserie"
							width={500}
							height={500}
							priority={true}
							className="w-full h-auto object-cover md:w-[400px] md:h-[400px]"
						/>
					</div>
				</div>
			))}
			<br />
			<div className="relative inset-0 flex flex-col justify-center items-center">
				<h1 className="text-2xl md:text-4xl text-stone-600 font-bold">
					La pâtisserie de Sataa Diarra
				</h1>
				<p className="text-sm md:text-lg text-stone-600 mt-2 px-4 text-center">
					Des douceurs artisanales préparées avec passion
				</p>
			</div>
		</section>
	);
};

export default HeroClient;
