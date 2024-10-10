import React from 'react'

const MenuClose = (props) => {

    const menuBarCloses = () => {
        props.setMenuOpen(false)
    }

  return (
    <div onClick = {menuBarCloses} className='text-right uppercase font-[a4] active:scale-y-95 cursor-pointer hover:opacity-70'>Close</div>
  )
}

export default MenuClose