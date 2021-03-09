import Head from "next/head";
// logos
import CadCAD from "../components/svg/cadcad";
import Github from "../components/svg/github";
import Discord from "../components/svg/discord";
import Twitter from "../components/svg/twitter";

export const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>
          cadCAD – A Python package for designing, testing and validating
          complex systems through simulation
        </title>
        <meta
          name="description"
          content="At its core, cadCAD is a differential games engine that supports parameter sweeping and Monte Carlo analyses and can be easily integrated with other scientific computing Python modules and data science workflows."
        />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        {/* todo */}
        <meta property="og:url" content="https://cadcad.org" />
        <meta
          property="og:title"
          content="cadCAD – A Python package for designing, testing and validating complex systems through simulation"
        />
        <meta
          property="og:description"
          content="At its core, cadCAD is a differential games engine that supports parameter sweeping and Monte Carlo analyses and can be easily integrated with other scientific computing Python modules and data science workflows."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://static.tildacdn.com/tild3562-3234-4133-a163-373862383334/facebook.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@block_science" />
        <meta
          name="twitter:title"
          content="cadCAD – A Python package for designing, testing and validating complex systems through simulation"
        />
        <meta
          name="twitter:description"
          content="At its core, cadCAD is a differential games engine that supports parameter sweeping and Monte Carlo analyses and can be easily integrated with other scientific computing Python modules and data science workflows."
        />
        <meta
          name="twitter:image"
          content="https://static.tildacdn.com/tild3562-3234-4133-a163-373862383334/facebook.png"
        />
        <link rel="canonical" href="https://cadcad.org" />
        <link rel="icon" href="/favicon.ico" />
        {/*
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
        <link href="//tilda.rentafont.com/web_fonts/webfontcss/NjcxNjlvcmRlcjU3Njg3?fonts=2575,2573,2573&amp;formats=woff2-woff-svg-ttf&amp;by_style=1&amp;by_id=1" rel="stylesheet" type="text/css" media="all">
        */}
      </Head>

      <div className="w-screen relative flex flex-col justify-center items-center">
        {/* Nav Bar */}
        <nav className="fixed w-full z-30 top-0 left-0 text-white bg-cadcad-blue">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="flex items-center">
              <a
                className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <CadCAD className="w-full my-6 h-2" />
              </a>
            </div>
            <div
              className="w-full lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 justify-between space-x-2"
              id="nav-content"
            >
              <a
                href="https://github.com/better-feedback"
                rel="noopener noreferrer"
                target="_blank"
                className="p-1 ml-auto text-white hover:text-gray-200 transition-colors duration-200 rounded-full hover:text-white focus:outline-none "
              >
                <span className="sr-only">Github</span>
                <Github className="w-full my-6 h-2" />
              </a>
              <a
                href="https://github.com/better-feedback"
                rel="noopener noreferrer"
                target="_blank"
                className="p-1 ml-auto text-white hover:text-gray-200 transition-colors duration-200 rounded-full hover:text-white focus:outline-none "
              >
                <span className="sr-only">Discord</span>
                <Discord className="w-full my-6 h-2" />
              </a>
              <a
                href="https://github.com/better-feedback"
                rel="noopener noreferrer"
                target="_blank"
                className="p-1 ml-auto text-white hover:text-gray-200 transition-colors duration-200 rounded-full hover:text-white focus:outline-none "
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="w-full my-6 h-2" />
              </a>
              <button
                id="navAction"
                className="mx-auto bg-white hover:bg-gray-200 text-gray-800 font-bold rounded lg:mt-0 ml-4 py-3 px-5 focus:outline-none focus:shadow-outline transition-colors duration-200"
              >
                Join our community
              </button>
              {/*
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                  <a className="inline-block py-2 px-4 font-bold no-underline" href="#">Active</a>
                </li>
                <li className="mr-3">
                  <a className="inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">What is it</a>
                </li>
                <li className="mr-3">
                  <a className="inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Use cases</a>
                </li>
                <li className="mr-3">
                  <a className="inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Getting started</a>
                </li>
                <li className="mr-3">
                  <a className="inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Support us</a>
                </li>
              </ul>*/}
            </div>
          </div>
        </nav>

        {/* Header */}
        <div
          className="pt-32 header-background w-full text-white text-center"
          id="header"
        >
          <div className="container px-3 mx-auto md:w-2/6 flex flex-wrap flex-col md:flex-row items-center text-center">
            <div className="flex flex-col w-full  justify-center text-center ">
              <h1 className="my-4 text-5xl font-bold leading-tight">cadCAD</h1>
              <p className="leading-normal text-xl py-4 mb-8">
                An open-source Python package that assists in the processes of
                designing, testing and validating complex systems through
                simulation.
              </p>
              <div className="flex flex-row justify-center space-x-2">
                <button className=" bg-white hover:bg-gray-200 text-gray-800 font-bold rounded lg:mt-0 ml-4 py-4 px-6 focus:outline-none focus:shadow-outline transition-colors duration-200 uppercase">
                  Try it out
                </button>
                <button
                  className=" bg-white hover:bg-gray-200 text-gray-800 font-bold rounded lg:mt-0 ml-4 py-4 px-6 focus:outline-none focus:shadow-outline transition-colors duration-200 uppercase"
                  onClick={() => {
                    window.alert("With typescript and Jest");
                  }}
                >
                  Join our community
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why? How? What?  */}
        <section className="bg-white border-b py-16">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12 bg-cadcad-blue">
            {/*<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Title
            </h1>*/}
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 rounded-t rounded-b-none overflow-hidden shadow">
                {/*<a href="#" className="flex flex-wrap no-underline hover:no-underline">*/}
                <div className="w-full font-bold text-xl text-white px-6 pb-4">
                  Why?
                </div>
                <p className="text-white text-base px-6 mb-5">
                  Given a model of a complex system, cadCAD can simulate the
                  impact that a set of actions might have on it. This helps
                  users make informed, rigorously tested decisions on how best
                  to modify or interact with the system in order to achieve
                  their goals.
                </p>
                {/*</a>*/}
              </div>
              {/*
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-start">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Action
                  </button>
                </div>
              </div>
              */}
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full font-bold text-xl text-white px-6 pb-4">
                  How?
                </div>
                <p className="text-white text-base px-6 mb-5">
                  cadCAD supports different system modeling approaches and can
                  be easily integrated with common empirical data science
                  workflows. Monte Carlo methods, A/B testing and parameter
                  sweeping features are natively supported and optimized for.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full font-bold text-xl text-white px-6 pb-4">
                  What?
                </div>
                <p className="text-white text-base px-6 mb-5">
                  cadCAD (complex adaptive dynamics Computer-Aided Design) is a
                  python based modeling framework for research, validation, and
                  Computer Aided Design of complex systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white border-b py-8">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Use Cases
            </h1>
            <p className="w-full text-xl py-4 leading-tight text-center text-gray-800">
              cadCAD helps you answer the &quot;what if&quot; questions about
              your system
            </p>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex flex-row items-start mx-auto mt-8 lg:w-2/5 sm:flex-row">
                <div className="mr-8">
                  <span className="inline-flex flex items-center justify-center border-2 border-cadcad-lightblue text-cadcad-lightblue font-bold text-lg rounded-full h-12 w-12">
                    1
                  </span>
                </div>
                <div className="flex flex-col">
                  <h2 className="flex-grow mb-4 text-xl font-bold tracking-tighter text-cadcad-blue title-font">
                    What if I&apos;m not sure about some of my assumptions?
                  </h2>
                  <p className="w-full text-lg leading-tight text-gray-800">
                    Account for uncertainty in your models using Monte Carlo
                    methods to run stochastic simulations
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-start mx-auto mt-8 lg:w-2/5 sm:flex-row">
                <div className="mr-8">
                  <span className="inline-flex flex items-center justify-center border-2 border-cadcad-lightblue text-cadcad-lightblue font-bold text-lg rounded-full h-12 w-12">
                    2
                  </span>
                </div>
                <div className="flex flex-col">
                  <h2 className="flex-grow mb-4 text-xl font-bold tracking-tighter text-cadcad-blue title-font">
                    What if agents that interact with my system behaved
                    differently?
                  </h2>
                  <p className="w-full text-lg leading-tight text-gray-800">
                    Make different assumptions about agent behavior while
                    keeping the rest of the system constant with A/B testing
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-start mx-auto mt-8 lg:w-2/5 sm:flex-row">
                <div className="mr-8">
                  <span className="inline-flex flex items-center justify-center border-2 border-cadcad-lightblue text-cadcad-lightblue font-bold text-lg rounded-full h-12 w-12">
                    3
                  </span>
                </div>
                <div className="flex flex-col">
                  <h2 className="flex-grow mb-4 text-xl font-bold tracking-tighter text-cadcad-blue title-font">
                    What if I changed this parameter?
                  </h2>
                  <p className="w-full text-lg leading-tight text-gray-800">
                    Make an informed decision when fine tuning your system with
                    data from a parameter sweeping simulation
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/3 px-6 py-6 my-16 mx-auto bg-cadcad-blue  ">
                <p className="text-white w-full font-bold text-2xl py-6 px-8 text-center">
                  What will you ask of your system?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="bg-white border-b py-8">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Getting Started
            </h1>

            <div className="w-full md:w-1/6 p-6 flex flex-col flex-grow flex-shrink">
              <CadCAD className="w-full my-6 h-8" />
              <div className="w-full font-bold text-xl text-gray-800 py-4">
                Go to our <a href="#">Github</a>
              </div>
              <p className="text-gray-800 text-base mb-5">
                Install cadCAD and read through our documentation and guides.
                You may also find this community-created list of resources quite
                helpful too
              </p>
            </div>

            <div className="w-full md:w-1/6 p-6 flex flex-col flex-grow flex-shrink">
              <CadCAD className="w-full my-6 h-8" />
              <div className="w-full font-bold text-xl text-gray-800 py-4">
                Go to our <a href="#">Github</a>
              </div>
              <p className="text-gray-800 text-base mb-5">
                Install cadCAD and read through our documentation and guides.
                You may also find this community-created list of resources quite
                helpful too
              </p>
            </div>

            <div className="w-full md:w-1/6 p-6 flex flex-col flex-grow flex-shrink">
              <CadCAD className="w-full my-6 h-8" />
              <div className="w-full font-bold text-xl text-gray-800 py-4">
                Go to our <a href="#">Github</a>
              </div>
              <p className="text-gray-800 text-base mb-5">
                Install cadCAD and read through our documentation and guides.
                You may also find this community-created list of resources quite
                helpful too
              </p>
            </div>

            <div className="w-full md:w-1/6 p-6 flex flex-col flex-grow flex-shrink">
              <CadCAD className="w-full my-6 h-8" />
              <div className="w-full font-bold text-xl text-gray-800 py-4">
                Go to our <a href="#">Github</a>
              </div>
              <p className="text-gray-800 text-base mb-5">
                Install cadCAD and read through our documentation and guides.
                You may also find this community-created list of resources quite
                helpful too
              </p>
            </div>

            <div className="w-full md:w-1/6 p-6 flex flex-col flex-grow flex-shrink">
              <CadCAD className="w-full my-6 h-8" />
              <div className="w-full font-bold text-xl text-gray-800 py-4">
                Go to our <a href="#">Github</a>
              </div>
              <p className="text-gray-800 text-base mb-5">
                Install cadCAD and read through our documentation and guides.
                You may also find this community-created list of resources quite
                helpful too
              </p>
            </div>

            <div className="w-full md:w-1/6 p-6 flex flex-col flex-grow flex-shrink">
              <CadCAD className="w-full my-6 h-8" />
              <div className="w-full font-bold text-xl text-gray-800 py-4">
                Go to our <a href="#">Github</a>
              </div>
              <p className="text-gray-800 text-base mb-5">
                Install cadCAD and read through our documentation and guides.
                You may also find this community-created list of resources quite
                helpful too
              </p>
            </div>
          </div>
        </section>

        {/* Join our community */}
        <section className="bg-white border-b py-8">
          <div className="container mx-auto flex flex-row pt-4 pb-12">
            <h2 className="w-1/2 my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Join our community
            </h2>
            <div className="w-1/2 text-xl text-gray-800 px-6">
              <p className="text-gray-800 px-6 mb-5">
                We&apos;ve open-sourced cadCAD for the community and we want it
                to become a community-driven project.
              </p>
              <p className="text-gray-800 px-6 mb-5">
                Join the discussion on Discource and Telegram and follow us on
                Twitter
              </p>
            </div>
          </div>
        </section>

        {/* Support us with a donation */}
        <section className="bg-white border-b py-8">
          <div className="container mx-auto flex flex-row pt-4 pb-12">
            <h2 className="w-1/2 my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Support us with a donation
            </h2>
            <div className="w-1/2 text-xl text-gray-800 px-6">
              <p className="text-gray-800 px-6 mb-5">
                You can support our product on OpenCollective:
                https://opencollective.com/cadcad1
              </p>
              <p className="text-gray-800 px-6 mb-5">
                Or you can donate crypto by sending ETH/tokens to our multisig
                address: 0xbcd768c566143714309afe87feb901da7543f470
              </p>
            </div>
          </div>
        </section>

        {/* Blockscience */}
        <section className="bg-white border-b py-8">
          <div className="w-full mx-auto md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-center">
            <img
              className="mx-auto h-52 w-52 rounded-full"
              src="https://thumb.tildacdn.com/tild6537-3638-4630-a530-373164336661/-/resize/520x/-/format/webp/Q-_3YcNe_400x400.jpg"
              alt="Blockscience logo"
            />
            <h2 className="w-full font-bold  my-6 text-3xl text-gray-800 px-6">
              Created by BlockScience
            </h2>
            <p className="text-gray-800 text-xl px-6 mb-5">
              cadCAD was created as an internal tool at BlockScience – an
              engineering, R&D and analytics firm specializing in complex
              systems design and validation
            </p>
          </div>
        </section>

        {/* Blockscience */}
        <footer className="w-full">
          <div className="container mx-auto px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
              <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6 uppercase">
                  Product
                </p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Github
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Video tutorials
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Inspirational videos
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      List of related resources
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6 uppercase">
                  Join our community
                </p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Discord
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Discourse
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Telegram
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6 uppercase">
                  Support us
                </p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      OpenCollective
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      ETH Donation address:
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      0xbcd768c566143714309afe87feb901da7543f470
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
