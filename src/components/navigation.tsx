import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Navigation() {
  return (
    <>
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 p-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <Link href="/">
                <Image src="/img/logo.svg" alt="Michael Hayes"  width={64} height={42}/>
                </Link>
                <div className="hidden md:flex space-x-4 text-center">
                    <Link href="/about" className="text-gray-700 hover:text-orange-600 ">About</Link>
                    <Link href="/experience" className="text-gray-700 hover:text-orange-600">Experience</Link>
                    <Link href="/work" className="text-gray-700 hover:text-orange-600">Work</Link>
                    <Link href="/skills" className="text-gray-700 hover:text-orange-600">Skills</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-orange-600">Contact</Link>
                </div>
                
                <button  className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path x-show="!mobileMenuOpen" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        <path x-show="mobileMenuOpen" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            
            <div x-show="mobileMenuOpen"  className="md:hidden pb-4">
                <Link href="/about"  className="block py-2 text-gray-700 hover:text-orange-600">About</Link>
                <Link href="/experience"  className="block py-2 text-gray-700 hover:text-orange-600">Experience</Link>
                <Link href="/work"  className="block py-2 text-gray-700 hover:text-orange-600">Work</Link>
                <Link href="/skills"  className="block py-2 text-gray-700 hover:text-orange-600">Skills</Link>
                <Link href="/contact"  className="block py-2 text-gray-700 hover:text-orange-600">Contact</Link>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navigation