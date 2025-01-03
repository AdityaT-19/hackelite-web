import React from "react";
import { Modal, ModalTrigger, ModalBody, ModalContent } from "./animated-modal";
import { motion } from "framer-motion";
import { domains } from "../constants/domains";

const DomainCard = ({ domain }) => (
	<Modal>
		<ModalTrigger className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
			<motion.div
				className="relative overflow-hidden rounded-lg bg-[#0d290d] p-4 sm:p-6 w-full h-[250px] sm:h-[300px] flex flex-col justify-center items-center cursor-pointer"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
				viewport={{ once: true }}
				style={{
					backgroundImage:
						"radial-gradient(circle at center, #1a4d1a 0%, #0d290d 100%)",
				}}
			>
				<img
					src="Arrow_top.svg"
					alt="arrow_top"
					className="absolute right-2 sm:right-4 top-2 sm:top-4 w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4ade4a]"
				/>

				<div className="relative mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36">
					<div className="absolute inset-0 rounded-full bg-[#4ade4a]/20 blur-md" />
					<img
						src={domain.icon}
						alt={domain.title}
						className="relative z-1 w-full h-full"
					/>
				</div>

				<h3 className="mb-2 text-xl sm:text-2xl font-semibold text-white text-center">
					{domain.title}
				</h3>
				<p className="text-xs sm:text-sm font-semibold text-[#4ade4a]">
					{domain.problems} Problems
				</p>

				<div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 w-16 h-16 sm:w-20 sm:h-20 bg-black transform rotate-[45deg]" />
			</motion.div>
		</ModalTrigger>

		<ModalBody className={"overflow-y-scroll no-scrollbar"}>
			<ModalContent className="w-full max-w-[100vw]">
				<div className="relative rounded-lg sm:p-6">
					<div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 border-r-2 border-[#4ade4a]/30 flex flex-col items-center py-6 gap-4 sm:gap-6 max-lg:hidden">
						<div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#4ade4a]/40 transform rotate-45"></div>
						<div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#4ade4a]/40 flex items-center justify-center">
							<div className="w-2 h-2 sm:w-3 sm:h-3 border-2 border-[#4ade4a]/40"></div>
						</div>
						<div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#4ade4a]/40 rounded-full"></div>
						<div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#4ade4a]/40 transform rotate-45"></div>
					</div>

					<div className="lg:pl-12">
						<div className="flex items-center justify-between mb-4 sm:mb-6">
							<div className="flex items-center gap-2">
								<h2 className="text-xl sm:text-2xl font-bold text-white">
									{domain.title}
								</h2>
							</div>
						</div>

						<div className="space-y-3 sm:space-y-4 text-white/90">
							{domain.background && (
								<div>
									<h3 className="text-[#4ade4a] font-semibold mb-1 text-sm sm:text-base">
										Background:
									</h3>
									<p className="text-xs sm:text-sm">{domain.background}</p>
								</div>
							)}

							{domain.challenge && (
								<div>
									<h3 className="text-[#4ade4a] font-semibold mb-1 text-sm sm:text-base">
										Challenge:
									</h3>
									<p className="text-xs sm:text-sm">{domain.challenge}</p>
								</div>
							)}

							{domain.focusAreas && domain.focusAreas.length > 0 && (
								<div>
									<h3 className="text-[#4ade4a] font-semibold mb-1 text-sm sm:text-base">
										Focus Areas:
									</h3>
									<ul className="list-disc list-inside">
										{domain.focusAreas.map((area, index) => (
											<li key={index} className="text-xs sm:text-sm">
												{area}
											</li>
										))}
									</ul>
								</div>
							)}

							{domain.requirements && domain.requirements.length > 0 && (
								<div>
									<h3 className="text-[#4ade4a] font-semibold mb-1 text-sm sm:text-base">
										Requirements:
									</h3>
									<ul className="list-disc list-inside">
										{domain.requirements.map((req, index) => (
											<li key={index} className="text-xs sm:text-sm">
												{req}
											</li>
										))}
									</ul>
								</div>
							)}

							{domain.goal && (
								<div>
									<h3 className="text-[#4ade4a] font-semibold mb-1 text-sm sm:text-base">
										Goal:
									</h3>
									<p className="text-xs sm:text-sm">{domain.goal}</p>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="w-full flex justify-end mt-4">
					<button className="bg-green-600 font-semibold px-6 py-2 rounded-md text-sm max-sm:px-5">
						View Problems
					</button>
				</div>
			</ModalContent>
		</ModalBody>
	</Modal>
);

const Domains = () => {
	return (
		<div className="bg-black p-4 sm:p-6">
			<div className="mb-6 sm:mb-8 relative">
				<h2 className="inline-block bg-[#1a4d1a] px-4 sm:px-6 py-2 text-xl sm:text-2xl font-semibold text-[#9f6bff]">
					Domains
				</h2>
				<div className="mt-1 h-0.5 w-full bg-[#1a4d1a]" />
			</div>

			<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-7">
				{domains.map((domain, index) => (
					<DomainCard key={index} domain={domain} />
				))}
			</div>
		</div>
	);
};

export default Domains;
