import React from 'react'

export default function CustomRadio(props) {
  return (
    <div>
        <div className="radio-wrapper-1">
  <input id={props.id} type="radio" name="radio-examples"/>
  <label className='mx-1 font-[urbanist]' htmlFor={props.id}>{props.txt}</label>
</div>
    </div>
  )
}
