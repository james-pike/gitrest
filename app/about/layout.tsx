import AboutFooter from "@/components/aboutfooter";
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
		

		<MenuFoot />
	
	</div>
	);
}
