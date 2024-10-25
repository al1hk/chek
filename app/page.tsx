import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-black">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full bg-black p-6 text-white flex justify-between items-center shadow-md">
        <nav className="space-x-6">
          <a href="#about" className="hover:text-gray-300 font-mono text-lg transition-colors duration-300">About</a>
          <a href="#projects" className="hover:text-gray-300 font-mono text-lg transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300 font-mono text-lg transition-colors duration-300">Contact</a>
          <a href="#education" className="hover:text-gray-300 font-mono text-lg transition-colors duration-300">Education</a>
        </nav>
        <div className="flex space-x-6">
          <a href="https://github.com/al1hk" className="hover:opacity-80 transition-opacity duration-300">
            <img src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt="GitHub" width={40} height={40} className="rounded-full"/>
          </a>
          <a href="https://www.linkedin.com/in/ali-hassan-16a5682b7/" className="hover:opacity-80 transition-opacity duration-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFktYAwcpeHRDdIfgnqnaVtdVm4tWaOMCtA&s" alt="LinkedIn" width={40} height={40} className="rounded-full"/>
          </a>
        </div>
      </header>

      <img id="image" className="mt-8 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300" width="250" 
     height="300" src="https://cdnvb4.haiper.ai/jobs/66cb9db64196b1fc5e01ab25/671283cbc93662b892fa036e/0.jpg" alt="eye avatar" />

      <main className="w-3/4 my-12 bg-white p-8 rounded-lg shadow-2xl">
        <section id="about" className="mb-12">
          <h1 className='text-3xl font-mono ml-3 text-center text-gray-800 leading-relaxed'>Hi! My name is Ali Hassan, a passionate Web Developer. Learning Generative AI, Web 3, and Metaverse Tech from Governor Sindh Initiative.</h1>
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-center font-mono mb-8 text-gray-800'>Skills</h2>
          <div id='skills' className='space-y-6'>
            <div>
              <h3 className='text-xl font-mono mb-2 text-gray-700'>HTML</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-black h-2.5 rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>
            <div>
              <h3 className='text-xl font-mono mb-2 text-gray-700'>CSS</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-black h-2.5 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            <div>
              <h3 className='text-xl font-mono mb-2 text-gray-700'>TypeScript</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-black h-2.5 rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>
            <div>
              <h3 className='text-xl font-mono mb-2 text-gray-700'>NextJS</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-black h-2.5 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        </section>

        <section id='education' className='font-mono mb-12'>
          <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>Education</h2>
          <div className='space-y-6'>
            <div className='text-center text-xl text-gray-700'>
              <strong>School:</strong> Happy Palace Grammar School (Computer Science)
            </div>
            <div className='text-center text-xl text-gray-700'>
              <strong>College:</strong> PECHS Govt Degree Boys College (Pre-Engineering)
            </div>
            <div className='text-center text-xl text-gray-700'>
              <strong>Courses:</strong> GIAIC
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center font-mono text-gray-800 border-b-2 border-gray-200 pb-4">Projects</h2>
          <p className='text-xl text-center font-mono mb-8 text-gray-600'>
            I have worked on several amazing projects, mostly using TypeScript. Here are some of them:
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-gray-100 text-black p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <a href="https://github.com/al1hk/TODOLIST_alihassan" className='font-mono text-xl font-bold hover:text-gray-600 transition-colors duration-300'>
                1. CLI Todo List
              </a>
            </div>
            <div className='bg-gray-100 text-black p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <a href="https://github.com/al1hk/ATM_alihassan" className='font-mono text-xl font-bold hover:text-gray-600 transition-colors duration-300'>
                2. CLI ATM
              </a>
            </div>
            <div className='bg-gray-100 text-black p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <a href="https://github.com/al1hk/simple-calculator_Ali-Hassan" className='font-mono text-xl font-bold hover:text-gray-600 transition-colors duration-300'>
                3. CLI Calculator
              </a>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-8 text-center font-mono text-gray-800">Contact Me</h2>
          <form className="space-y-6">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg text-black font-mono focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300" />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg text-black font-mono focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300" />
            <textarea name="message" rows={4} placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg text-black font-mono focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300"></textarea>
            <button type="submit" className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 font-mono transition-colors duration-300">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
}
