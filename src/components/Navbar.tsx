export default function Navbar() {
	return (
		<header className="fixed top-0 w-full z-50">
			<div className="mx-auto max-w-6xl px-4">
				<div
					className="mt-4 flex items-center justify-between 
                        rounded-full border border-white/10 
                        bg-black/40 backdrop-blur-xl 
                        px-6 py-3"
				>
					{/* Logo */}
					<div className="font-medium tracking-wide text-white">Princesage</div>

					{/* Desktop Nav */}
					<nav className="hidden md:flex gap-8 text-sm text-gray-300">
						<a href="#about" className="hover:text-white transition">
							About
						</a>
						<a href="#services" className="hover:text-white transition">
							Services
						</a>
						<a href="#process" className="hover:text-white transition">
							Process
						</a>
						<a href="#contact" className="hover:text-white transition">
							Contact
						</a>
					</nav>

					{/* CTA */}
					<a
						href="#contact"
						className="px-4 py-2 rounded-full bg-white text-black text-sm hover:scale-105 transition"
					>
						Get Started
					</a>
				</div>
			</div>
		</header>
	);
}
