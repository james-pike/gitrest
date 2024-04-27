import BasicFooter from "@/components/footer";
import LocationFooter from "@/components/locationfooter";

import { AcmeIcon } from "@/social";
import ThemeSwitch from "@/theme-switch";
import Link from "next/link";

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (

		<div>
			{/* <img className="w-full h-40 object-cover border-b" src="./images/p1.jpg" /> */}
			
    
<LocationFooter />

		
	
	</div>
	);
}
