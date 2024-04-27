import AboutFooter from "@/components/aboutfooter";
import Foot2 from "@/components/foot2";
import BasicFooter from "@/components/footer";
import MenuFoot from "@/components/menufoot";
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
		

		<Foot2 />
	
	</div>
	);
}
