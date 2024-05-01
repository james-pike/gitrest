'use client';

import AboutFooter2 from "@/components/aboutfoot2";
import AboutFooter from "@/components/aboutfooter";
import Footer2 from "@/components/foot2";
import Footer3 from "@/components/foot3";
import BasicFooter from "@/components/footer";
import LocationFooter from "@/components/locationfooter";
import Tab2 from "@/components/tabs2";
import { Tab } from "@nextui-org/react";
import { Basic } from "next/font/google";
import { useState, useEffect } from "react";


export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AboutFooter	/>
	);
}
