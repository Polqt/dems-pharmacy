"use client";

import { Navigation } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export default function CustomMap() {
	return (
		<section className="relative isolate">
			<div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-blue-50 dark:from-green-950 dark:via-gray-900 dark:to-blue-950" />
			<div className="relative mx-auto max-w-7xl px-6 py-16">
				<h2 className="font-bold text-3xl text-gray-900 dark:text-white">
					Find Us
				</h2>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					Sagay City, Negros Occidental
				</p>

				<div className="mt-6 overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200/50 dark:ring-white/10">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125565.68429010402!2d123.23894595!3d10.893755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999c1b0a17e87%3A0xcd0cc8c9dc65e94b!2sSagay%2C%20Negros%20Occidental!5e0!3m2!1sen!2sph!4v1724400000000"
						width="100%"
						height="100%"
						className="aspect-video"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Dems Pharmacy"
					/>
				</div>

				<div className="mt-6 flex justify-end">
					<Button
						asChild
						className="gap-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
					>
						<a
							href="https://maps.app.goo.gl/w8f9RVg2cB1ET7Ub8"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Navigation size={16} />
							Get Directions
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
