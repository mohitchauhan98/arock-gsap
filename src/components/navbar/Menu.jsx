import React from 'react'

const Menu = (props) => {

  const menuBarOpens = () => {
    props.setMenuOpen(true)
  }
  console.log(props)
  return (
    <div onClick = {menuBarOpens} className='font-[a4] active:scale-y-95 uppercase hover:opacity-70 opacity-80 cursor-pointer'>Menu</div>
  )
}

export default Menu