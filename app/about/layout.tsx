'use client';

import AboutFooter from "@/components/aboutfooter";
import Footer2 from "@/components/foot2";
import Footer3 from "@/components/foot3";
import BasicFooter from "@/components/footer";
import Tab2 from "@/components/tabs2";
import { Tab } from "@nextui-org/react";
import { Basic } from "next/font/google";
import { useState, useEffect } from "react";


export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 568); // Adjust the threshold as needed
		};

		handleResize(); // Check initial width
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		isMobile ? <AboutFooter/> : <Footer3/>
		

		
	);
}
