import React from 'react'
import Container from './Container'
import Button from './Button'
import { HERO } from '../../constant'
import { BsFacebook } from "react-icons/bs"

const Hero = () => {
    const { title, description } = HERO
    return (
        <section className='mt-20'>
            <Container>
                <div className="flex flex-col-reverse md:flex-row justify-between relative border-3 items-start gap-x-2 gap-y-6">

                    <div className='flex-1'>
                        <div className='flex flex-row-reverse items-center gap-2 mb-12 text-primary text-xl'>
                                <BsFacebook />
                                <BsFacebook />
                                <BsFacebook />
                                <div className='h-1 bg-primary/90 w-full rounded-full'></div>
                        </div>
                        <div>
                            <h1 className='max-md:hidden text-5xl font-medium font-righteous tracking-widest text-primary mb-4'>{title}</h1>
                            <p className='font-medium opacity-80 mb-8 md:mb-12 md:pr-8 md:text-left'>{description}</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <a href="https://forms.gle/J7dBXt996fWmkcGo7" target='_blank'><Button variant='default'>join us</Button></a>
                            <a href="https://forms.gle/o3hciwwmWe7WFyvx5" target='_blank'><Button variant='ghost'>Inform us</Button></a>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src="/hero.jpg" alt="" />
                    </div>
                    <h1 className='md:hidden text-4xl font-medium font-righteous tracking-wider text-primary mb-2'>{title}</h1>
                </div>
            </Container>
        </section>
    )
}

export default Hero