import './dropdown.css'

import { useState } from "react"

import { AiFillCaretDown } from 'react-icons/ai'

export function Dropdown () {

  const [selected,setSelected] = useState('Choose one')

  const [isActive,setIsActive] = useState(false)

const options = ['React','Vue','Angular']

return (
    <div className="dropdown">
      <div className={`dropdown-btn`} onClick={() => setIsActive(!isActive)}>{selected}<AiFillCaretDown/></div>
      <div className={`dropdown-content ${isActive  ? 'dropdown-active' : 'dropdown-inactive'}`}>
        {options.map(option => (
          <div className="dropdown-item" onClick={() => {setSelected(option),setIsActive(false)}}>{option}</div>
        ) )}
      </div>
    </div>
)
}