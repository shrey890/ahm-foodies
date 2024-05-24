import { Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
	const d = new Date();
	const year = d.getFullYear();
	return (
		<div>
			<footer className="footer footer-center p-5 bg-black rounded-badge text-primary-content">
				<aside>
					<Image src="/logo.png" alt="logo" width={100} height={100} />
					<p className="font-bold">
						ahm_foodies <br />
						Providing reliable service since 2023
					</p>
					<p>Copyright © {year} - All right reserved</p>
				</aside>
				<nav>
					<div className="grid grid-flow-col gap-4">
						<a href="https://www.instagram.com/ahm_foodies/" target="_blank">
							<Instagram />
						</a>
						<a href="https://www.youtube.com/@Ahm_Foodies" target="_blank">
							<Youtube />
						</a>
					</div>
				</nav>
			</footer>
		</div>
	);
};

export default Footer;
