import React, {useState} from 'react'
import Item from './Item'

const Main = () => {

  const [val, setVal] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    setVal(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setList([...list, val])
    setVal('')
  }

  const deleteItem = (item) => {
    let index = list.indexOf(item)
    list.splice(index, 1)
    setList([...list])
  }

  const handleFinish = (item) => {
    let index = list.indexOf(item)
    let finishedItem = list.splice(index, 1)
    setList([...list, finishedItem])
  }

  const listDisplay = list.map((item, index) => {
    return(
      <Item key={index} task={item} deleteItem={deleteItem}/>
    )
  })

  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
          type="text"
          placeholder="add an item"
          value={val}
          onChange={(e) => handleChange(e)}
          ></input>
          <button>Add</button>
        </form>
        {listDisplay}
    </div>
  )
}

export default Main