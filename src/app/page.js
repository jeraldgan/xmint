import Sprites from "@/app/_components/sprites";
import Piano from "@/app/_components/piano";
import Social from "@/app/_components/social";
import Projects from "@/app/_components/projects";

export default function Home() {
  const code = `let location = 'Kuala Lumpur, MY'
let hobbies = [
   'Bouldering',
   'Designing',
   'Traveling',
]`;

  return (
    <>
      <main
        className={`relative antialiased tracking-wide text-lg cursor-default min-h-screen selection:bg-gray-500/30`}
      >
        <div className="max-w-[432px] flex sm:max-w-screen-sm md:max-w-[720px] z-0 md:space-x-8 relative md:pl-10 md:pr-[3.75rem] sm:px-[2.875rem] px-4 mx-auto pb-[12rem] sm:pb-[32.25rem]">
          <div className="relative md:w-10">
            <Sprites />
          </div>

          <div className="flex-1 w-full">
            {/* Hero */}
            <div className="flex justify-center items-center h-[16rem] sm:h-[25rem]">
              <h1 className="text-7xl sm:text-8xl font-heading">Gideon</h1>
            </div>

            {/* Current */}
            <h2 className="sr-only">About</h2>
            <div className="px-4 pb-5 space-y-5 sm:px-5">
              <p>
                I&apos;m a product designer from Malaysia with 7 years of
                experience as a frontend engineer.
              </p>
              <h2 className="sr-only">Current</h2>
              <p>
                Currently designing at Airfoil, a design and product studio that
                collaborates with early-stage founders to bring their ideas to
                life.
              </p>
              <p>Here are some of my recent works:</p>
            </div>

            <Projects />

            {/* Previous */}
            <h2 className="sr-only">Previous</h2>
            <div className="px-4 pt-8 pb-5 space-y-5 sm:px-5 sm:pt-10">
              <p>
                Before that, I worked as a freelance frontend engineer for 7
                years, collaborating with SMEs and the government sector.
              </p>
              <p>Here&apos;s what I&apos;ve been up to nowadays:</p>
            </div>

            <div className="flex px-1">
              <div className="w-[0.3125rem] shrink-0 flex flex-col">
                <div className="w-full h-[0.3125rem] flex justify-end items-end">
                  <div className="h-[0.15625rem] w-[0.15625rem] bg-primary-300"></div>
                </div>
                <div className="flex h-full">
                  <div className="w-1/2 h-full bg-white"></div>
                  <div className="w-1/2 h-full bg-black"></div>
                </div>
                <div className="w-full h-[0.3125rem] flex justify-end items-start">
                  <div className="h-[0.15625rem] w-[0.15625rem] bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <div className="w-full h-[0.15625rem] bg-primary-300"></div>
                <div className="w-full h-[0.15625rem] bg-black"></div>
                {/* Content */}
                <div className="flex-1 py-4 pl-2 pr-4 overflow-x-scroll text-white bg-primary-900 sm:py-5 sm:pr-5">
                  <pre>
                    <code>
                      {code.split("\n").map((line, index) => (
                        <span key={index}>{line}</span>
                      ))}
                    </code>
                  </pre>
                </div>
                <div className="w-full h-[0.15625rem] bg-black"></div>
                <div className="w-full h-[0.15625rem] bg-white"></div>
              </div>
              <div className="w-[0.3125rem] shrink-0 flex flex-col">
                <div className="w-full h-[0.3125rem] flex justify-start items-end">
                  <div className="h-[0.15625rem] w-[0.15625rem] bg-primary-300"></div>
                </div>
                <div className="flex w-full h-full">
                  <div className="w-1/2 h-full bg-black"></div>
                  <div className="w-1/2 h-full bg-white"></div>
                </div>
                <div className="w-full h-[0.3125rem] flex justify-start items-start">
                  <div className="h-[0.15625rem] w-[0.15625rem] bg-white"></div>
                </div>
              </div>
            </div>

            {/* Growing up */}
            <h2 className="sr-only">Growing up</h2>
            <div className="px-4 pt-8 pb-5 space-y-5 sm:px-5 sm:pt-10">
              <p>
                Growing up, I had a passion for classical music and aspired to
                become a pianist.
              </p>
              <p>
                Today, I&apos;ve become a designer instead. I still enjoy
                playing the piano occasionally.
              </p>
            </div>

            <Piano />

            <h2 className="sr-only">Let&apos;s connect</h2>
            <div className="px-4 pt-8 space-y-8 sm:space-y-10 sm:h-[3.5rem] sm:px-5 sm:pt-10">
              <p>
                Thanks for visiting! If you want to chat, or just want to see
                what I&apos;m up to, here are some ways to get in touch. Talk
                soon!
              </p>

              <div className="flex justify-between">
                <Social />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[8rem] sm:h-[12.5rem] sm:opacity-60 w-full z-0 bg-repeat-x bg-[length:10px_240px] bg-[url('/images/bg-gradient.svg')] pointer-events-none"></div>

        <div
          id="crt"
          className="fixed inset-0 z-50 w-full h-screen pointer-events-none mix-blend-overlay crt-line opacity-30"
        ></div>
      </main>
    </>
  );
}
