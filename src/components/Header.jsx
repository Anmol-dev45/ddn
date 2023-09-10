import React, { useState } from 'react'
import Button from './Button'
import Container from './Container'
import { HiMenu } from 'react-icons/hi'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <Container>
                <div className="flex justify-between items-center">
                    <h1 className=' text-3xl md:text-4xl text-primary font-bold  capitalize font-righteous '>dailyDose nepal</h1>
                    <nav className={`max-sm:fixed z-20 right-0 top-0 max-sm:h-screen  max-sm:bg-gray-200 max-sm:pt-20  flex max-sm:flex-col max-sm:w-2/3 items-center gap-4 md:gap-12 uppercase ${isOpen ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'} transition-all duration-300 ease-in-out`}>
                        <a href="" className='hover:text-primary transition-colors duration-300 ease-in-out'>home</a>
                        <a href="" className='hover:text-primary transition-colors duration-300 ease-in-out'>about</a>
                        <a href=""><Button>contact</Button></a>
                    </nav>
                    <div className='md:hidden z-40' onClick={() => setIsOpen(!isOpen)}>
                        <HiMenu size={35} />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header