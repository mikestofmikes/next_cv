import React from 'react'

function Contact() {
  
  return (
    <div>
      <section id="contact" className="py-20 bg-gray-200 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 gradient-bg bg-clip-text text-transparent">Get In Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        I'm always interested in hearing about new opportunities and collaborations. 
                        Whether you have a project in mind or just want to connect, feel free to reach out.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="bg-rose-600 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wide">Email</p>

                                <a href="mailto:info@michaelhayes.co.za?subject=whats up&body=Let's chat" className="text-lg font-medium text-rose-600 hover:text-rose-700">
                                    info@michaelhayes.co.za
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="bg-rose-600 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wide">Phone</p>
                                <a href="tel:+27848235735" className="text-lg font-medium text-rose-600 hover:text-rose-700">
                                    +27 84 823 5735
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="bg-rose-600 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wide">Location</p>
                                <p className="text-lg font-medium">Durbanville, Cape Town</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-6">References</h3>
                    <div className="space-y-4">
                        <div className="pb-4 border-b border-gray-200">
                            <p className="font-medium">Matt Cech</p>
                            <p className="text-sm text-gray-600">King James</p>
                        </div>
                        <div className="pb-4 border-b border-gray-200">
                            <p className="font-medium">Jonny Sachar</p>
                            <p className="text-sm text-gray-600">zero2one</p>
                        </div>
                        <div>
                            <p className="font-medium">Nicole Davies</p>
                            <p className="text-sm text-gray-600">Woolworths Financial Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact