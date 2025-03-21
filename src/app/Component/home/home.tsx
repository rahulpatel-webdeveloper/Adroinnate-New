import React from 'react';
import { Tab, Nav, } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="banner-section pt-6 w-full h-screen">
                        <div className="bg-overlay">
                            <img src="./assets/images/government-3.jpg" className="img-1 w-full h-full object-cover" alt="Next-Gen SOC-as-a-Service, CTEM, Data Security Management, Business Continuity, Risk Management" />
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
                                                <span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                </svg></span> Request a Demo
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        {/* <div className="w-1/2">
                                            <img className="wow fadeInRight" src="./assets/images/hero-2.png" alt="w-full h-full object-cover" />
                                        </div> */}
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <a className="default-btn text-decoration-none" href="#"><span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                            </svg></span> Learn More</a>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="row">
                                            <div className="app-details">
                                                <p>Proactively reduce your attack surface and mitigate vulnerabilities with our CTEM approach. We provide continuous vulnerability scanning, risk prioritization, and actionable remediation guidance.</p>
                                            </div>
                                        </div>
                                        <div className="row g-3 mt-3">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <a className="default-btn text-decoration-none" href="#"><span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                            </svg></span> Learn More</a>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="row">
                                            <div className="app-details">
                                                <p>Protect your sensitive data from unauthorized access and breaches with our robust Data Security Management solutions. We implement comprehensive data loss prevention, encryption, and access control measures.</p>
                                            </div>
                                        </div>
                                        <div className="row g-3 mt-3">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            <a className="default-btn text-decoration-none" href="#"><span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                            </svg></span> Learn More</a>
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
                                        <Image src="/assets/images/about-1.jpg" alt="Industry 1" width={500} height={350} />
                                    </figure>
                                </div>
                                <div className="what-we-do-img-2">
                                    <figure className="image-anime wow fadeInUp">
                                        <Image src="/assets/images/projects-5.jpg" alt="Industry 2" width={500} height={350} />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="what-we-do-content">
                                <div className="s-title wow fadeInUp">
                                    <h2 className="h2">
                                        Securing Your Industry <span>Tailored Security for Diverse Sectors</span>
                                    </h2>
                                </div>
                                <p className="wow fadeInUp mt-3 mb-3">
                                    Adroinnate has extensive experience securing organizations across diverse industries.
                                </p>
                                <div className="what-we-list wow fadeInUp">
                                    {["Technology", "Public Sector", "Financial Services", "Healthcare", "Energy", "Retail", "Local and Regional Government", "Manufacturing", "Media"].map(
                                        (industry, idx) => (
                                            <div className="what-we-item" key={idx}>
                                                <div className="icon-box">
                                                    <Image src="/assets/images/icons/processor.png" alt={industry} width={50} height={50} />
                                                </div>
                                                <div className="what-we-item-content">
                                                    <h3>{industry}</h3>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Powerful Partner Ecosystem */}
            <div className="a-partner-ecosection">
      <div className="container-fluid container-fluid-space">
        <div className="row">
          <div className="col-lg-12">
            <div className="s-title mb-3 text-center wow fadeInUp">
              <h2 className="h2">
                Our Powerful Partner Ecosystem
                <span>Enhancing Your Security Posture</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="row partner-sub-box">
          <div className="col-lg-4">
            <div className="s-title wow fadeInUp">
              <h2 className="h2">
                Strategic <span>Partnerships</span>
              </h2>
            </div>
            <div className="about-content wow fadeInUp">
              <p>
                We collaborate with industry leaders to deliver comprehensive security solutions and expand our service capabilities.
              </p>
            </div>
            <a className="default-btn text-decoration-none wow fadeInUp" href="#">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
              </span> Become a Partner
            </a>
          </div>
          <div className="col-lg-8">
            <div className="p-logos wow fadeInUp">
              {['Google.png', 'AWS.png', 'cisco-systems9760.jpg', 'Microsoft.png'].map((logo, index) => (
                <div className="p-logo" key={index}>
                  <Image
                    src={`/assets/images/logo/${logo}`}
                    alt={logo.split('.')[0]}
                    width={120}
                    height={60}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Partnerships */}
        <div className="row partner-sub-box">
          <div className="col-lg-4">
            <div className="s-title wow fadeInUp">
              <h2 className="h2">
                Technology <span>Partnerships</span>
              </h2>
            </div>
            <div className="about-content wow fadeInUp">
              <p>
                Leveraging cutting-edge technologies from our trusted technology partners to enhance your security posture and provide advanced threat detection and response.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="p-logos wow fadeInUp">
              {['MS-SolutionsPartner-1.png', 'Okta_logo_(2023).svg.png', '1.png', 'Microsoft.png'].map((logo, index) => (
                <div className="p-logo" key={index}>
                  <Image
                    src={`/assets/images/logo/${logo}`}
                    alt={logo.split('.')[0]}
                    width={120}
                    height={60}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Partnerships */}
        <div className="row partner-sub-box">
          <div className="col-lg-4">
            <div className="s-title wow fadeInUp">
              <h2 className="h2">
                Compliance <span>Partnerships</span>
              </h2>
            </div>
            <div className="about-content wow fadeInUp">
              <p>
                Streamlining compliance with industry-leading platforms like Vanta, simplifying security audits and ensuring adherence to regulatory requirements.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="p-logos wow fadeInUp">
              {[
                { link: 'https://www.vanta.com/', logo: 'images.png' },
                { link: 'https://myaccount.google.com/intro/security-checkup', logo: 'Splunk_logo.png' },
                { logo: 'palo-alto-networks-inc-logo-vector.png' },
                { logo: 'Microsoft.png' }
              ].map(({ link, logo }, index) => (
                <div className="p-logo" key={index}>
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={`/assets/images/logo/${logo}`}
                        alt={logo.split('.')[0]}
                        width={120}
                        height={60}
                      />
                    </a>
                  ) : (
                    <Image
                      src={`/assets/images/logo/${logo}`}
                      alt={logo.split('.')[0]}
                      width={120}
                      height={60}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="about-area pb-75">
      <div className="container-fluid container-fluid-space">
        <div className="s-title full-width-title wow fadeInUp">
          <h3 className="h3">
            Why Choose Adroinnate?<span>Your Trusted Security Partner</span>
          </h3>
        </div>

        <div className="row align-items-center" data-cue="slideInUp">

          {/* Left Image */}
          <div className="col-lg-6">
            <div className="about-image wow fadeInleft">
              <div className="image-1">
                <Image
                  src="/assets/images/blog-1.jpg"
                  alt="about-image-1"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* Right Top Content */}
          <div className="col-lg-6">
            <div className="about-section-content wow fadeInRight">
              {[
                {
                  icon: 'machine-learning.png',
                  title: 'Proactive Threat Intelligence',
                  desc: 'Stay ahead of emerging threats with our advanced threat intelligence capabilities, providing early warning and proactive defence.'
                },
                {
                  icon: '24-7.png',
                  title: '24/7 Expert Monitoring',
                  desc: 'Our dedicated team of security experts provides continuous monitoring and response, ensuring round-the-clock protection.'
                },
                {
                  icon: 'laptop.png',
                  title: 'Customized Solutions',
                  desc: 'Tailored security solutions to meet your specific business needs and address your unique security challenges.'
                }
              ].map(({ icon, title, desc }, index) => (
                <div className="content-card d-flex align-items-center" key={index}>
                  <div className="icon">
                    <Image
                      src={`/assets/images/icons/${icon}`}
                      alt={title}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="content">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Bottom Content */}
          <div className="col-lg-6">
            <div className="about-section-content">
              {[
                {
                  icon: 'incident-response.png',
                  title: 'Rapid Incident Response',
                  desc: 'Minimize downtime and data loss with our swift and effective incident response capabilities.'
                },
                {
                  icon: 'customer-review.png',
                  title: 'Proven Expertise',
                  desc: 'Benefit from our deep industry knowledge and experience, ensuring reliable and effective security solutions.'
                },
                {
                  icon: 'execution.png',
                  title: 'Comprehensive Compliance',
                  desc: 'Simplify compliance with our integrated security and compliance solutions, reducing the burden of regulatory requirements.'
                }
              ].map(({ icon, title, desc }, index) => (
                <div className="content-card d-flex align-items-center wow fadeInUp" key={index}>
                  <div className="icon">
                    <Image
                      src={`/assets/images/icons/${icon}`}
                      alt={title}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="content">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div className="about-image wow fadeInUp">
              <div className="image-1">
                <Image
                  src="/assets/images/blog-3.jpg"
                  alt="about-image-2"
                  width={600}
                  height={400}
                />
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
              <h3 className="h3">What Our Clients Say <span>Real-World Security Success</span></h3>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="testimonial-box parallaxie">
              <div className="t-overlay">
                <Image
                  src="/assets/images/industries/technology-3.jpg"
                  alt="testimonial-bg"
                  width={1920}
                  height={500}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>

              <div className="testimonial-video-button">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-video"
                  data-cursor-text="Play"
                >
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
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                  >
                    {[1, 2].map((item, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="testimonial-item">
                          <div className="testimonial-header">
                            <div className="testimonial-company-logo">
                              <Image
                                src={`/assets/images/partner-${idx === 0 ? '9' : '6'}.png`}
                                alt="partner-logo"
                                width={100}
                                height={60}
                              />
                            </div>
                            <div className="testimonial-quote">
                              <Image
                                src="/assets/images/icons/testimonial-quote.svg"
                                alt="quote"
                                width={40}
                                height={40}
                              />
                            </div>
                          </div>

                          <div className="testimonial-content">
                            <p>
                              "This cybersecurity service has been a game-changer for my business. The Basic Plan keeps my data secure, and I no longer worry about online threats. The setup was simple, and the team provided excellent support. Highly recommend!"
                            </p>
                            <p>
                              "I love how easy it is to use this service. It's affordable and gives me the confidence to work online without fear of breaches. A must-have for anyone who values their online safety!"
                            </p>
                          </div>

                          <div className="testimonial-body">
                            <div className="author-image">
                              <figure className="image-anime">
                                <Image
                                  src="/assets/images/team-4.jpg"
                                  alt="Rahul P."
                                  width={60}
                                  height={60}
                                  style={{ borderRadius: '50%' }}
                                />
                              </figure>
                            </div>
                            <div className="author-content">
                              <h3>Rahul P.</h3>
                              <p>IT manager</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="testimonial-contact-info wow fadeInUp">
                <div className="testimonial-contact-btn">
                  <a className="default-btn text-decoration-none" href="/about">
                    <span className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                      </svg>
                    </span> Know More
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
            {/* contact us section */}
             <div className="contact-box">
      <div className="contact-overlay">
        <Image
          src="/assets/images/virus-protection.jpg"
          alt="virus protection"
          layout="fill"
          objectFit="cover"
          quality={90}
        />
      </div>

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
                  Save my name, email, and website in this browser for the next time I comment.
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
        </>
    );
}