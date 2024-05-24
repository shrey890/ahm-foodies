"use client";
import { Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start items-center">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<a>Services</a>
								<ul className="p-2">
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/about-us">About Us</Link>
							</li>
						</ul>
					</div>
					<Link href="/">
						<Image alt="logo" src="/1712399279872.png" width={60} height={60} />
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<details>
								<summary>Services</summary>
								<ul className="p-2">
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<Link href="/about-us">About Us</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-end gap-4">
					<a href="https://www.instagram.com/ahm_foodies/" target="_blank">
						<Instagram />
					</a>
					<a href="https://www.youtube.com/@Ahm_Foodies" target="_blank">
						<Youtube />
					</a>
					<Link href="/contact-us" className="btn">
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
