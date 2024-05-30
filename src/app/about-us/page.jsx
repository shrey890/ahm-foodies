import Image from "next/image";
import React from "react";

const AboutUs = () => {
	return (
		<section className="min-h-screen">
			<h2 className="text-3xl text-center permanent-marker-regular  md:text-5xl mt-5">
				About Us
			</h2>
			<div className="flex flex-col items-center justify-center">
				{/* <Image src="/about-us.svg" width={400} height={400} alt="about-us" /> */}
				<Image
					src="/undraw_under.svg"
					className="mt-10 animate-pulse"
					alt="image"
					width={650}
					height={650}
				/>

				<p className="p-5 md:p-10 text-4xl font-bold animate-bounce text-center mt-5   ">
					This page is currently under construction, and the page content is
					coming soon.
				</p>
			</div>
		</section>
	);
};

export default AboutUs;
