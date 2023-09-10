import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='px-6 py-2 uppercase text-base text-white font-medium bg-primary hover:opacity-90 hover:scale-105 transition-all duration-300 ease-linear'>
            {children}
        </button>
    )
}

export default Button