import React from 'react'
import Container from './Container'
import Button from './Button'

const Hero = () => {
    return (
        <section className='mt-20'>
            <Container>
                <div className="flex flex-col md:flex-row justify-between relative border-3 items-start md:items-end gap-y-16">
                    <div className='flex-1'>
                        <h1 className='text-4xl md:text-5xl font-medium font-righteous tracking-wider md:tracking-widest text-primary mb-2 md:mb-4'>Welcome to <br />DailyDose Nepal!!!</h1>
                        <p className='font-medium opacity-80 mb-8 md:mb-12 md:pr-8 md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi aliquid debitis eos. Eius culpa ducimus quidem porro asperiores, quasi, dicta illum tempore deleniti modi atque deserunt provident voluptatum amet molestias accusantium quam facere!</p>
                        <a href=""><Button>Inform us</Button></a>
                    </div>
                    <div className="flex-1">
                        <img src="/hero.jpg" alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero