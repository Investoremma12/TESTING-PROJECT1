const reviews = [
	'Professional execution and clean design. Our online presence improved significantly.',
	'We started getting more customer inquiries after the redesign.',
	'Simple, elegant, and highly effective.',
];

export default function Testimonials() {
	return (
		<section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
			<h2 className="text-3xl sm:text-4xl font-light mb-10">Client Feedback</h2>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
				{reviews.map((r, i) => (
					<div
						key={i}
						className="p-6 border border-white/10 rounded-xl bg-white/5"
					>
						<p className="text-gray-300">"{r}"</p>
					</div>
				))}
			</div>
		</section>
	);
}
