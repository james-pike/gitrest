import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import BasicNavbar from '@/components/navbar';
import clsx from "clsx";
import BasicFooter from "@/components/footer";
import Component from "@/components/list";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};




export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {




	return (


		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>

					<div className="relative w-full flex flex-col h-screen">

						<BasicNavbar />
						<video
							src={"/video/almonte1.mp4"}
							loop
							autoPlay
							poster="/images/poster.png"
							muted
							style={{ opacity: 0.75, height: '40vh' }}
							className='object-cover w-full h-full lg:px-10 border-b '
						>
						</video>
						{/* <Component /> */}
						<main className="mx-auto w-full flex-grow lg:px-20">
							{children}
						</main>

						<BasicFooter/>
					</div>
					
				</Providers>
			</body>
		</html>
	);
}
