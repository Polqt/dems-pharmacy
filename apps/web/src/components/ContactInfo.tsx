import { Clock, Facebook, Mail, Phone } from "lucide-react";

export default function ContactInfo() {
	const items = [
		{
			icon: Phone,
			label: "Phone",
			value: "0916 235 9586",
			href: "tel:09162359586",
		},
		{
			icon: Mail,
			label: "Email",
			value: "demspharma@gmail.com",
			href: "mailto:demspharma@gmail.com",
		},
		{
			icon: Facebook,
			label: "Facebook",
			value: "Dems Pharmacy",
			href: "https://www.facebook.com/demspharmacy",
		},
		{ icon: Clock, label: "Hours", value: "8:00 AM – 5:00 PM" },
	];

	return (
		<aside className="space-y-5">
			{items.map(({ icon: Icon, label, value, href }) => (
				<a
					key={label}
					href={href ?? "#"}
					target={href?.startsWith("http") ? "_blank" : undefined}
					rel="noopener noreferrer"
					className="flex items-center gap-4 rounded-2xl bg-white/60 p-4 ring-1 ring-gray-200/50 backdrop-blur-xl transition hover:shadow-lg dark:bg-gray-800/60 dark:ring-white/10"
				>
					<div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/50 dark:text-green-400">
						<Icon size={20} />
					</div>
					<div>
						<p className="font-medium text-gray-500 text-sm dark:text-gray-400">
							{label}
						</p>
						<p className="font-semibold text-gray-900 dark:text-white">
							{value}
						</p>
					</div>
				</a>
			))}
		</aside>
	);
}
