import React from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
export default function IconButton(props) {
  return (
    <div>
        <div>
                <Menu>
                   <MenuButton className='hover:border-blue cursor-pointer transition-all duration-300 w-9 h-9 flex items-center justify-center border rounded-full'>
                     {props.svg}
                       </MenuButton>
                       <MenuItems anchor="bottom" className={`${props.items?'block':'hidden'} mt-2 py-2 rounded-lg bg-white border border-blue/40`}>
                        {props.items?.map((item, i)=>{
                             return(
                                  <div key={i}>{
                                  <MenuItem  className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >{item}</p></MenuItem>
                                        }</div>
                                          )
                                        })}
                           </MenuItems>
                  </Menu>
            </div>
          
        
    </div>
  )
}
