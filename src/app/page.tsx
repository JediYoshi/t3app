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
			<div className="flex flex-wrap gap-4">{
				mockImages.map((image) => (
					<div key={image.id} className="w-48">
						<img src={image.url} alt="image" />
					</div>
				))
			}</div>
		</main>
	);
}
