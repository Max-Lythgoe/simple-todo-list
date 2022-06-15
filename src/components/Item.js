import React, {useState} from 'react'

const Item = ({task, deleteItem, handleFinish}) => {

    const [checked, setChecked] = useState(false)

    const check = (item) => {
        setChecked(!checked)
        handleFinish(item)
    }
  
    return (
    <div className="list-item">
        <p className={checked ? 'checked' : null} onClick={() => check(task)} >{task}</p>
        <p 
        className='click' 
        onClick={() => deleteItem(task)}
        >x</p>
        </div>
  )
}

export default Item