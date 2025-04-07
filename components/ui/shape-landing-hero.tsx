"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


function ElegantShape({
	className,
	delay = 0,
	width = 400,
	height = 100,
	rotate = 0,
	gradient = "from-white/[0.08]",
}: {
	className?: string;
	delay?: number;
	width?: number;
	height?: number;
	rotate?: number;
	gradient?: string;
}) {
	return (
		<motion.div
			style={{ willChange: "transform" }}
			initial={{
				opacity: 0,
				y: -150,
				rotate: rotate - 15,
			}}
			animate={{
				opacity: 1,
				y: 0,
				rotate: rotate,
			}}
			transition={{
				duration: 2.4,
				delay,
				ease: [0.23, 0.86, 0.39, 0.96],
				opacity: { duration: 1.2 },
			}}
			className={cn("absolute", className)}
		>
			<motion.div
				animate={{
					y: [0, 15, 0],
				}}
				transition={{
					duration: 12,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				style={{
					width,
					height,
				}}
				className="relative"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 200 200"
					width="100%"
					height="100%"
					className="coolshapes misc-5"
				>
					<g clipPath="url(#cs_clip_1_misc-5)">
						<mask
							id="cs_mask_1_misc-5"
							style={{ maskType: "alpha" }}
							width="200"
							height="185"
							x="0"
							y="8"
							maskUnits="userSpaceOnUse"
						>
							<path
								fill="#fff"
								d="M145 8c30.376 0 55 25 55 60 0 70-75 110-100 125C75 178 0 138 0 68 0 33 25 8 55 8c18.6 0 35 10 45 20 10-10 26.4-20 45-20z"
							/>
						</mask>
						<g mask="url(#cs_mask_1_misc-5)">
							<path fill="#fff" d="M200 0H0v200h200V0z" />
							<path
								fill="url(#paint0_radial_748_5033)"
								d="M200 0H0v200h200V0z"
							/>
							<path
								fill="url(#paint1_radial_748_5033)"
								d="M200 0H0v200h200V0z"
							/>
						</g>
					</g>
					<defs>
						<radialGradient
							id="paint0_radial_748_5033"
							cx="0"
							cy="0"
							r="1"
							gradientTransform="rotate(116.694 71.023 87.946) scale(199.234)"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFF500" />
							<stop offset="1" stopColor="#FF00D6" stopOpacity="0" />
						</radialGradient>
						<radialGradient
							id="paint1_radial_748_5033"
							cx="0"
							cy="0"
							r="1"
							gradientTransform="rotate(48.452 -12.085 35.502) scale(223.143)"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF00D6" />
							<stop
								offset="0.461"
								stopColor="#FF7171"
								stopOpacity="0.84"
							/>
							<stop
								offset="1"
								stopColor="#FFF500"
								stopOpacity="0"
							/>
						</radialGradient>
						<clipPath id="cs_clip_1_misc-5">
							<path fill="#fff" d="M0 0H200V200H0z" />
						</clipPath>
					</defs>
				</svg>
			</motion.div>
		</motion.div>
	);
}

function HeroGeometric({
	badge = "Design Collective",
	title1 = "AuraSync",
}: {
	badge?: string;
	title1?: string;
}) {
	const fadeUpVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.5 + i * 0.2,
				ease: [0.25, 0.4, 0.25, 1],
			},
		}),
	};

	return (
		<div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
			<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

			<div className="absolute inset-0 overflow-hidden">
				<ElegantShape
					delay={0.3}
					width={600}
					height={140}
					rotate={12}
					gradient="from-indigo-500/[0.15]"
					className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
				/>

				<ElegantShape
					delay={0.5}
					width={500}
					height={120}
					rotate={-15}
					gradient="from-rose-500/[0.15]"
					className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
				/>

				<ElegantShape
					delay={0.4}
					width={300}
					height={80}
					rotate={-8}
					gradient="from-violet-500/[0.15]"
					className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
				/>

				<ElegantShape
					delay={0.6}
					width={200}
					height={60}
					rotate={20}
					gradient="from-amber-500/[0.15]"
					className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
				/>

				<ElegantShape
					delay={0.7}
					width={150}
					height={40}
					rotate={-25}
					gradient="from-cyan-500/[0.15]"
					className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
				/>
			</div>

			<div className="relative z-10 container mx-auto px-4 md:px-6">
				<div className="max-w-3xl mx-auto text-center">
					<motion.div
						custom={0}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
						className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
					>
						<Heart className="h-3 w-3 fill-rose-500/80" />
						<span className="text-sm text-white/60 tracking-wide">
							{badge}
						</span>
					</motion.div>

					<motion.div
						custom={1}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
					>
						<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
							<span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#C6FFDD,#FBD786,#f7797d)]">
								{title1}
							</span>
						</h1>
					</motion.div>

					<motion.div
						custom={2}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
					>
						<p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
							Your own personal matchmaking team to help you find love ASAP.
						</p>
					</motion.div>
				</div>
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
		</div>
	);
}

export { HeroGeometric }
