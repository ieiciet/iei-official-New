import React from 'react';

function Testimonials() {
    return (
        <section className="py-12  sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj"> Testimonials</h2>
                    </div>


                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))' }}></div>
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            {/* Testimonial 1 */}
                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-nav bg-opacity-50 backdrop-blur-sm lg:py-8 lg:px-7">
                                    <div className="flex-1">

                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-white font-pj">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-white font-pj">Leslie Alexander</p>
                                            <p className="mt-0.5 text-sm font-pj text-white">Freelance React Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-nav bg-opacity-50 backdrop-blur-sm lg:py-8 lg:px-7">
                                    <div className="flex-1">

                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-white font-pj">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-white font-pj">Leslie Alexander</p>
                                            <p className="mt-0.5 text-sm font-pj text-white">Freelance React Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-nav bg-opacity-50 backdrop-blur-sm lg:py-8 lg:px-7">
                                    <div className="flex-1">

                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-white font-pj">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-white font-pj">Leslie Alexander</p>
                                            <p className="mt-0.5 text-sm font-pj text-white">Freelance React Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
