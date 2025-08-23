"use client";

import { motion } from "framer-motion";
import { Heart, Pill, ShoppingBag, Store, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
	{
		icon: Pill,
		title: "Prescription Services",
		desc: "Accurate dispensing & counseling",
	},
	{
		icon: ShoppingBag,
		title: "OTC Medication",
		desc: "Cough, cold, pain relief",
	},
	{ icon: Heart, title: "Health & Wellness", desc: "Vitamins & personal care" },
	{
		icon: Store,
		title: "Convenience Store",
		desc: "Snacks, drinks, daily needs",
	},
];

export default function HomePage() {
	return (
		<main className="relative isolate bg-gray-50 dark:bg-gray-950">
			<section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 px-6 dark:from-green-950 dark:via-gray-900 dark:to-blue-950">
				<div className="-top-40 -right-40 absolute h-80 w-80 animate-pulse rounded-full bg-green-400/10 blur-3xl" />
				<div className="-bottom-40 -left-40 absolute h-80 w-80 animate-pulse rounded-full bg-blue-400/10 blur-3xl" />

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="z-10 max-w-3xl text-center"
				>
					<h1 className="font-extrabold text-5xl text-gray-900 tracking-tight sm:text-6xl dark:text-white">
						Your Health,{" "}
						<span className="text-green-600 dark:text-green-400">
							Our Priority
						</span>
					</h1>
					<p className="mt-6 text-gray-700 text-lg dark:text-gray-300">
						Welcome to Dems Pharmacy—where expert care meets modern convenience.
					</p>
					<div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
						<Button
							asChild
							size="lg"
							className="gap-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
						>
							<Link href="/contact">Talk to Our AI Assistant</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="gap-2 border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900"
						>
							<Link href="/services">View All Services</Link>
						</Button>
					</div>

					<div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 font-medium text-green-700 text-sm shadow-md backdrop-blur-sm dark:bg-gray-800/60 dark:text-green-300">
						<Truck size={14} />
						Free delivery in Esperanza & Poblacion areas
					</div>
				</motion.div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-20">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<h2 className="font-bold text-4xl text-gray-900 dark:text-white">
						What We Offer
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
						From prescriptions to everyday essentials—everything you need under
						one roof.
					</p>
				</motion.div>

				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{services.map((s, idx) => (
						<motion.div
							key={s.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							viewport={{ once: true }}
							className="group flex flex-col items-center rounded-2xl bg-white/60 p-6 text-center shadow-lg ring-1 ring-gray-200/50 backdrop-blur-xl transition hover:shadow-green-200/50 dark:bg-gray-800/60 dark:ring-white/10 dark:hover:shadow-green-900/50"
						>
							<div className="mb-4 rounded-full bg-green-100 p-4 text-green-600 group-hover:bg-green-600 group-hover:text-white dark:bg-green-900/50 dark:text-green-400 dark:group-hover:bg-green-500">
								<s.icon size={32} />
							</div>
							<h3 className="font-bold text-gray-900 text-lg dark:text-white">
								{s.title}
							</h3>
							<p className="mt-1 text-gray-600 text-sm dark:text-gray-300">
								{s.desc}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 pb-20">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="grid grid-cols-1 gap-12 lg:grid-cols-2"
				>
					<div>
						<h2 className="font-bold text-4xl text-gray-900 dark:text-white">
							Who is{" "}
							<span className="text-green-600 dark:text-green-400">
								Dems Pharmacy
							</span>
							?
						</h2>
						<p className="mt-6 text-gray-600 dark:text-gray-300">
							Founded with one simple mission: make quality healthcare
							accessible, affordable, and human. Located in the Municipality of
							Esperanza in Sultan Kudarat, we combine clinical expertise with
							modern convenience— from AI-assisted consultations to free local
							delivery.
						</p>
						<p className="mt-4 text-gray-600 dark:text-gray-300">
							Whether you need a prescription filled, trustworthy advice, or
							just a quick snack, our friendly team is here for you.
						</p>
						<Button
							asChild
							className="mt-8 gap-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
						>
							<Link href="/about">Learn More</Link>
						</Button>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src="/Calling_Card_Front.png"
							alt="Dems Pharmacy team"
							width={600}
							height={400}
							className="rounded-2xl object-cover shadow-xl"
						/>
					</div>
				</motion.div>
			</section>
		</main>
	);
}
