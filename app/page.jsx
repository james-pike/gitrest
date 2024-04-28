'use client'

import AboutFooter from "@/components/aboutfooter";
import BasicFooter from "@/components/footer";
import { useEffect, useState } from "react";

export default function HomePage() {
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
		<AboutFooter />
	);
}
