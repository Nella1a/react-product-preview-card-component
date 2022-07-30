import './App.css';
import React from 'react';

// import logo from './logo.svg';

function App() {
  return (
    <div className="w-[25rem] flex flex-col m-auto md:flex-row md:w-[48rem] md:h-[38rem]">

      <div className="bg-mobileImage bg-no-repeat w-full h-[18rem] bg-contain bg-cover rounded-t-xl md:bg-desktopImage md:w-[24rem] md:h-full md:rounded-tr-none md:rounded-l-xl "/>

      <article className="bg-white flex flex-col justify-center
      items-start w-full p-8 gap-5 rounded-b-xl md:w-[24rem] md:gap-0  md:justify-around md:p-8 md:rounded-tr-xl md:rounded-l-none">

          <h1 className="tracking-widest uppercase font-medium text-base w-80 md:text-lg">Perfume</h1>
          <h2 className="text-[#1c232b] font-fraunces text-4xl md:text-5xl md:w-full">Gabrielle Essence Eau De Parfum</h2>
          <p className="text-[#6c7289] font-medium leading-6 text-base md:text-lg md:leading-7 md:w-full">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-6">
          <span className="text-[#3c8067] font-fraunces text-4xl font-bold md:text-5xl">$149.99</span>
          <span className="line-through md:text-base">$169.99</span>
          </div>

          <button className="bg-[#3c8067] hover:bg-[#295746] text-white w-full h-12 rounded-lg text-sm font-bold flex justify-center items-center gap-3 md:h-14 md:text-base">
              <span>
                <img src="/icon-cart.svg" alt="cart icon" className="w-fit" />
              </span> Add to Cart
          </button>
        </article>
    </div>
  );
}

export default App;
