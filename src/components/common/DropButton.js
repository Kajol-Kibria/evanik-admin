import React from 'react'

import { MdArrowDropDown } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
export default function DropButton(props) {
  return (
    <div>
        <Menu>
          <MenuButton className='flex items-center gap-1 text-[13px] border border-[#e0e1ff] py-2 px-3 rounded-xl focus:text-blue hover:text-blue font-semibold text-gray-700 transition-all duration-300  focus:border-blue hover:border-blue bg-white'>
             {props.state}
             <MdArrowDropDown size={17}/>
          </MenuButton>
          <MenuItems anchor="bottom" className='mt-2 py-2 rounded-lg bg-white border border-[#e0e1ff] z-50'>
                {props.items.map((item, i)=>{
                    return(
                      <div key={i}>{
                      <MenuItem onClick={()=>{props.setState(item)}} className='pr-12 pl-4 py-1 text-sm text-left' >
                        <p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >{item}</p>
                      </MenuItem>
                      }
                      </div>
                      )
                })}
          </MenuItems>
          </Menu>
    </div>
  )
}
