import React, { useEffect, useRef } from 'react';

const AngledBanner = () => {
    const bannerRef = useRef(null);

    // Array of banner items
    const bannerItems = ["ios", "backend", "frontend", "ui/ux", "analytics", "security", "data eng"];

    useEffect(() => {
        const handleScroll = () => {
            if (bannerRef.current) {
                const offset = window.scrollY;
                bannerRef.current.style.transform = `translateX(-${offset * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative w-full overflow-hidden h-20 bg-stone-900 transform z-10">
            <div
                ref={bannerRef}
                className="h-full w-full flex items-center justify-start pl-8 transform text-xl whitespace-nowrap">
                {bannerItems.map((item, index) => (
                    <span key={index} className="inline-flex items-center">
                        <div className="w-4 h-4 bg-rose-400 rounded-full mx-10"/>
                        <span className="text-white text-2xl font-semibold ">{item}</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AngledBanner;
