"use client";

import { useEffect, useRef } from "react";

export default function ScrollFloatUp({ className, children 

}: Readonly<{
    className: string;
    children: React.ReactNode;
}>) {
    const ref = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting && ref.current) {
                    ref.current.classList.add("animate-float-up");
                }
        }, 
        { threshold: 0.1})

        if(ref.current) observer.observe(ref.current)
            
        return () => observer.disconnect();
    }, []);

    return (
        <div className={className} ref={ref}>
            {children}
        </div>
    );
}