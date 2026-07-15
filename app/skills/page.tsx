import React from 'react'
import { SocialIcon } from 'react-social-icons'

function About() {
  return (
    <div>
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 gradient-bg bg-clip-text text-transparent">Skills &amp;  Technologies</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="skill-tag bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium w-full text-ceenter">PHP</span>
                        <span className="skill-tag bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium w-full text-ceenter">Laravel</span>
                        <span className="skill-tag bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium w-full text-ceenter">Filament</span>
                        <span className="skill-tag bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium w-full text-ceenter">LiveWire</span>
                        <span className="skill-tag bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium w-full text-ceenter">Strapi</span>
                        <span className="skill-tag bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium w-full text-ceenter">Express.js</span>
                        <span className="skill-tag bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium w-full text-ceenter">MYSQL</span>
                        <span className="skill-tag bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium w-full text-ceenter">PostgreSQL</span>
                        <span className="skill-tag bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium w-full text-ceenter">MongoDB</span>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="skill-tag bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">HTML</span>
                        <span className="skill-tag bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">CSS/SASS/SCSS</span>
                        <span className="skill-tag bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">Tailwind</span>
                        <span className="skill-tag bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">Alpine JS</span>
                        <span className="skill-tag bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">Vue/Nuxt</span>
                        <span className="skill-tag bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">React/Next</span>
                    </div>
                </div>
                
                
                
                <div>
                    <h3 className="text-xl font-semibold mb-4">Platforms & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="skill-tag bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">WordPress</span>
                        <span className="skill-tag bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">Shopify</span>
                        <span className="skill-tag bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">Magento</span>
                        <span className="skill-tag bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">AWS</span>
                        <span className="skill-tag bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">Apache</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Mobile</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="skill-tag bg-orange-100 hover:bg-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">React Native</span>
                        <span className="skill-tag bg-orange-100 hover:bg-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-medium w-full text-center">Kotlin</span>
                    </div>
                </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-2xl shadow-md flex items-start space-x-4">
                <div className="bg-rose-600 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                </div>
                <div>

                    <div>
                        <p className="text-lg font-medium mt-2">City Varsity - Multimedia Design - <span className="text-gray-500 text-sm">1999 - 2000</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About