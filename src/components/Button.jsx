import React from 'react'

const Button = ({ children, variant = "default" || "ghost" }) => {
    const className = "px-6 py-2 uppercase text-base font-medium hover:scale-105 transition-all duration-300 ease-linear"
    const variants = {
        "default": <button className={`text-white bg-primary hover:opacity-90 ${className}`}>
            {children}
        </button>,
        "ghost": <button className={`border-2 border-primary text-primary bg-transparent hover:bg-gray-100 ${className}`}>
            {children}
        </button>
    }
    return variants[variant]
}

export default Button