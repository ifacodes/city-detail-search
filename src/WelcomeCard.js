import React from "react";

export default function WelcomeCard() {
  return (
    <div className="rounded-2xl shadow-lg bg-white sm:w-5/6 w-full flex-grow my-10 flex flex-col">
      <header className="flex items-center justify-between p-6 border-b border-solid border-gray-300 rounded-t">
        <div className="border-0 hover:border-2 hover:border-red-500">
          <h1 className="ml-2 text-3xl text-gray-700 font-semibold">
            Welcome to City-Detail-Search!
          </h1>
        </div>
        <a
          href="https://teleport.org/cities"
          className="float-right text-xs text-center font-semibold"
        >
          Powered by Teleport
          <br />A Topia Company
        </a>
      </header>
      <section className="my-4 sm:mx-0 mx-4 flex-grow ">
        <h1 className="mx-auto text-center text-4xl font-semibold text-gray-700 my-10">
          How to Use:
        </h1>
        <div className="px-16 my-auto mx-auto text-2xl font-semibold text-center text-gray-700 pb-16">
          Enter a city in the upper left
          <br />
          <br />
          Press the button to enter compare mode
          <br />
          <br />
          This app functions using the Teleport Cities API, if a city cannot be
          found, <br />
          or does not have data, please refer to the site linked in the
          response.
        </div>
      </section>
    </div>
  );
}
