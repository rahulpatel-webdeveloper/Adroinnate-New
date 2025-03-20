"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import { useEffect } from "react";
import "animate.css";
import { Nav, Tab, Row, Col, Container, Navbar, NavDropdown, Form, Button, Image } from "react-bootstrap";


export default function Home() {
    useEffect(() => {
        import("wow.js").then((module) => {
            const WOW = module.default;
            window.WOW = WOW;
            const wow = new WOW({
                live: false, // Ensures new elements added to the DOM aren't checked repeatedly
                offset: 100, // Adjusts when the animation triggers (in px before the element enters the viewport)
                mobile: true, // Ensures animations work on mobile
            });

            wow.init();
            console.log("WOW.js initialized for scrolling.");
        });
    }, []);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">
                    <img src="./assets/images/logo.png" alt=""  width={250}/>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll d-flex">
                        <Nav
                            className="flex-end my-2 my-lg-0 d-flex"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="banner-section pt-6 w-full h-screen">
                        <div className="bg-overlay">
                            <img src="./assets/images/bg-1.jpg" className="img-1 w-full h-full object-cover" alt="Next-Gen SOC-as-a-Service, CTEM, Data Security Management, Business Continuity, Risk Management" />
                        </div>
                        <div className="a-banner-content">
                            <div className="container">
                                <div className="row align-items-center justify-between">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="w-1/2 p-8 text-white b-content">
                                            <h2 className="text-4xl font-bold mb-4 text-white wow fadeInLeft">Proactive Cyber Defence, Powered by Intelligence. Secure Your Future with Adroinnate. 111</h2>
                                            <p className="mb-6 text-white wow fadeInLeft">Adroinnate delivers advanced Managed Security Services, including Next-Gen SOC-as-a-Service, Continuous Threat Exposure Management (CTEM), and Data Security Management, protecting your critical assets from evolving threats.
                                                Leverage our expertise to minimize risk and ensure business continuity.</p>
                                            <a className="white-btn text-decoration-none wow fadeInLeft" href="about.html">
                                                Request a Demo
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="w-1/2">
                                            <img className="wow fadeInRight" src="./assets/images/hero-2.png" alt="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-section pt-6 w-full h-screen">
                        <div className="bg-overlay">
                            <img src="./assets/images/bg-1.jpg" className="img-1 w-full h-full object-cover" alt="Next-Gen SOC-as-a-Service, CTEM, Data Security Management, Business Continuity, Risk Management" />
                        </div>
                        <div className="a-banner-content">
                            <div className="container">
                                <div className="row align-items-center justify-between">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="w-1/2 p-8 text-white b-content">
                                            <h2 className="text-4xl font-bold mb-4 text-white wow fadeInLeft">Proactive Cyber Defence, Powered by Intelligence. Secure Your Future with Adroinnate. 111</h2>
                                            <p className="mb-6 text-white wow fadeInLeft">Adroinnate delivers advanced Managed Security Services, including Next-Gen SOC-as-a-Service, Continuous Threat Exposure Management (CTEM), and Data Security Management, protecting your critical assets from evolving threats.
                                                Leverage our expertise to minimize risk and ensure business continuity.</p>
                                            <a className="white-btn text-decoration-none wow fadeInLeft" href="about.html">
                                                Request a Demo
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="w-1/2">
                                            <img className="wow fadeInRight" src="./assets/images/hero-2.png" alt="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Our Comprehensive Security Solutions */}
            <div className="a-services-tabs section-space">
                <div className="container-fluid container-fluid-space mt-5">
                    <div className="row">
                        <div className="s-title text-center wow fadeInUp">
                            <h2 className="h2">Our Comprehensive Security Solutions <span>Protecting Your Digital Assets</span></h2>
                        </div>
                    </div>
                    <div className="row security-box mt-5">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <div className="col-md-12">
                                <Nav variant="pills" className="securitytabs wow fadeInUp">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Next-Gen Managed SOC-as-a-Service</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Continuous Threat Exposure Management (CTEM)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Data Security Management</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="col-md-12">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="row">
                                            <div className="app-details wow fadeInUp">
                                                <p>Gain 24/7 visibility and rapid response to security threats with our Next-Gen Managed SOC-as-a-Service. We combine advanced AI-driven analytics with expert human oversight to provide continuous monitoring and proactive
                                                    threat mitigation.</p>
                                            </div>
                                        </div>
                                        <div className="row g-3 mt-3 wow fadeInUp">
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/cyberattack.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>
                                                                Continuous Logging & Monitoring
                                                            </h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Real-time analysis of log data to detect anomalies and potential threats.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/processor.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>
                                                                Threat Intelligence
                                                            </h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Leveraging global threat feeds to identify and block known malicious actors.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/threat-detection.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>
                                                                Advanced Threat Detection & Response
                                                            </h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Utilizing behavioural analysis and machine learning to detect and respond to sophisticated attacks.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/security-system.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>
                                                                Security Orchestration, Automation, and Response (SOAR)
                                                            </h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Automating repetitive security tasks to improve efficiency and reduce response times.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/forensics.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>
                                                                Digital Forensics & Incident Response (DFIR)</h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Conducting thorough investigations and providing rapid incident containment and recovery.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/file-management.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>Compliance Management</h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Ensuring adherence to industry regulations and standards through comprehensive compliance reporting and audits.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" text-center mt-5">
                                            <a className="default-btn text-decoration-none" href="#">Learn More</a>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="row">
                                            <div className="app-details">
                                                <p>Proactively reduce your attack surface and mitigate vulnerabilities with our CTEM approach. We provide continuous vulnerability scanning, risk prioritization, and actionable remediation guidance.</p>
                                            </div>
                                        </div>
                                        <div className="row g-3 mt-3">
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/data-pipeline.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>
                                                                Vulnerability Prioritization
                                                            </h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Focusing on critical vulnerabilities that pose the greatest risk to your organization.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/1.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>
                                                                Attack Surface Management
                                                            </h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Identifying and securing all potential entry points to your network.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/security-system.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>
                                                                Threat Modelling
                                                            </h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Simulating potential attack scenarios to identify and mitigate vulnerabilities.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/munging.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>
                                                                Remediation Guidance
                                                            </h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Providing clear and actionable steps to address identified vulnerabilities.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className=" text-center mt-5">
                                            <a className="default-btn text-decoration-none" href="#">Learn More</a>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="row">
                                            <div className="app-details">
                                                <p>Protect your sensitive data from unauthorized access and breaches with our robust Data Security Management solutions. We implement comprehensive data loss prevention, encryption, and access control measures.</p>
                                            </div>
                                        </div>
                                        <div className="row g-3 mt-3">
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/data-protection.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>
                                                                Data Loss Prevention (DLP)
                                                            </h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Preventing sensitive data from leaving your network without authorization.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/encrypted.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>
                                                                Encryption
                                                            </h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Securing data at rest and in transit with strong encryption algorithms.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/access-control.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>Access Control</h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Implementing strict access controls to ensure only authorized users can access sensitive data.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="service-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="./assets/images/icons/governance.png" alt="Service Icon" />
                                                    </div>
                                                    <div className="service-title-box">
                                                        <div className="service-title">
                                                            <h3>Data Governance</h3>
                                                        </div>
                                                        <div className="service-btn">
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>Establishing policies and procedures to ensure data integrity and compliance.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" text-center mt-5">
                                            <a className="default-btn text-decoration-none" href="#">Learn More</a>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </div>
            </div>


            <div className="a-partner-section section-space">
                <div className="container-fluid container-fluid-space mt-5">

                    <div className="row what-we-do">
                        <div className="col-lg-6">
                            <div className="what-we-do-image">
                                <div className="what-we-do-img-1">
                                    <figure className="image-anime wow fadeInUp">
                                        <img src="./assets/images/about-1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="what-we-do-img-2">
                                    <figure className="image-anime wow fadeInUp">
                                        <img src="./assets/images/projects-5.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="what-we-do-content">
                                <div className="s-title wow fadeInUp">
                                    <h2 className="h2 ">Securing Your Industry
                                        <span>Tailored Security for Diverse Sectors</span>
                                    </h2>
                                </div>
                                <div className="wow fadeInUp mt-3 mb-3">
                                    <p>Adroinnate has extensive experience securing organizations across diverse industries. We understand the unique security challenges of your sector and provide tailored solutions to meet your specific needs.</p>

                                </div>
                                <div className="what-we-list wow fadeInUp">
                                    <div className="what-we-item">
                                        <div className="icon-box">
                                            <img src="./assets/images/icons/processor.png" alt="" />
                                        </div>
                                        <div className="what-we-item-content">
                                            <h3>Technology</h3>
                                        </div>
                                    </div>
                                    <div className="what-we-item">
                                        <div className="icon-box">
                                            <img src="./assets/images/icons/processor.png" alt="" />
                                        </div>
                                        <div className="what-we-item-content">
                                            <h3>Public Sector</h3>
                                        </div>
                                    </div>
                                    <div className="what-we-item">
                                        <div className="icon-box">
                                            <img src="./assets/images/icons/processor.png" alt="" />
                                        </div>
                                        <div className="what-we-item-content">
                                            <h3>Financial Services</h3>
                                        </div>
                                    </div>
                                    <div className="what-we-item">
                                        <div className="icon-box">
                                            <img src="./assets/images/icons/processor.png" alt="" />
                                        </div>
                                        <div className="what-we-item-content">
                                            <h3>Healthcare</h3>
                                        </div>
                                    </div>
                                    <div className="what-we-item">
                                        <div className="icon-box">
                                            <img src="./assets/images/icons/processor.png" alt="" />
                                        </div>
                                        <div className="what-we-item-content">
                                            <h3>Energy</h3>
                                        </div>
                                    </div>
                                    <div className="what-we-item">
                                        <div className="icon-box">
                                            <img src="./assets/images/icons/processor.png" alt="" />
                                        </div>
                                        <div className="what-we-item-content">
                                            <h3>Retail</h3>
                                        </div>
                                    </div>
                                    <div className="what-we-item">
                                        <div className="icon-box">
                                            <img src="./assets/images/icons/processor.png" alt="" />
                                        </div>
                                        <div className="what-we-item-content">
                                            <h3>Local and Regional Government</h3>
                                        </div>
                                    </div>
                                    <div className="what-we-item">
                                        <div className="icon-box">
                                            <img src="./assets/images/icons/processor.png" alt="" />
                                        </div>
                                        <div className="what-we-item-content">
                                            <h3>Manufacturing</h3>
                                        </div>
                                    </div>
                                    <div className="what-we-item">
                                        <div className="icon-box">
                                            <img src="./assets/images/icons/processor.png" alt="" />
                                        </div>
                                        <div className="what-we-item-content">
                                            <h3>Media</h3>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="a-partner-ecosection">
                <div className="container-fluid container-fluid-space">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="s-title mb-3 text-center wow fadeInUp">
                                <h2 className="h2">Our Powerful Partner Ecosystem
                                    <span>Enhancing Your Security Posture</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row partner-sub-box">
                        <div className="col-lg-4">
                            <div className="s-title wow fadeInUp">
                                <h2 className="h2">Strategic
                                    <span>Partnerships</span>
                                </h2>
                            </div>
                            <div className="about-content wow fadeInUp">
                                <p>We collaborate with industry leaders to deliver comprehensive security solutions and expand our service capabilities.</p>
                            </div>
                            <a className="default-btn text-decoration-none wow fadeInUp" href="#">Become a Partner</a>
                        </div>
                        <div className="col-lg-8">
                            <div className="p-logos wow fadeInUp">
                                <div className="p-logo">
                                    <img src="./assets/images/logo/Google.png" alt="" />
                                </div>
                                <div className="p-logo">
                                    <img src="./assets/images/logo/AWS.png" alt="" />
                                </div>
                                <div className="p-logo">
                                    <img src="./assets/images/logo/Apple.jpeg" alt="" />
                                </div>
                                <div className="p-logo">
                                    <img src="./assets/images/logo/Microsoft.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row partner-sub-box">
                        <div className="col-lg-4">
                            <div className="s-title wow fadeInUp">
                                <h2 className="h2">Technology
                                    <span>Partnerships</span>
                                </h2>
                            </div>
                            <div className="about-content wow fadeInUp">
                                <p>Leveraging cutting-edge technologies from our trusted technology partners to enhance your security posture and provide advanced threat detection and response.</p>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="p-logos wow fadeInUp">
                                <div className="p-logo">
                                    <img src="./assets/images/logo/Google.png" alt="" />
                                </div>
                                <div className="p-logo">
                                    <img src="./assets/images/logo/AWS.png" alt="" />
                                </div>
                                <div className="p-logo">
                                    <img src="./assets/images/logo/Apple.jpeg" alt="" />
                                </div>
                                <div className="p-logo">
                                    <img src="./assets/images/logo/Microsoft.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row partner-sub-box">
                        <div className="col-lg-4">
                            <div className="s-title wow fadeInUp">
                                <h2 className="h2">Compliance
                                    <span>Partnerships</span>
                                </h2>
                            </div>
                            <div className="about-content wow fadeInUp">
                                <p>Streamlining compliance with industry-leading platforms like Vanta, simplifying security audits and ensuring adherence to regulatory requirements.</p>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="p-logos wow fadeInUp">
                                <div className="p-logo">
                                    <img src="./assets/images/logo/Google.png" alt="" />
                                </div>
                                <div className="p-logo">
                                    <img src="./assets/images/logo/AWS.png" alt="" />
                                </div>
                                <div className="p-logo">
                                    <img src="./assets/images/logo/Apple.jpeg" alt="" />
                                </div>
                                <div className="p-logo">
                                    <img src="./assets/images/logo/Microsoft.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-area pb-75">
                <div className="container-fluid container-fluid-space">
                    <div className="s-title full-width-title wow fadeInUp">

                        <h3 className="h3">Why Choose Adroinnate?<span>Your Trusted Security Partner</span></h3>
                    </div>
                    <div className="row align-items-center" data-cue="slideInUp">
                        <div className="col-lg-6">
                            <div className="about-image wow fadeInleft">
                                <div className="image-1">
                                    <img src="./assets/images/education-2.jpg" alt="about-image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-section-content wow fadeInRight">
                                <div className="content-card d-flex align-items-center">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <g clipPath="url(#clip0_179_4)">
                                                <path
                                                    d="M15 20C14.0111 20 13.0444 19.7068 12.2221 19.1574C11.3999 18.6079 10.759 17.8271 10.3806 16.9134C10.0022 15.9998 9.90315 14.9945 10.0961 14.0246C10.289 13.0546 10.7652 12.1637 11.4645 11.4645C12.1637 10.7652 13.0546 10.289 14.0245 10.0961C14.9945 9.90315 15.9998 10.0022 16.9134 10.3806C17.827 10.759 18.6079 11.3999 19.1573 12.2222C19.7068 13.0444 20 14.0111 20 15C20 16.3261 19.4732 17.5979 18.5355 18.5355C17.5979 19.4732 16.3261 20 15 20ZM15 12.5C14.5055 12.5 14.0222 12.6466 13.6111 12.9213C13.2 13.196 12.8795 13.5865 12.6903 14.0433C12.5011 14.5001 12.4516 15.0028 12.548 15.4877C12.6445 15.9727 12.8826 16.4181 13.2322 16.7678C13.5819 17.1174 14.0273 17.3555 14.5123 17.452C14.9972 17.5484 15.4999 17.4989 15.9567 17.3097C16.4135 17.1205 16.804 16.8001 17.0787 16.3889C17.3534 15.9778 17.5 15.4945 17.5 15C17.5 14.337 17.2366 13.7011 16.7678 13.2322C16.2989 12.7634 15.663 12.5 15 12.5ZM22.5 28.75C22.5 26.7609 21.7098 24.8532 20.3033 23.4467C18.8968 22.0402 16.9891 21.25 15 21.25C13.0109 21.25 11.1032 22.0402 9.6967 23.4467C8.29018 24.8532 7.5 26.7609 7.5 28.75C7.5 29.0815 7.6317 29.3995 7.86612 29.6339C8.10054 29.8683 8.41848 30 8.75 30C9.08152 30 9.39946 29.8683 9.63388 29.6339C9.8683 29.3995 10 29.0815 10 28.75C10 27.4239 10.5268 26.1522 11.4645 25.2145C12.4021 24.2768 13.6739 23.75 15 23.75C16.3261 23.75 17.5979 24.2768 18.5355 25.2145C19.4732 26.1522 20 27.4239 20 28.75C20 29.0815 20.1317 29.3995 20.3661 29.6339C20.6005 29.8683 20.9185 30 21.25 30C21.5815 30 21.8995 29.8683 22.1339 29.6339C22.3683 29.3995 22.5 29.0815 22.5 28.75ZM22.5 10C21.5111 10 20.5444 9.70676 19.7221 9.15735C18.8999 8.60794 18.259 7.82705 17.8806 6.91342C17.5022 5.99979 17.4031 4.99446 17.5961 4.02455C17.789 3.05465 18.2652 2.16373 18.9645 1.46447C19.6637 0.765206 20.5546 0.289002 21.5245 0.0960758C22.4945 -0.0968503 23.4998 0.00216641 24.4134 0.380605C25.327 0.759043 26.1079 1.39991 26.6573 2.22215C27.2068 3.0444 27.5 4.0111 27.5 5C27.5 6.32609 26.9732 7.59785 26.0355 8.53554C25.0979 9.47322 23.8261 10 22.5 10ZM22.5 2.5C22.0055 2.5 21.5222 2.64662 21.1111 2.92133C20.7 3.19603 20.3795 3.58648 20.1903 4.04329C20.0011 4.50011 19.9516 5.00278 20.048 5.48773C20.1445 5.97268 20.3826 6.41814 20.7322 6.76777C21.0819 7.1174 21.5273 7.3555 22.0123 7.45197C22.4972 7.54843 22.9999 7.49892 23.4567 7.3097C23.9135 7.12048 24.304 6.80005 24.5787 6.38893C24.8534 5.9778 25 5.49446 25 5C25 4.33696 24.7366 3.70108 24.2678 3.23224C23.7989 2.76339 23.163 2.5 22.5 2.5ZM30 18.75C29.998 16.7615 29.2072 14.855 27.8011 13.4489C26.395 12.0428 24.4885 11.252 22.5 11.25C22.1685 11.25 21.8505 11.3817 21.6161 11.6161C21.3817 11.8505 21.25 12.1685 21.25 12.5C21.25 12.8315 21.3817 13.1495 21.6161 13.3839C21.8505 13.6183 22.1685 13.75 22.5 13.75C23.8261 13.75 25.0979 14.2768 26.0355 15.2145C26.9732 16.1521 27.5 17.4239 27.5 18.75C27.5 19.0815 27.6317 19.3995 27.8661 19.6339C28.1005 19.8683 28.4185 20 28.75 20C29.0815 20 29.3995 19.8683 29.6339 19.6339C29.8683 19.3995 30 19.0815 30 18.75ZM7.5 10C6.51109 10 5.54439 9.70676 4.72215 9.15735C3.8999 8.60794 3.25904 7.82705 2.8806 6.91342C2.50216 5.99979 2.40315 4.99446 2.59607 4.02455C2.789 3.05465 3.2652 2.16373 3.96447 1.46447C4.66373 0.765206 5.55464 0.289002 6.52455 0.0960758C7.49445 -0.0968503 8.49979 0.00216641 9.41342 0.380605C10.327 0.759043 11.1079 1.39991 11.6573 2.22215C12.2068 3.0444 12.5 4.0111 12.5 5C12.5 6.32609 11.9732 7.59785 11.0355 8.53554C10.0979 9.47322 8.82608 10 7.5 10ZM7.5 2.5C7.00555 2.5 6.5222 2.64662 6.11107 2.92133C5.69995 3.19603 5.37952 3.58648 5.1903 4.04329C5.00108 4.50011 4.95157 5.00278 5.04804 5.48773C5.1445 5.97268 5.3826 6.41814 5.73223 6.76777C6.08186 7.1174 6.52732 7.3555 7.01227 7.45197C7.49723 7.54843 7.99989 7.49892 8.45671 7.3097C8.91352 7.12048 9.30397 6.80005 9.57867 6.38893C9.85338 5.9778 10 5.49446 10 5C10 4.33696 9.73661 3.70108 9.26777 3.23224C8.79893 2.76339 8.16304 2.5 7.5 2.5ZM2.5 18.75C2.5 17.4239 3.02678 16.1521 3.96447 15.2145C4.90215 14.2768 6.17392 13.75 7.5 13.75C7.83152 13.75 8.14946 13.6183 8.38388 13.3839C8.6183 13.1495 8.75 12.8315 8.75 12.5C8.75 12.1685 8.6183 11.8505 8.38388 11.6161C8.14946 11.3817 7.83152 11.25 7.5 11.25C5.51149 11.252 3.60498 12.0428 2.19889 13.4489C0.792799 14.855 0.00198554 16.7615 0 18.75C0 19.0815 0.131696 19.3995 0.366117 19.6339C0.600537 19.8683 0.918479 20 1.25 20C1.58152 20 1.89946 19.8683 2.13388 19.6339C2.3683 19.3995 2.5 19.0815 2.5 18.75Z"
                                                    fill="black"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h3>Proactive Threat Intelligence</h3>
                                        <p>Stay ahead of emerging threats with our advanced threat intelligence capabilities, providing early warning and proactive defence.</p>
                                    </div>
                                </div>
                                <div className="content-card d-flex align-items-center">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <g clipPath="url(#clip0_179_2)">
                                                <path
                                                    d="M25 13.75C25 14.4412 24.44 15 23.75 15C23.06 15 22.5 14.4412 22.5 13.75C22.5 10.3038 19.6963 7.5 16.25 7.5C15.56 7.5 15 6.94125 15 6.25C15 5.55875 15.56 5 16.25 5C21.075 5 25 8.92625 25 13.75ZM17.5 13.75C17.5 14.4412 18.06 15 18.75 15C19.44 15 20 14.4412 20 13.75C20 11.6825 18.3175 10 16.25 10C15.56 10 15 10.5588 15 11.25C15 11.9412 15.56 12.5 16.25 12.5C16.94 12.5 17.5 13.06 17.5 13.75ZM16.25 0C15.56 0 15 0.55875 15 1.25C15 1.94125 15.56 2.5 16.25 2.5C22.4525 2.5 27.5 7.54625 27.5 13.75C27.5 14.4412 28.06 15 28.75 15C29.44 15 30 14.4412 30 13.75C30 6.16875 23.8313 0 16.25 0ZM20.3075 22.9387C20.9975 23.6287 21.3338 24.58 21.2325 25.5513C21.1288 26.5325 20.5938 27.4037 19.7638 27.9437C17.65 29.3175 15.2325 29.9875 12.8275 29.9875C9.51 29.9875 6.21251 28.7137 3.75001 26.2512C-0.498745 22.0037 -1.21124 15.2687 2.05751 10.235C2.59626 9.40625 3.46751 8.87 4.44876 8.7675C5.41876 8.6625 6.37251 9.00125 7.06251 9.69125L12.8013 15.43L14.1163 14.115C14.605 13.6262 15.395 13.6262 15.8838 14.115C16.3725 14.6038 16.3725 15.3938 15.8838 15.8825L14.5688 17.1975L20.3075 22.9363V22.9387ZM18.54 24.7062L5.29376 11.46C5.12001 11.2863 4.92376 11.25 4.78751 11.25C4.47126 11.25 4.28 11.4025 4.15376 11.5963C1.52376 15.645 2.09751 21.0638 5.51626 24.4825C8.93501 27.9013 14.355 28.4737 18.4013 25.8463C18.5963 25.72 18.7213 25.5175 18.745 25.29C18.7588 25.1625 18.7513 24.9162 18.54 24.7062Z"
                                                    fill="#0C0B0B"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h3>24/7 Expert Monitoring</h3>
                                        <p>Our dedicated team of security experts provides continuous monitoring and response, ensuring round-the-clock protection.</p>
                                    </div>
                                </div>
                                <div className="content-card d-flex align-items-center">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <g clipPath="url(#clip0_316_14)">
                                                <path
                                                    d="M26.25 22.4999H26.2113L24.7763 11.8799C24.4638 9.38244 22.33 7.49994 19.815 7.49994H10.1863C7.67 7.49994 5.5375 9.38244 5.22625 11.8674L3.79 22.4999H3.75125C1.68375 22.4999 0.00125122 24.1824 0.00125122 26.2499V29.9999H30.0013V26.2499C30.0013 24.1824 28.3175 22.4999 26.25 22.4999ZM7.705 12.1899C7.86125 10.9412 8.92875 9.99994 10.1863 9.99994H19.815C21.0725 9.99994 22.14 10.9412 22.2975 12.2024L23.6888 22.4999H6.3125L7.705 12.1899ZM27.5 27.4999H2.5V26.2499C2.5 25.5612 3.06125 24.9999 3.75 24.9999H26.25C26.9388 24.9999 27.5 25.5612 27.5 26.2499V27.4999ZM10.185 12.4999H15V14.9999H12.37L12.0325 17.4999H9.51L10.185 12.4999ZM3.92 7.89619L0.486251 4.60869L2.21625 2.80369L5.65 6.09244L3.92 7.89619ZM8.06625 5.15619L7.39375 0.416191L9.87 0.0649414L10.5425 4.80494L8.06625 5.15619ZM21.9325 5.15619L19.4575 4.80494L20.13 0.0649414L22.605 0.416191L21.9325 5.15619ZM26.0788 7.89619L24.3488 6.09119L27.7825 2.80244L29.5125 4.60744L26.0788 7.89619Z"
                                                    fill="#0C0B0B"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h3>Customized Solutions</h3>
                                        <p>Tailored security solutions to meet your specific business needs and address your unique security challenges.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-section-content">
                                <div className="content-card d-flex align-items-center wow fadeInUp">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <g clipPath="url(#clip0_316_16)">
                                                <path
                                                    d="M13.6975 19.47C13.5025 20.13 12.815 20.5113 12.1425 20.3113C11.4513 20.105 10.7312 20 10 20C5.86375 20 2.5 23.3638 2.5 27.5V28.75C2.5 29.44 1.94125 30 1.25 30C0.55875 30 0 29.44 0 28.75V27.5C0 21.9862 4.48625 17.5 10 17.5C10.9725 17.5 11.935 17.64 12.8575 17.915C13.5188 18.1125 13.895 18.8088 13.6975 19.47ZM30 18.045V21.9012C30 26.9412 25.0338 29.3288 23.5925 29.9088C23.4425 29.9688 23.2837 29.9988 23.1262 29.9988C22.935 29.9988 22.7425 29.955 22.5475 29.8575C21.1437 29.155 16.25 26.3625 16.25 21.9012V18.045C16.25 16.4263 17.2825 14.9963 18.8188 14.485L22.7325 13.1875C22.9863 13.1038 23.265 13.1038 23.5188 13.1875L27.4312 14.485C28.9675 14.995 30 16.4263 30 18.045ZM27.5 18.045C27.5 17.505 27.1562 17.0288 26.6425 16.8588L23.125 15.6925L19.6063 16.8588C19.095 17.0288 18.75 17.5063 18.75 18.045V21.9012C18.75 24.7512 22.0375 26.7612 23.1812 27.375C24.47 26.8075 27.5 25.13 27.5 21.9012V18.045ZM17.5 7.5C17.5 11.6362 14.1362 15 10 15C5.86375 15 2.5 11.6362 2.5 7.5C2.5 3.36375 5.86375 0 10 0C14.1362 0 17.5 3.36375 17.5 7.5ZM15 7.5C15 4.7425 12.7575 2.5 10 2.5C7.2425 2.5 5 4.7425 5 7.5C5 10.2575 7.2425 12.5 10 12.5C12.7575 12.5 15 10.2575 15 7.5Z"
                                                    fill="#0C0B0B"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h3>Rapid Incident Response</h3>
                                        <p>Minimize downtime and data loss with our swift and effective incident response capabilities.</p>
                                    </div>
                                </div>
                                <div className="content-card d-flex align-items-center wow fadeInUp">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <g clipPath="url(#clip0_316_16)">
                                                <path
                                                    d="M13.6975 19.47C13.5025 20.13 12.815 20.5113 12.1425 20.3113C11.4513 20.105 10.7312 20 10 20C5.86375 20 2.5 23.3638 2.5 27.5V28.75C2.5 29.44 1.94125 30 1.25 30C0.55875 30 0 29.44 0 28.75V27.5C0 21.9862 4.48625 17.5 10 17.5C10.9725 17.5 11.935 17.64 12.8575 17.915C13.5188 18.1125 13.895 18.8088 13.6975 19.47ZM30 18.045V21.9012C30 26.9412 25.0338 29.3288 23.5925 29.9088C23.4425 29.9688 23.2837 29.9988 23.1262 29.9988C22.935 29.9988 22.7425 29.955 22.5475 29.8575C21.1437 29.155 16.25 26.3625 16.25 21.9012V18.045C16.25 16.4263 17.2825 14.9963 18.8188 14.485L22.7325 13.1875C22.9863 13.1038 23.265 13.1038 23.5188 13.1875L27.4312 14.485C28.9675 14.995 30 16.4263 30 18.045ZM27.5 18.045C27.5 17.505 27.1562 17.0288 26.6425 16.8588L23.125 15.6925L19.6063 16.8588C19.095 17.0288 18.75 17.5063 18.75 18.045V21.9012C18.75 24.7512 22.0375 26.7612 23.1812 27.375C24.47 26.8075 27.5 25.13 27.5 21.9012V18.045ZM17.5 7.5C17.5 11.6362 14.1362 15 10 15C5.86375 15 2.5 11.6362 2.5 7.5C2.5 3.36375 5.86375 0 10 0C14.1362 0 17.5 3.36375 17.5 7.5ZM15 7.5C15 4.7425 12.7575 2.5 10 2.5C7.2425 2.5 5 4.7425 5 7.5C5 10.2575 7.2425 12.5 10 12.5C12.7575 12.5 15 10.2575 15 7.5Z"
                                                    fill="#0C0B0B"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h3>Proven Expertise</h3>
                                        <p>Benefit from our deep industry knowledge and experience, ensuring reliable and effective security solutions.</p>
                                    </div>
                                </div>
                                <div className="content-card d-flex align-items-center wow fadeInUp">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <g clipPath="url(#clip0_316_16)">
                                                <path
                                                    d="M13.6975 19.47C13.5025 20.13 12.815 20.5113 12.1425 20.3113C11.4513 20.105 10.7312 20 10 20C5.86375 20 2.5 23.3638 2.5 27.5V28.75C2.5 29.44 1.94125 30 1.25 30C0.55875 30 0 29.44 0 28.75V27.5C0 21.9862 4.48625 17.5 10 17.5C10.9725 17.5 11.935 17.64 12.8575 17.915C13.5188 18.1125 13.895 18.8088 13.6975 19.47ZM30 18.045V21.9012C30 26.9412 25.0338 29.3288 23.5925 29.9088C23.4425 29.9688 23.2837 29.9988 23.1262 29.9988C22.935 29.9988 22.7425 29.955 22.5475 29.8575C21.1437 29.155 16.25 26.3625 16.25 21.9012V18.045C16.25 16.4263 17.2825 14.9963 18.8188 14.485L22.7325 13.1875C22.9863 13.1038 23.265 13.1038 23.5188 13.1875L27.4312 14.485C28.9675 14.995 30 16.4263 30 18.045ZM27.5 18.045C27.5 17.505 27.1562 17.0288 26.6425 16.8588L23.125 15.6925L19.6063 16.8588C19.095 17.0288 18.75 17.5063 18.75 18.045V21.9012C18.75 24.7512 22.0375 26.7612 23.1812 27.375C24.47 26.8075 27.5 25.13 27.5 21.9012V18.045ZM17.5 7.5C17.5 11.6362 14.1362 15 10 15C5.86375 15 2.5 11.6362 2.5 7.5C2.5 3.36375 5.86375 0 10 0C14.1362 0 17.5 3.36375 17.5 7.5ZM15 7.5C15 4.7425 12.7575 2.5 10 2.5C7.2425 2.5 5 4.7425 5 7.5C5 10.2575 7.2425 12.5 10 12.5C12.7575 12.5 15 10.2575 15 7.5Z"
                                                    fill="#0C0B0B"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h3>Comprehensive Compliance</h3>
                                        <p>Simplify compliance with our integrated security and compliance solutions, reducing the burden of regulatory requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image wow fadeInUp">
                                <div className="image-1">
                                    <img src="./assets/images/government-1.jpg" alt="about-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-testimonials">
                <div className="container-fluid container-fluid-space">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="s-title wow fadeInUp">
                                <h4 className="sub-title">testimonials</h4>
                                <h3 className="h3">What Our Clients Say<span>Real-World Security Success</span></h3>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="testimonial-box parallaxie">
                                <div className="t-overlay">
                                    <img src="./assets/images/industries/technology-3.jpg" alt="" />
                                </div>
                                <div className="testimonial-video-button">
                                    <a href="https://www.youtube.com/" target="_blank" className="popup-video" data-cursor-text="Play">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                                            <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                                        </svg>
                                    </a>
                                    <h3>Watch video</h3>
                                </div>
                                <div className="testimonial-slider-box">
                                    <div className="testimonial-slider wow fadeInUp">
                                        <Swiper
                                            modules={[Pagination]}
                                            spaceBetween={30}
                                            slidesPerView={1}>
                                            <SwiperSlide>
                                                <div className="testimonial-item">
                                                    <div className="testimonial-header">
                                                        <div className="testimonial-company-logo">
                                                            <img src="./assets/images/partner-9.png" alt="" />
                                                        </div>
                                                        <div className="testimonial-quote">
                                                            <img src="./assets/images/icons/testimonial-quote.svg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>"This cybersecurity service has been a game-changer for my business. The Basic Plan keeps my data secure, and I no longer worry about online threats. The setup was simple, and the team provided excellent support. Highly recommend!"</p>
                                                        <p>"I love how easy it is to use this service. It's affordable and gives me the confidence to work online without fear of breaches. A must-have for anyone who values their online safety!"</p>
                                                    </div>
                                                    <div className="testimonial-body">
                                                        <div className="author-image">
                                                            <figure className="image-anime">
                                                                <img src="./assets/images/team-4.jpg" alt="" />
                                                            </figure>
                                                        </div>
                                                        <div className="author-content">
                                                            <h3>Rahul P.</h3>
                                                            <p>IT manager</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-item">
                                                    <div className="testimonial-header">
                                                        <div className="testimonial-company-logo">
                                                            <img src="./assets/images/partner-6.png" alt="" />
                                                        </div>
                                                        <div className="testimonial-quote">
                                                            <img src="./assets/images/icons/testimonial-quote.svg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>"This cybersecurity service has been a game-changer for my business. The Basic Plan keeps my data secure, and I no longer worry about online threats. The setup was simple, and the team provided excellent support. Highly recommend!"</p>
                                                        <p>"I love how easy it is to use this service. It's affordable and gives me the confidence to work online without fear of breaches. A must-have for anyone who values their online safety!"</p>
                                                    </div>
                                                    <div className="testimonial-body">
                                                        <div className="author-image">
                                                            <figure className="image-anime">
                                                                <img src="./assets/images/team-4.jpg" alt="" />
                                                            </figure>
                                                        </div>
                                                        <div className="author-content">
                                                            <h3>Rahul P.</h3>
                                                            <p>IT manager</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                                <div className="testimonial-contact-info wow fadeInUp">
                                    <div className="testimonial-contact-btn">
                                        <a className="default-btn text-decoration-none" href="about.html">
                                            Know More
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-box">
                <div className="py-5">
                    <div className="container">
                        <div className="bg-light rounded p-5 wow fadeInUp">
                            <div className="mb-4 text-center">
                                <h2 className="fw-bold">Book a Call with a Security Expert</h2>
                            </div>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Phone" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <textarea className="form-control" rows={4} placeholder="Enter Your Comments"></textarea>
                                </div>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" id="saveInfo" />
                                    <label className="form-check-label" htmlFor="saveInfo">
                                        Save my name, email, and website in this browser for the next time I
                                        comment.
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="btn btn-primary">
                                        Send A Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="main-footer">
                <div className="fg-overlay">
                <img src="./assets/images/footer-bg.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-header">
                                <div className="footer-logo">
                                    <img src="./assets/images/logo.png" alt="" />
                                </div>                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="footer-links footer-quick-links">
                                <h3>Quick link</h3>
                                <ul>
                                    <li><a href="index.html">home</a></li>
                                    <li><a href="about.html">about us</a></li>
                                    <li><a href="services.html">services</a></li>
                                    <li><a href="blog-single.html">blog</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="footer-links">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="service-single.html">Threat detection</a></li>
                                    <li><a href="service-single.html">Endpoint security</a></li>
                                    <li><a href="service-single.html">Network defense</a></li>
                                    <li><a href="service-single.html">Data encryption</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="footer-links">
                                <h3>Support</h3>
                                <ul>
                                    <li><a href="#">Help</a></li>
                                    <li><a href="#">Term's & condition </a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="footer-links">
                                <h3>Contact</h3>
                                <ul>
                                    <li><a href="tel:+123456789">+123 456 789</a></li>
                                    <li><a href="mailto:info@domain.com">info@domain.com</a></li>
                                    <li>123 High Street India</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="footer-copyright-text">
                                    <p>Copyright © 2025 All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}
