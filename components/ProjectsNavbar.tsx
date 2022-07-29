import React, { FunctionComponent } from 'react'
import { Category } from '../type'

export const NavItem:FunctionComponent<{value:Category | 'all', handleFilterCategory:Function, active:string }> = ({
  value,
  handleFilterCategory,
  active
}) => {
  return (
    <li className="capitalize cursor-pointer hover:text-green" onClick={()=>handleFilterCategory(value)}>
      {
        active === value ? <span className="text-green">{value}</span> : <span>{value}</span>
      }
    </li>
  )
}

const ProjectsNavbar:FunctionComponent<{handleFilterCategory:Function, active:string}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="next js" {...props} />
      <NavItem value="react native" {...props} />
      <NavItem value="figma" {...props} />
      <NavItem value="django" {...props} />
    </div>
  )
}

export default ProjectsNavbar