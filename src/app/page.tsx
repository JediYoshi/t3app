import Link from "next/link";

const mockUrls = [
	"https://07be8fxoe9.ufs.sh/f/7irEBIre2xe9HjZ5iXnJaOhm92li1bJcQUBTtG6Dk4qM3n5o",
	"https://07be8fxoe9.ufs.sh/f/7irEBIre2xe9aQzuJKbrmxil56zMSZC1Q0TdARw4P3toespV",
	"https://07be8fxoe9.ufs.sh/f/7irEBIre2xe9m70NNeOatIxNk4AYForyJdMb3WBjHOQZD2zh"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


export default function HomePage() {
	return (
		<main className="">
			<div className="flex flex-wrap justify-center text-[100px] font-bold">Flowers</div>
			<div className="flex flex-wrap gap-4 justify-center">{
					mockImages.map((image) => (
						<div key={image.id} className="w-100 max-w-100">
							<div className="card image-full">
								<figure className=" blur-[24px]"><img src={image.url} alt="flowers" className="w-100 max-w-100" /></figure>
								<div className="card-body h-full flex flex-col place-items-center">
									<h2 className="card-title flex flex-wrap justify-center">Sorry...</h2>
									<p className="flex flex-wrap justify-center">but you must own Flower Premium to view these images... which is impossible because there is no Flower Premium.</p>
								</div>
							</div>
						</div>
					))
				}</div>
			
		</main>
	);
}
/*

*/