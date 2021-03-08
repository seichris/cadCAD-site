import Head from "next/head";
import BubbleBg from "../components/BubbleBg";
import Vercel from "../components/svg/vercel";

export const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Welcome to the template!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen relative flex flex-col justify-center items-center">
        <BubbleBg className="w-screen h-screen absolute overflow-hidden z-0 bg-gray-900" />

        <div className="bg-gray-400 bg-opacity-50 p-4 rounded text-center z-10">
          <div className="max-w-xs rounded overflow-hidden bg-gray-300 shadow-lg my-2">
            <Vercel className="w-full my-6" />
            <div className="px-6 py-4 bg-gray-200">
              <div className="font-bold text-xl mb-2">Hello there!</div>
              <p className="text-grey-darker text-base">
                If you can see this, then everything is working correctly! :)
              </p>
            </div>
          </div>
          <button
            className="px-4 py-2 shadow-lg rounded mt-6 bg-blue-800 active:bg-blue-700 text-center text-gray-300"
            onClick={() => {
              window.alert("With typescript and Jest");
            }}
          >
            Test Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
