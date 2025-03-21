"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import { useEffect } from "react";
import Header from './Component/header/navbar';
import HomePage from './Component/home/home';
import Footer from './Component/footer/footer';


export default function Home() {
    useEffect(() => {
        import("wow.js").then((module) => {
            const WOW = module.default;
            window.WOW = WOW;
            const wow = new WOW({
                live: false, 
                offset: 100, 
                mobile: true,
            });

            wow.init();
            console.log("WOW.js initialized for scrolling.");
        });
    }, []);

    return (
        <>
            <Header/>
            <HomePage/>
            <Footer/>
        </>
    );
}
