'use client';

import Footer2 from "@/components/foot2";
import BasicFooter from "@/components/footer";
import Tab2 from "@/components/tabs2";
import { Basic } from "next/font/google";
import { useState, useEffect } from "react";


export default function MenuLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	const [isMobile, setIsMobile] = useState(false);

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setIsMobile(window.innerWidth <= 568); // Adjust the threshold as needed
	// 	};

	// 	handleResize(); // Check initial width
	// 	window.addEventListener("resize", handleResize);

	// 	return () => {
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, []);
	return (

		<div>
{/* <div className={isMobile ? "block" : "hidden"}> */}
			{/* <Tab2 className=""/> */}
			{/* </div> */}

			{/* <BasicFooter /> */}
			<Footer2 />
		</div>
	);
}
