import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../Actions'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input placeholder='Заметка...' ref={node => input = node} />
                <Tooltip title='Добавить в список'>
                    <Fab type='submit' color='primary' aria-label='Add' size='small'>
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </form>
        </div>
    )
}

export default connect()(AddTodo)