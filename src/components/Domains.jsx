import React from "react";

// Domains can be updated here.
const domains = [
	{ title: "Cybersecurity", icon: "lock.png", problems: 3 },
	{ title: "AI-ML", icon: "ai.png", problems: 3 },
];

const DomainCard = ({ domain }) => (
	<div
		className="relative overflow-hidden rounded-lg bg-[#0d290d] p-6 max-w-[500px] sm:w-[400px] h-[300px] flex flex-col justify-center items-center cursor-pointer"
		style={{
			backgroundImage:
				"radial-gradient(circle at center, #1a4d1a 0%, #0d290d 100%)",
		}}
	>
		<img
			src="Arrow_top.svg"
			alt="arrow_top"
			className="absolute right-4 top-4 size-3.5 text-[#4ade4a]"
		/>

		<div className="relative mb-4 size-36">
			<div className="absolute inset-0 rounded-full bg-[#4ade4a]/20 blur-md" />
			
			{/* Need to update the image to relevant image */}
			<img src={"logo.png"} alt={domain.title} className="relative z-1" />
		</div>

		<h3 className="mb-2 text-2xl font-semibold text-white">{domain.title}</h3>

		<p className="text-sm font-semibold text-[#4ade4a]">
			{domain.problems} Problems
		</p>

		<div className="absolute -bottom-10 -right-10 size-20 bg-black transform rotate-[45deg]" />
	</div>
);

const Domains = () => {
	return (
		<div className=" bg-black p-14">
			<div className="mb-8 relative">
				<h2 className="inline-block bg-[#1a4d1a] px-6 py-2 text-2xl font-semibold text-[#9f6bff]">
					Domains
				</h2>
				<div className="mt-1 h-0.5 w-full bg-[#1a4d1a]" />
			</div>

			<div className="flex justify-center gap-7 max-sm:flex-col">
				{domains.map((domain, index) => (
					<DomainCard key={index} domain={domain} />
				))}
			</div>
		</div>
	);
};

export default Domains;
