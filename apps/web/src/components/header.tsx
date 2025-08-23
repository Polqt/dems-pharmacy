"use client";

import Link from "next/link";
import { useState } from "react";
import {
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	NavBody,
	Navbar,
	NavbarButton,
	NavbarLogo,
	NavItems,
} from "@/components/ui/resizable-navbar";

export default function Header() {
	const navItems = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Services",
			link: "/services",
		},
		{
			name: "Contact Us",
			link: "/contact",
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="fixed top-0 left-0 z-50 w-full">
			<Navbar>
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="z-10 flex items-center gap-4">
						<NavbarButton as={Link} href="/login" variant="secondary">
							Login
						</NavbarButton>
						<NavbarButton as={Link} href="/sign-up" variant="primary">
							Sign Up
						</NavbarButton>
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					>
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative text-neutral-600 dark:text-neutral-300"
							>
								<span className="block">{item.name}</span>
							</a>
						))}
						<div className="flex w-full flex-col gap-4">
							<NavbarButton
								as={Link}
								href="/login"
								onClick={() => setIsMobileMenuOpen(false)}
								variant="secondary"
								className="w-full"
							>
								Login
							</NavbarButton>
							<Link href={"/sign-up"} className="w-full">
								<NavbarButton
									as={Link}
									href="/sign-up"
									onClick={() => setIsMobileMenuOpen(false)}
									variant="primary"
									className="w-full"
								>
									Sign Up
								</NavbarButton>
							</Link>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
		</div>
	);
}
