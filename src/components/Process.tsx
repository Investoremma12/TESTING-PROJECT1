const steps = [
	'Business Discovery',
	'Strategy Planning',
	'UI/UX Direction',
	'Development',
	'Launch & Optimization',
];

export default function Process() {
	return (
		<section id="process" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
			<h2 className="text-3xl sm:text-4xl font-light mb-10">Our Process</h2>

			<div className="space-y-6">
				{steps.map((s, i) => (
					<div key={i} className="flex gap-4 items-center">
						<span className="text-purple-400">0{i + 1}</span>
						<p className="text-gray-300">{s}</p>
					</div>
				))}
			</div>
		</section>
	);
}
