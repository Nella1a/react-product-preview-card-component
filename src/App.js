import './App.css';
import React from 'react';

// import logo from './logo.svg';

function App() {
  return (
    <div className="w-192 border-2 rounded-lg flex">
      <div  >
        <img src="/image-product-desktop.jpg" alt="chanel, bottle of parfume" className='w-96 rounded-l-lg'/>
      </div>
      <article className="bg-white w-96 flex flex-col gap-1 justify-around p-4">
        <h1 className="tracking-widest uppercase">Perfume</h1>
        <h2 className="text-[#1c232b]">Gabrielle Essence Eau De Parfum</h2>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
        </p>
        <div>
        <span className="text-[#3c8067]">$149.99</span>
          $169.99
        </div>
          <button className="bg-[#3c8067] text-white w-80 h-14 rounded-lg">
            Add to Cart</button>
        </article>
    </div>
  );
}

export default App;
