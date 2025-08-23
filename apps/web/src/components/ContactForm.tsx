"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
	name: z.string().min(2, "Name is required"),
	email: z.string().email("Invalid email"),
	phone: z.string().optional(),
	subject: z.string().min(3, "Subject is required"),
	message: z.string().min(10, "Message too short"),
});

type Values = z.infer<typeof schema>;

export default function ContactForm() {
	const form = useForm<Values>({
		resolver: zodResolver(schema),
		defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
	});

	const onSubmit = (values: Values) => {
		// TODO: Replace with server action / API
		console.table(values);
		toast.success("Message sent! We’ll get back to you shortly.");
		form.reset();
	};

	return (
		<div className="rounded-2xl bg-white/60 p-6 ring-1 ring-gray-200/50 backdrop-blur-xl dark:bg-gray-800/60 dark:ring-white/10">
			<h2 className="font-bold text-2xl text-gray-900 dark:text-white">
				Send a Message
			</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-5">
					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
						<FormField
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name *</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Jane Doe" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email *</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="email"
											placeholder="jane@mail.com"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
						<FormField
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<Input {...field} placeholder="0916 235 9586" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="subject"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Subject *</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Prescription inquiry" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message *</FormLabel>
								<FormControl>
									<Textarea
										rows={5}
										placeholder="How can we help you?"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
						Send Message
					</Button>
				</form>
			</Form>
		</div>
	);
}
