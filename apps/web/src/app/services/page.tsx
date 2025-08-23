"use client";

import { motion } from "framer-motion";
import { Heart, Pill, ShoppingBag, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Service = {
	icon: React.ElementType;
	title: string;
	description: string;
	cta: string;
	href: string;
};

const services: Service[] = [
	{
		icon: Pill,
		title: "Prescription Services",
		description:
			"Accurate dispensing, drug-interaction checks, and pharmacist counseling—because every dose counts.",
		cta: "Refill Rx",
		href: "/refill",
	},
	{
		icon: ShoppingBag,
		title: "Over-the-Counter Medication",
		description:
			"Fast relief for cough, cold, pain, allergies and more—no prescription needed.",
		cta: "Browse OTC",
		href: "/otc",
	},
	{
		icon: Heart,
		title: "Health & Wellness Products",
		description:
			"Premium vitamins, supplements, and personal-care items to keep you at your best.",
		cta: "Shop Wellness",
		href: "/wellness",
	},
	{
		icon: Store,
		title: "Convenience Store Essentials",
		description:
			"Grab snacks, drinks, toiletries and everyday necessities while you wait.",
		cta: "Quick Stop",
		href: "/convenience",
	},
];

export default function ServicesPage() {
	return (
		<main className="relative isolate bg-gray-50 dark:bg-gray-950">
			<section className="flex min-h-[50vh] items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 px-6 dark:from-green-950 dark:via-gray-900 dark:to-blue-950">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-center"
				>
					<h1 className="font-extrabold text-5xl text-gray-900 tracking-tight sm:text-6xl dark:text-white">
						Our{" "}
						<span className="text-green-600 dark:text-green-400">Services</span>
					</h1>
					<p className="mt-4 max-w-2xl text-gray-600 text-lg dark:text-gray-300">
						Everything you need for better health—under one roof.
					</p>
				</motion.div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-20">
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
					{services.map((s, idx) => (
						<motion.div
							key={s.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							viewport={{ once: true }}
							className="group relative flex flex-col rounded-2xl bg-white/60 p-6 text-center shadow-lg ring-1 ring-gray-200/50 backdrop-blur-xl transition hover:shadow-green-200/50 dark:bg-gray-800/60 dark:ring-white/10 dark:hover:shadow-green-900/50"
						>
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white dark:bg-green-900/50 dark:text-green-400 dark:group-hover:bg-green-500 dark:group-hover:text-white">
								<s.icon size={32} />
							</div>

							<h3 className="mt-5 font-bold text-gray-900 text-xl dark:text-white">
								{s.title}
							</h3>
							<p className="mt-2 flex-grow text-gray-600 text-sm dark:text-gray-300">
								{s.description}
							</p>

							<Button
								asChild
								variant="ghost"
								className="mt-6 w-full font-semibold text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/50"
							>
								<Link href={s.href}>{s.cta}</Link>
							</Button>
						</motion.div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 pb-20">
				<div className="rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 px-8 py-12 text-center text-white">
					<h2 className="font-bold text-3xl">Still have questions?</h2>
					<p className="mx-auto mt-2 max-w-md">
						Our pharmacists are ready to help.
					</p>
					<Button asChild variant="secondary" size="lg" className="mt-6 gap-2">
						<Link href="/contact">Contact Us</Link>
					</Button>
				</div>
			</section>
		</main>
	);
}
