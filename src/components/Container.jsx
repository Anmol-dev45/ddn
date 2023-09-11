import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='container mx-auto px-2 py-4 md:px-8 lg:px-28'>{children}</div>
    )
}

export default Container