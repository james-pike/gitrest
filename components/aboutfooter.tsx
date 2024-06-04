

import React from "react";
import Image from "next/image";
import Video from "./video";

export default function AboutFooter() {
    return (
        <div>
            <footer className="flex w-full pb-4 flex-col max-w-9xl  mx-auto ">
                <div className="  " style={{ paddingLeft: '0%', paddingRight: '0%' }}>

                    <div>
                        <Video 
                        />
                    </div>

                
                    <div className="border-6 border-black"></div>
                    <div className="md:grid md:grid-cols-2 gap-4">
                        <div style={{ position: 'relative', height: '20em' }}>
                            <img
                                className="w-full object-cover border-black"
                                style={{ opacity: 0.75, height: '20em' }}
                                src="./images/g1.jpg"
                                alt="Background Image"
                            />
                            <h1
                                style={{
                                    position: 'absolute',
                                    top: '40%', // Position the h1 in the middle vertically
                                    left: '20%', // Position the h1 in the middle horizontally
                                    transform: 'translate(-20%, -50%)', // Center the h1
                                    color: 'white', // Text color
                                    fontSize: '2.2rem', // Font size
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
                                        <button className="bg-black text-white font-bold py-3 border-white border-1 px-4 rounded mr-2 text-xs">
                                            BROWSE MENU
                                        </button>
                                    </a>
                                    <div className="pt-2"></div>

                                </div>

                            </div>
                        </div>
                        <div className="border-6 border-black"></div>
                        <div style={{ position: 'relative', height: '20em' }}>
                            <img
                                className="w-full object-cover border-black"
                                style={{ opacity: 0.75, height: '20em' }}
                                src="./images/p1.jpg"
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
                                    fontSize: '2.2rem', // Font size
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
                                        <button className="bg-black text-white font-bold py-3 border-white border-1 px-4 text-xs rounded mr-2">
                                            BROWSE PINSAS
                                        </button>
                                    </a>
                                    <div className="pt-2"></div>

                                </div>

                            </div>
                        </div>


                    </div>




                </div>
            </footer>
        </div>


    );
}
