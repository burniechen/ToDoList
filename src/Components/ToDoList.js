import React from 'react'
import '../css/todolist.css'

let newInput

class ToDoList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            list: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
        this.handleFinish = this.handleFinish.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange (e) {
        newInput = e.target.value
    }

    handleSubmit(e) {
        let newList = this.state.list
        
        newInput = {
            value: newInput,
            finish: false
        }
        newInput.value ? newList.push(newInput) : alert('GG')
        
        this.setState({
            list: newList
        })
        
        this.handleClear()
      }
      
    handleClear() {
        document.getElementById('myInput').value = null
        newInput = null
    }
    
    handleFinish(e) {
        let order = e.target.parentElement.getAttribute('order')
        let newList = this.state.list
        newList[order].finish = true
        
        this.setState({
            list: newList
        })
    }
    
    handleDelete(e) {
        let order = e.target.parentElement.getAttribute('order')
        let newList = this.state.list
        newList.splice(order, 1)
        
        this.setState({
            list: newList
        })
    }
    
    render() {
        const MapValue = () => {
            return this.state.list.map(
                (list, i) => (
                    <li key={i}>
                    
                    {list.finish ? <strike>{list.value}</strike> : list.value}
                        <div className="btnBox" order={i}>
                            <button 
                                className='btn_finish'
                                type='button' 
                                onClick={this.handleFinish}>
                                完成
                            </button>
                            
                            <button 
                                className='btn_delete'
                                type='button'
                                onClick={this.handleDelete}>
                                刪除
                            </button>
                        </div>
                    </li>
                )
            )
        }
        
        return (
            <div className='container'>
                <h1>TodoList :</h1>
                <article>
                    <div>
                        <input 
                            type='text'
                            name='todo'
                            id='myInput'
                            onChange={this.handleChange}
                        />
                        <button 
                            className='btn_submit'
                            type='button' 
                            onClick={this.handleSubmit}>
                            確定
                        </button>
                        <button 
                            className='btn_cancel'
                            type='button' 
                            onClick={this.handleClear}>
                            取消
                        </button>

                        <h2>List :</h2>
                        <ul>
                            <MapValue />
                        </ul>
                    </div>
                </article>
            </div>
        )
    }
    
}

export default ToDoList