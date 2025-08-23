"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import CustomMap from "@/components/CustomMap";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
	return (
		<main className="bg-gray-50">
			<section className="relative isolate flex h-[50vh] items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-950 dark:via-gray-900 dark:to-blue-950">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="z-10 text-center"
				>
					<h1 className="font-extrabold text-5xl text-gray-900 tracking-tight sm:text-6xl dark:text-white">
						Contact {""}
						<span className="text-green-600 dark:text-green-400">Us</span>
					</h1>
					<p className="mt-4 max-w-xl text-gray-600 text-lg dark:text-gray-300">
						Reach out to our friendly pharmacists—because your health matters.
					</p>
				</motion.div>

				<div className="-top-40 -right-40 absolute h-80 w-80 animate-pulse rounded-full bg-green-400/20 blur-3xl" />
				<div className="-bottom-40 -left-40 absolute h-80 w-80 animate-pulse rounded-full bg-blue-400/20 blur-3xl" />
			</section>

			<div className="mx-auto max-w-7xl px-6 py-16">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
					<div className="lg:col-span-2">
						<ContactForm />
					</div>
					<div>
						<ContactInfo />
					</div>
				</div>
				<CustomMap />
				<section className="mt-16 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 px-8 py-12 text-center text-white">
					<h2 className="font-bold text-2xl">Need Immediate Help?</h2>
					<p className="mx-auto mt-2 max-w-md">
						Our pharmacists are on standby during business hours to assist you.
					</p>
					<Button asChild variant="secondary" size="lg" className="mt-6 gap-2">
						<Link href="tel:09162359586">
							Call Now <ArrowRight size={16} />
						</Link>
					</Button>
				</section>
			</div>
		</main>
	);
}
