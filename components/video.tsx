        //video.tsx

        import React from 'react';
        import Image from "next/image";

        export default function Video() {
            
            return (
                <div className="relative ">
              <Image
                            className=" object-cover w-full "
                            src="/images/a6.png"
                            alt="{name}"
                            quality={50}
                            width={440}
                            height={0}
                            style={{ width: 'full', height: '30em' }} // optional
                            priority
                        />
                    <div className="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2 z-20 space-y-3">
                        <h1 className="text-6xl text-white font-bold">JOES ITALIAN KITCHEN</h1>
                        <p className="text-2xl text-white">Lorem Ipsum serving Almonte, Preston, & Wellington</p>
                    </div>
                </div>
            );
        }