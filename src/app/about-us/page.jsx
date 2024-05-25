import Image from "next/image";
import React from "react";

const AboutUs = () => {
	return (
		<section className="h-screen">
			<h2 className="text-3xl text-center permanent-marker-regular  md:text-5xl mt-5">
				About Us
			</h2>
			<div className="flex flex-col items-center justify-center">
				<Image src="/about-us.svg" width={400} height={400} alt="about-us" />
				<p className="p-5 md:p-10   ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
					laudantium eius, obcaecati impedit nisi eaque, error necessitatibus
					pariatur tempore, commodi reprehenderit molestias nemo adipisci vitae
					debitis magni blanditiis ea deserunt.
				</p>
			</div>
		</section>
	);
};

export default AboutUs;
