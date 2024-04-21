import BasicFooter from "@/components/footer";
import { PiForkKnifeFill } from "react-icons/pi";
import { title } from "@/components/primitives";

export default function HomePage() {
	return (
		<div>











<div style={{ position: 'relative', height: '60vh'}}>
				<img
					className="w-full object-cover border-black"
					style={{ opacity: 0.75, height: '60vh' }}
					src="./images/a6.png"
					alt="Background Image"
				
				/>
			<h1
  className={title()}
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
  <span style={{ display: 'block' }}>Joes</span>
  <span style={{ display: 'block' }}>Italian</span>
  <span style={{ display: 'block' }}>Kitchen</span>
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
    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 border-white border-2 px-4 rounded mr-2">
      Orders
    </button>
  </a>
  <div className="pt-2"></div>
  <a href="https://booking.resdiary.com/widget/Standard/JoesItalianKitchen/364">
    <button className="bg-white hover:bg-green-700 text-black font-bold py-2 px-4 border-black border-2 rounded">
      Reservations
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
					className={title()}
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
					Menu
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
					className={title()}
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
					Locations
				</h1>
			</div>

			</a>

		

			<div className="border-4 border-black"></div>


			<a href="/catering" style={{ textDecoration: 'none' }}>
			<div style={{ position: 'relative' }}>
				<img
				className="w-full h-40 object-cover border-black"
					style={{ opacity: 0.75, height: '20vh' }}
					src="./images/c1.jpg"
					alt="Background Image"
				/>
				<h1
					className={title()}
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
					Catering
				</h1>
			</div>

			</a>



		




			<div className="border-4 border-black"></div>


{/* <BasicFooter/> */}
<div className="pt-2"></div>
		</div>





	);
}
