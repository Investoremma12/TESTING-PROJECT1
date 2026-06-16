import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<section className="min-h-screen flex items-center justify-center text-center px-6 relative">
			{/* cinematic light blobs */}
			<div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[140px] rounded-full top-0 left-0" />
			<div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full bottom-0 right-0" />

			<div className="max-w-5xl">
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="text-purple-300 tracking-widest text-sm uppercase"
				>
					Digital Branding Agency • Lagos, Nigeria
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl md:text-7xl font-light mt-6 leading-tight"
				>
					We Build High-Performance Digital Systems
					<span className="text-purple-400 font-medium">
						{' '}
						That Drive Revenue.
					</span>
				</motion.h1>

				<p className="mt-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
					Princesage Online Branding helps ambitious businesses transform their
					digital presence into a structured growth system — combining design,
					strategy, automation, and performance marketing.
				</p>

				<div className="mt-10 flex gap-4 justify-center">
					<a href="#contact">
						<button className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition">
							Request Consultation
						</button>
					</a>
					<a href="#case-studies">
						<button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition">
							View Case Studies
						</button>
					</a>
				</div>
			</div>
		</section>
	);
}
