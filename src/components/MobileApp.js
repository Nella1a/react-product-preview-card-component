//import './App.css';
import React from 'react';

function MobileApp() {
  return (
    <div className="w-192 flex">
      <div  >
        <img src="/image-product-desktop.jpg" alt="chanel, bottle of parfume" className='w-96 rounded-l-xl'/>
      </div>
      <article className="bg-white w-96 flex flex-col justify-around p-10 gap-6 rounded-r-xl">

          <h1 className="tracking-widest uppercase font-medium text-lg w-80">Perfume</h1>
          <h2 className="text-[#1c232b] font-fraunces text-5xl">Gabrielle Essence Eau De Parfum</h2>
          <p className="text-[#6c7289] font-medium leading-8 text-lg">A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-6">
          <span className="text-[#3c8067] font-fraunces text-4xl font-bold">$149.99</span>
          <span className="line-through">$169.99</span>
          </div>
          <button className="bg-[#3c8067] hover:bg-[#295746] text-white w-72 h-14 rounded-lg text-lg font-bold flex justify-center items-center gap-3">
              <span>
                <img src="/icon-cart.svg" alt="cart icon" className="w-fit" />
              </span> Add to Cart
          </button>

        </article>
    </div>
  );
}

export default MobileApp;
