'use client'

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
<div>
		<div className={isMobile ? "block" : "hidden"}>
			<div style={{ position: 'relative', height: '60vh' }}>
				<img
					className="w-full object-cover border-black"
					style={{ opacity: 0.75, height: '60vh' }}
					src="./images/a6.png"
					alt="Background Image"
				/>
				<h1
					// className={title()}
					style={{
						position: 'absolute',
						top: '40%', // Position the h1 in the middle vertically
						left: '20%', // Position the h1 in the middle horizontally
						transform: 'translate(-20%, -50%)', // Center the h1
						color: 'white', // Text color
						fontSize: '4rem', // Font size
						zIndex: 10, // Ensure it's above the image
						lineHeight: '1', // Increase line height for better spacing between lines
					}}
				>
					<span style={{ display: 'block' }}>JOES</span>
					<span style={{ display: 'block' }}>ITALIAN</span>
					<span style={{ display: 'block' }}>KITCHEN</span>
				</h1>
				<div className="pt-6"
					style={{
						position: 'absolute',
						top: '60%', // Position the buttons below the subtitle
						left: '20%', // Position the buttons in the middle horizontally
						transform: 'translateX(-20%)', // Center the buttons horizontally
						zIndex: 10, // Ensure it's above the image
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<a href="https://joesitaliankitchen-1asc.mobi2go.com">
							<button className="bg-black text-white font-bold py-2 border-white border-2 px-4 rounded mr-2">
								ORDERS
							</button>
						</a>
						<div className="pt-2"></div>
						<a href="https://booking.resdiary.com/widget/Standard/JoesItalianKitchen/364">
							<button className="bg-white  text-black font-bold py-2 px-4 border-black border-2 rounded">
								RESERVATIONS
							</button>
						</a>
					</div>

				</div>
			</div>


			<div className="border-4 border-black"></div>
			<a href="/menu" style={{ textDecoration: 'none' }}>
				<div style={{ position: 'relative' }}>
					<img
						className="w-full h-40 object-cover border-black hover:opacity-50"
						style={{ opacity: 0.75, height: '20vh' }}
						src="./images/p1.jpg"
						alt="Background Image"
					/>
					<h1
						// className={title()}
						style={{

							position: 'absolute',
							top: '50%', // Position the h1 in the middle vertically
							left: '25%', // Position the h1 in the middle horizontally
							transform: 'translate(-50%, -50%)', // Center the h1
							color: 'white', // Text color
							fontSize: '2rem', // Font size
							zIndex: 10, // Ensure it's above the image
						}}
					>
						MENU
					</h1>
				</div>

			</a>


			<div className="border-4 border-black"></div>


			<a href="/locations" style={{ textDecoration: 'none' }}>
				<div style={{ position: 'relative' }}>
					<img
						className="w-full h-40 object-cover border-black"
						style={{ opacity: 0.75, height: '20vh' }}
						src="./images/a1.jpg"
						alt="Background Image"
					/>
					<h1
						// className={title()}
						style={{

							position: 'absolute',
							top: '50%', // Position the h1 in the middle vertically
							left: '25%', // Position the h1 in the middle horizontally
							transform: 'translate(-50%, -50%)', // Center the h1
							color: 'white', // Text color
							fontSize: '2rem', // Font size
							zIndex: 10, // Ensure it's above the image
						}}
					>
						LOCATIONS
					</h1>
				</div>

			</a>



			<div className="border-4 border-black"></div>


			<a href="/catering" style={{ textDecoration: 'none' }}>
				<div style={{ position: 'relative' }}>
					<img
						className="w-full h-40 object-cover border-black"
						style={{ opacity: 0.75, height: '20vh', }}
						src="./images/a3.jpg"
						alt="Background Image"
					/>
					<h1
						// className={title()}
						style={{

							position: 'absolute',
							top: '50%', // Position the h1 in the middle vertically
							left: '25%', // Position the h1 in the middle horizontally
							transform: 'translate(-50%, -50%)', // Center the h1
							color: 'white', // Text color
							fontSize: '2rem', // Font size
							zIndex: 10, // Ensure it's above the image
						}}
					>
						ABOUT
					</h1>
				</div>

			</a>



			


			<div className="border-4 border-black"></div>


			<div style={{ position: 'relative', height: '40vh' }}>
				<img
					className="w-full object-cover border-black"
					style={{ opacity: 0.75, height: '40vh' }}
					src="./images/b1.jpg"
					alt="Background Image"
				/>
				<h1
					// className={title()}
					style={{
						position: 'absolute',
						top: '40%', // Position the h1 in the middle vertically
						left: '20%', // Position the h1 in the middle horizontally
						transform: 'translate(-20%, -50%)', // Center the h1
						color: 'white', // Text color
						fontSize: '2.8rem', // Font size
						zIndex: 10, // Ensure it's above the image
						lineHeight: '1', // Increase line height for better spacing between lines
					}}
				>
					<span style={{ display: 'block' }}>CANADAS</span>
					<span style={{ display: 'block' }}>CERTIFIED</span>
					<span style={{ display: 'block' }}>PINSARIA</span>
				</h1>
				<div className="pt-6"
					style={{
						position: 'absolute',
						top: '60%', // Position the buttons below the subtitle
						left: '20%', // Position the buttons in the middle horizontally
						transform: 'translateX(-20%)', // Center the buttons horizontally
						zIndex: 10, // Ensure it's above the image
					}}
				>
					<div className="pt-1" style={{ display: 'flex', alignItems: 'center' }}>
						<a href="/menu">
							<button className="bg-black text-white font-bold py-3 border-white border-1 px-4 rounded mr-2">
								BROWSE PINSAS
							</button>
						</a>
						<div className="pt-2"></div>
						{/* <a href="https://booking.resdiary.com/widget/Standard/JoesItalianKitchen/364">
							<button className="bg-white  text-black font-bold py-2 px-4 border-black border-2 rounded">
								Reservations
							</button>
						</a> */}
					</div>

				</div>
			</div>

			<div className="border-4 border-black"></div>

			{/* <BasicFooter/> */}


		



		</div>



</div>
	);
}
