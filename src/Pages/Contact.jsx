import React from 'react';

function Contact() {
    return (

        <div className='min-h-screen bg-[#121212] sm:px-20 xl:px-36 px-10 pb-10 pt-24'>
            <section className="flex flex-col justify-center items-center py-10">
            <h1 className="text-white font-black md:text-[46px] sm:text-[30px] xs:text-[25px] text-[30px] font-sans">
            Get in touch
            </h1>
            <h1 className="sm:text-[16px] text-[12px] text-secondary uppercase tracking-wider">
                <span className='text-secondary'>We’d love to hear from you! Please fill out the form bellow.</span>
            </h1>
                <form action="#" className="space-y-8 w-full md:w-8/12">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Name</label>
                        <input type="text" id="name" className="shadow-sm  border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@chitkara.edu.in" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." />
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white bg-orange-500 rounded-xl hover:bg-orange-700">
                        Send message
                    </button>

                </form>

            </section>
        </div>


    );
}

export default Contact;
