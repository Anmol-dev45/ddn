import React from 'react'
import Container from './Container'
import Button from './Button'

const Hero = () => {
    return (
        <section className='mt-20'>
            <Container>
                <div className="flex flex-col-reverse md:flex-row justify-between relative border-3 items-start md:items-end gap-y-6">
                   
                    <div className='flex-1'>
                        <h1 className='max-md:hidden text-5xl font-medium font-righteous tracking-widest text-primary mb-4'>Welcome to <br />DailyDose Nepal!!!</h1>
                        <p className='font-medium opacity-80 mb-8 md:mb-12 md:pr-8 md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi aliquid debitis eos. Eius culpa ducimus quidem porro asperiores, quasi, dicta illum tempore deleniti modi atque deserunt provident voluptatum amet molestias accusantium quam facere!</p>
                        <div className='flex gap-4 items-center'>
                            <a href="https://forms.gle/J7dBXt996fWmkcGo7" target='_blank'><Button>join us</Button></a>
                            <a href="https://forms.gle/o3hciwwmWe7WFyvx5" target='_blank'><Button>Inform us</Button></a>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src="/hero.jpg" alt="" />
                    </div>
                     <h1 className='md:hidden text-4xl font-medium font-righteous tracking-wider text-primary mb-2'>Welcome to <br />DailyDose Nepal!!!</h1>
                </div>
            </Container>
        </section>
    )
}

export default Hero