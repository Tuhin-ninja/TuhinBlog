// components/Pricing.js
import React from 'react';
import { Button } from '../ui/button';

const Pricing = () => {
    return (
        <div className='flex flex-col items-center justify-center my-10'>
            <div>
                <h1 className='font-bold text-5xl'>Choose your plan Now!!</h1>
            </div>
            <div className="items-center grid grid-cols-1 md:grid-cols-3 gap-10 my-4">
                <div className="dark:bg-amber-800 rounded-lg shadow-lg p-6 w-96 my-20 transition-transform transform hover:scale-105">
                    <h2 className="text-4xl font-bold mb-4 flex justify-center">Basic</h2>
                    <p className="text-2xl text-blue-500 mb-4">$10/month</p>
                    <ul className="mb-4">
                        <li>✔ Feature 1</li>
                        <li>✔ Feature 2</li>
                        <li>✖ Feature 3</li>
                    </ul>
                    <div className='flex bg-cyan-400 rounded-md justify-center'>
                        <Button>Choose</Button>
                    </div>
                </div>
                <div className="dark:bg-amber-800 rounded-lg shadow-lg p-6 w-96 my-20 transition-transform transform hover:scale-105">
                    <h2 className="text-4xl font-bold mb-4 flex justify-center">Standard</h2>
                    <p className="text-2xl text-blue-500 mb-4">$20/month</p>
                    <ul className="mb-4">
                        <li>✔ Feature 1</li>
                        <li>✔ Feature 2</li>
                        <li>✔ Feature 3</li>
                    </ul>
                    <div className='flex bg-cyan-400 rounded-md justify-center'>
                        <Button>Choose</Button>
                    </div>
                </div>
                <div className="dark:bg-amber-800 rounded-lg shadow-lg p-6 w-96 my-20 transition-transform transform hover:scale-105">
                    <h2 className="text-4xl font-bold mb-4 flex justify-center">Premium</h2>
                    <p className="text-2xl text-blue-500 mb-4">$30/month</p>
                    <ul className="mb-4">
                        <li>✔ Feature 1</li>
                        <li>✔ Feature 2</li>
                        <li>✔ Feature 3</li>
                    </ul>
                    <div className='flex bg-cyan-400 rounded-md justify-center'>
                        <Button>Choose</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;