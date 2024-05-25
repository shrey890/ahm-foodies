import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
	return (
		<section className="p-2 sm:p-10 ">
			<h2 className="text-3xl text-center mb-5 permanent-marker-regular  md:text-5xl mt-5">
				Contact Us
			</h2>
			<div className="md:flex justify-center  w-full  max-h-screen ">
				<div className="md:w-1/2 md:mt-[-50px]">
					<Image src="/contact.svg" alt="looking" width={550} height={550} />
				</div>
				<div className="md:w-1/2 w-full pl-2 flex-col justify-center md:mt-10 items-center">
					<h2 className="text-2xl   md:mt-7 md:text-3xl font-semibold ">
						Contact us for pricing details or <br /> any inquiries.
					</h2>
					<ul className=" items-center flex-col justify-center  md:mt-10 mt-5 space-y-5  ">
						<li className="flex gap-2">
							<PhoneCall />
							<a href="tel:7984916976">+91 79849 16976</a>{" "}
						</li>
						{/* <li className="flex gap-2 ">
							<PhoneCall />
							<a href="tel:6355157234">+91 63551 57234</a>{" "}
						</li> */}
						<li className="flex gap-2 ">
							<Mail />
							<a href="mailto:ahmfoodies@gmail.com">ahmfoodies@gmail.com</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
