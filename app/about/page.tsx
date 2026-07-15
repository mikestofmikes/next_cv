import React from 'react'
import { SocialIcon } from 'react-social-icons'

function About() {
  return (
    <div>
      <section id="about" className="py-20 bg-white ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 gradient-bg bg-clip-text text-transparent">About Me</h2>
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2   ">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        With two decades of experience in the digital landscape, I've honed my skills across fullstack development, 
                        system architecture &amp; UI/UX design. My journey has taken me from hands-on development to leadership roles, 
                        where I've built and guided teams to create exceptional digital experiences.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        I bring a wealth of expertise in modern web technologies, 
                        <span className="whitespace-nowrap">e-commerce</span> platforms like Shopify and Magento. My diverse background includes work in commercial film 
                        <span className="whitespace-nowrap">pre-production</span>, giving me a unique perspective on creative and technical problem-solving.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        <a href="https://en.wikipedia.org/wiki/Michael_Hayes_(wrestler)" target="_blank" className="text-lg font-medium text-rose-600 hover:text-rose-700">
                            Not the wrestler!
                        </a>
                    </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl shadow-xl">
                    <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
                    <div className="space-y-4">
                        <div className="flex">
                             <div className="mr-1 ">
                                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                             </div>
                             <div>
                                 <p className="text-lg font-medium">Durbanville, Cape Town</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div  className="mr-1 ">
                                <svg className="w-6 h-6 text-slate-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-lg font-medium">20+ Years</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div  className="mr-1 ">
                                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <div>

                                <p className="text-lg font-medium">
                                    <a href="mailto:info@michaelhayes.co.za?subject=whats up&body=Let's chat" className="text-lg font-medium text-rose-600 hover:text-rose-700">
                                        info@michaelhayes.co.za
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div  className="mr-1 ">
                                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-lg font-medium">
                                    <a href="tel:+27848235735" className="text-lg font-medium text-rose-600 hover:text-rose-700">
                                        +27 84 823 5735
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <a href="https://www.linkedin.com/in/michael-hayes-263588226/" className="mr-6">
                                <SocialIcon url="linkedin.com" />
                            </a>
                            <a href="https://www.instagram.com/mikestofmikes/">
                                <SocialIcon url="instagram.com" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About