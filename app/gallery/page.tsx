import React from 'react'
import Image from 'next/image';

function Gallery() {
  const gallery = [
  {
    title: 'Ledger',
    img: 'https://picsum.photos/200/200',
    tags: ['React', 'N.jsext', 'PostgreSQL'],
  },
  {
    title: 'CountryManager',
    img: 'https://picsum.photos/200/200',
    tags: ['React', 'TypeScript'],
  },
  {
    title: 'Fieldwork',
    img: 'https://picsum.photos/200/200',
    tags: ['React'],
  },
  {
    title: 'Schema Notes',
    img: 'https://picsum.photos/200/200',
    tags: ['Node.js', 'PostgreSQL', 'CLI'],
  },
  {
    title: 'Schema Notes',
    img: 'https://picsum.photos/200/200',
    tags: ['Node.js', 'PostgreSQL', 'CLI'],
  },
  {
    title: 'Schema Notes',
    img: 'https://picsum.photos/200/200',
    tags: ['Node.js', 'PostgreSQL', 'CLI'],
  },
];
  return (
    <div>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-3">
        Gallery
      </h1>
      <div className="grid grid-cols-3 gap-6">

      {gallery.map((p, i) => (
        <div key={i}>

            <div>
              <div className="project-title hidden">{p.title}</div>
              <p className="project-desc">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  width="200" 
                  height="200" 
                  className="mb-3"/>
                  </p>
              <div className="tag-row">
                {p.tags.map((tag) => (
                  <span
                  key={tag}
                   className="inline-flex items-center rounded-md bg-white-400/10 mx-1 px-1 py-1 text-xs font-medium text-white inset-ring inset-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery