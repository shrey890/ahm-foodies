import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
	return (
		<section className="p-2 text-center sm:text-start sm:p-10 min-h-screen  items-center justify-center">
			<h2 className="text-3xl text-center  permanent-marker-regular  md:text-5xl ">
				Contact Us
			</h2>
			<div className="md:flex justify-center w-full items-center ">
				<div className="md:w-1/2 ]">
					<Image src="/contact.svg" alt="looking" width={550} height={550} />
				</div>
				<div className="md:w-1/2 w-full p-5 flex-col justify-center items-center">
					<h2 className="text-2xl  text-center sm:text-start  md:mt-7 md:text-3xl font-semibold ">
						Contact us for pricing details or <br /> any inquiries.
					</h2>
					<ul className=" items-center  flex-col justify-center text-2xl   mt-10 space-y-5  ">
						<li className="flex gap-6 items-center">
							<PhoneCall />
							<a href="tel:7984916976">+91 79849 16976</a>{" "}
						</li>
						{/* <li className="flex gap-2 ">
							<PhoneCall />
							<a href="tel:6355157234">+91 63551 57234</a>{" "}
						</li> */}
						<li className="flex gap-6  items-center">
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
