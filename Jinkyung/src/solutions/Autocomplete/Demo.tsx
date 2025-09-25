import * as React from 'react';
import top100Films from './top100Films'
export default function ComboBox() {
  const [isOpen, setIsOpen ] =React.useState(false)
  const [searchFilter, setSearchFilter] = React.useState('')
  const [filterFilms,setFilterFilms] = React.useState([])

  const handleClick =()=>{
    setIsOpen(!isOpen)
  }
  const handleChange=(e)=>{
    e.preventDefault()
    console.log(e.target.value)

    setSearchFilter(e.target.value)
  }

  const handleLabelClick=(value)=>{
    console.log(value)
    setSearchFilter(value.label)
  }
  
  React.useEffect(()=>{
    setFilterFilms(top100Films.filter((v) => v.label.includes(searchFilter)))
  }, [searchFilter])

  return (
    <div >
      <input  type="text" style={{ width: '300px', height: '60px', border: '1px solid black' }} onClick={handleClick}
        onChange={(e) =>{handleChange(e)}} value={searchFilter}>
      </input>
      <div>  {isOpen && filterFilms.map((value) => {
        return (<div >{<div onClick={() => handleLabelClick(value)}>{value.label} - {value.year}</div>}</div>)
      })}</div>
    </div>
  )
}

//filter top100Films - searchFilter 

//isOpen 위치, filter, input, state, string함수 includes 

