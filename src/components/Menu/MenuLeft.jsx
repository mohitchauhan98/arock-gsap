import React from 'react'
import { Tilt } from '@jdion/tilt-react'

const MenuLeft = () => {
  return (
    <div className='overflow-hidden w-2/3 py-14 px-32 relative h-full'>
        <Tilt className='h-full w-full flex items-center justify-center relative'>
          <img className='absolute scale-[0.97] opacity-20 h-full w-full object-cover object-center' src='https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop' alt='logo'/>
          <img className='absolute scale-[0.94] opacity-50 h-full w-full object-cover object-center' src='https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop' alt='logo'/>
          <img className='absolute scale-[0.91] opacity-70 h-full w-full object-cover object-center' src='https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop' alt='logo'/>
          <img className='absolute opacity-50 h-full w-full object-cover object-center' src='https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop' alt='logo'/>
        </Tilt>
    </div>
  )
}

export default MenuLeft