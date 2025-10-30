import React from 'react';
import Marquee from 'react-fast-marquee';


const MarqueeComponent = () => {

    return (
        <>
            <div>
                <Marquee speed={40} gradient={false}>
                    <div className="flex items-center my-4 pt-10 ">
                        <div className="px-4 font-semibold uppercase ">
                            <span ><i aria-hidden="true" class="fa fa-star"></i> Exclusive Seasonal Sale: Save Up to 50%  </span>
                            <span><i aria-hidden="true" class="fa fa-star"></i> Exclusive Seasonal Sale: Save Up to 50% </span>
                            <span><i aria-hidden="true" class="fa fa-star"></i> Exclusive Seasonal Sale: Save Up to 50% </span>
                            <span><i aria-hidden="true" class="fa fa-star"></i> Exclusive Seasonal Sale: Save Up to 50% </span>
                        </div>
                    </div>
                </Marquee>
            </div>
        </>
    );
};

export default MarqueeComponent;