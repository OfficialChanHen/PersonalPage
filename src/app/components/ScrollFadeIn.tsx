"use client";

import { useEffect, useRef } from "react";

export default function ScrollFadeIn({ children 

}: Readonly<{
  children: React.ReactNode;
}>) {
    const ref = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting && ref.current) {
                    ref.current.classList.remove("opacity-0");
                    ref.current.classList.add("animate-fade-in");
                }
        }, 
        { threshold: 0.1})

        if(ref.current) observer.observe(ref.current)
            
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="opacity-0">
            {children}
        </div>
    );
}