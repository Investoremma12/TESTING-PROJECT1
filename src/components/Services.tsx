const services = [
	{
		title: 'Conversion-Focused Websites',
		desc: 'We design websites structured to turn visitors into paying customers using modern UX psychology.',
	},
	{
		title: 'Brand Identity Design',
		desc: 'We create strong brand systems that make businesses look premium, trustworthy, and memorable.',
	},
	{
		title: 'Digital Strategy',
		desc: 'We help businesses understand how to position themselves online for maximum visibility and growth.',
	},
	{
		title: 'Business Automation',
		desc: 'We simplify customer interaction and lead management through smart digital systems.',
	},
	{
		title: 'Mobile Optimization',
		desc: 'We ensure perfect performance across all mobile devices where most users come from.',
	},
];

export default function Services() {
	return (
		<section id="services" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
			<h2 className="text-3xl sm:text-4xl font-light mb-10">What We Do</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{services.map((s, i) => (
					<div
						key={i}
						className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
					>
						<h3 className="text-purple-300 text-lg font-medium">{s.title}</h3>
						<p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
							{s.desc}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
