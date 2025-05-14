'use client';

import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    {/* Updated Heading */}
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <TypeAnimation
                            sequence={[
                                'Security Engineer,',
                                2000,
                                'SOC Analyst,',
                                2000,
                                'Bug Bounty Hunter,',
                                2000,
                                'Programmer,',
                                2000,
                                'Software Developer,',
                                2000,
                                'Full-stack Developer,',
                                2000,
                                'Freelancer,',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-primary text-5xl"
                        />
                    </h1>

                    {/* Description */}
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Shreyas
                        </span>
                        . A creative Cyber Security Professional and Software Developer with years of experience in securing and developing high-performance, scalable, and responsive applications.
                    </p>

                    {/* Hire Me Button */}
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.upwork.com/freelancers/shreyass"
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Hire Me
                    </Button>
                </div>

                {/* Side Stats */}
                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            2+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            7+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            4k+
                        </h5>
                        <p className="text-muted-foreground">
                            Hours Worked
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
