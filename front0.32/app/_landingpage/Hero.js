export const Hero = () => (
  <div>
    <header className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-20">
        <div className="flex items-center justify-center space-x-3">
          <img
            loading="lazy"
            src="/logo2.png"
            alt="AOS"
            className="h-20 w-20"
          />
          <div className="flex items-end space-x-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-700 sm:text-5xl">
              AOS
            </h1>
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-700 sm:text-1xl"></h3>
          </div>
        </div>
        <p className="mt-4 text-base leading-7 text-slate-600">
          An secured AI solution that seamlessly harness the power of generative
          AI across your local and online files. Revolutionize your content
          creation with our All-in-One Secured Generative AI.
        </p>
        <a
          href=""
          download
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download</span>
        </a>
      </div>
    </header>
  </div>
);
