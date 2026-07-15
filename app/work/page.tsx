import React from 'react'

function About() {
  return (
    <div>
        <section id="work" className="py-32 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 gradient-bg bg-clip-text  text-black">Past Work</h2>
             <div className="grid md:grid-cols-3 gap-12">
                <img src="/img/blackumbrellas_32.webp" alt="Black Umbrellas" className="rounded shadow-md hover:shadow-lg skill-tag w-full"
                    srcSet="/img/blackumbrellas.webp 300w" loading="lazy" />
                <img src="/img/faircape_32.webp" alt="Faircape Dairies" className="rounded shadow-md hover:shadow-lg skill-tag w-full"
                    srcSet="/img/faircape.webp 300w" loading="lazy" />
                <img src="/img/glacierinsights_32.webp" alt="Glacier Insights" className="rounded shadow-md hover:shadow-lg skill-tag w-full"
                    srcSet="/img/glacierinsights.webp 300w" loading="lazy" />
                <img src="/img/metamorph_32.webp" alt="Metamorph" className="rounded shadow-md hover:shadow-lg skill-tag w-full"
                    srcSet="/img/metamorph.webp 300w" loading="lazy" />
                <img src="/img/teampact_32.webp" alt="Teampact Dashboard" className="rounded shadow-md hover:shadow-lg skill-tag w-full"
                    srcSet="/img/teampact.webp 300w" loading="lazy" />
                <img src="/img/tyme_32.webp" alt="Tyme Bank" className="rounded shadow-md hover:shadow-lg skill-tag w-full"
                    srcSet="/img/tyme.webp 300w" loading="lazy" / >
             </div>
        </div>
        </section>
    </div>
  )
}

export default About