"use client";

import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

const values = [
	{
		icon: Heart,
		title: "Care First",
		desc: "Every decision starts with patient wellbeing.",
	},
	{
		icon: ShieldCheck,
		title: "Trust & Safety",
		desc: "Accurate prescriptions and honest advice.",
	},
	{
		icon: Users,
		title: "Community",
		desc: "Supporting Sagay families for healthier lives.",
	},
	{
		icon: Award,
		title: "Excellence",
		desc: "Continuous training and modern technology.",
	},
];

export default function AboutPage() {
	return (
		<main className="relative isolate bg-gray-50 dark:bg-gray-950">
			<section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 px-6 dark:from-green-950 dark:via-gray-900 dark:to-blue-950">
				<Image
					src="/Calling_Card_Front.png"
					alt="Dems Pharmacy interior"
					fill
					priority
					className="-z-10 absolute inset-0 h-full w-full object-cover opacity-25 dark:opacity-20"
				/>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="z-10 text-center"
				>
					<h1 className="font-extrabold text-5xl text-gray-900 tracking-tight sm:text-6xl dark:text-white">
						About{" "}
						<span className="text-green-600 dark:text-green-400">
							Dems Pharmacy
						</span>
					</h1>
					<p className="mt-6 max-w-2xl text-gray-700 text-lg dark:text-gray-300">
						Gamot na Mabisa sa Presyong Tama
					</p>
				</motion.div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-20">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="grid grid-cols-1 gap-12 lg:grid-cols-2"
				>
					<div>
						<h2 className="font-bold text-4xl text-gray-900 dark:text-white">
							Our Mission
						</h2>
						<p className="mt-6 text-gray-600 dark:text-gray-300">
							We believe healthcare should be personal, affordable, and easy to
							access. From the moment you walk in—or tap “refill”—our
							pharmacists treat you like family, ensuring every prescription and
							recommendation is safe, clear, and tailored to you.
						</p>
						<p className="mt-4 text-gray-600 dark:text-gray-300">
							Located in the Municipality of Esperanza in Sultan Kudarat, we
							combine clinical expertise with friendly faces, AI-powered
							insights, and free local delivery to keep our neighbors healthy
							and happy.
						</p>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src="/Calling_Card_Back.png"
							alt="Dems Pharmacy team"
							width={600}
							height={400}
							className="rounded-2xl object-cover shadow-xl"
						/>
					</div>
				</motion.div>
			</section>

			<section className="bg-white/30 dark:bg-gray-900/30">
				<div className="mx-auto max-w-7xl px-6 py-20">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<h2 className="font-bold text-4xl text-gray-900 dark:text-white">
							Values That Guide Us
						</h2>
					</motion.div>

					<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{values.map((v, idx) => (
							<motion.div
								key={v.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: idx * 0.1 }}
								viewport={{ once: true }}
								className="group flex flex-col items-center rounded-2xl bg-white/60 p-6 text-center shadow-lg ring-1 ring-gray-200/50 backdrop-blur-xl transition hover:shadow-green-200/50 dark:bg-gray-800/60 dark:ring-white/10 dark:hover:shadow-green-900/50"
							>
								<div className="mb-4 rounded-full bg-green-100 p-4 text-green-600 group-hover:bg-green-600 group-hover:text-white dark:bg-green-900/50 dark:text-green-400 dark:group-hover:bg-green-500">
									<v.icon size={32} />
								</div>
								<h3 className="font-bold text-gray-900 text-lg dark:text-white">
									{v.title}
								</h3>
								<p className="mt-2 text-gray-600 text-sm dark:text-gray-300">
									{v.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
