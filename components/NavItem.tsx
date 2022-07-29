import React, { FunctionComponent } from 'react'
import Link from 'next/link'

const NavItem: FunctionComponent<{
  activeItem: string
  setActiveItem: Function
  name: string
  route: string
}> = ({activeItem, setActiveItem, name, route}) => {
  return (
    activeItem !== name ? (
      <Link href={route}>
        <a>
          <span
            className="hover:text-green"
            onClick={()=>setActiveItem(name)}
          >
            {name}
          </span>
        </a>
      </Link>
    ): null
  )
}

export default NavItem