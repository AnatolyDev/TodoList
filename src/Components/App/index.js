import React from 'react'
import AddTodoItem from '../../Containers/AddTodoItem'
import ActiveTodoList from '../../Containers/ActiveTodoList'
import SimpleTabs from '../../Containers/SimpleTabs'

const App = () => (
    <div>
        <SimpleTabs/>
        <ActiveTodoList />
        <AddTodoItem />
    </div>
)

export default App