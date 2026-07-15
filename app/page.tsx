import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="">
        <section id="hero" className="min-h-screen flex items-center bg-slate-900 pt-16 relative">
        <video autoPlay muted loop playsInline className=" top-0 left-0 w-full h-full object-cover absolute">
            <source src="/img/hero.mp4" type="video/mp4" />
        </video>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white absolute z-10 right-0 left-0  ">
            <div className="fade-in flex">
                <div className="mr-6">
                    <Image src="/img/profile.webp" width={128} height={128} alt="" className="w-32 h-32 hidden md:block  rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10 bg-gray-500 border-2 border-white" />
                </div>
                <div>
                    <h1 className="text-5xl md:text-7xl  mb-4">Michael Hayes</h1>
                    <p className="text-2xl md:text-3xl mb-6 text-white">Senior Fullstack Developer</p>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl text-white">
                        20 years of experience in development, UI/UX consultancy &amp; <br/>pre-production for the commercial film industry
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#contact" className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition">
                            Get In Touch
                        </a>
                        <a href="#work" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-rose-600 transition">
                            View Work
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </main>
    </>
  );
}
