import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-8 fixed bottom-0 left-0 right-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white">&copy; {currentYear} Michael Hayes. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer