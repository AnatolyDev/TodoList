import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";

const TodoItem = ({ onClick, completed, text }) => (
    /*{<li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>*/
    <div>
        <FormControlLabel control={
            <Checkbox checked={completed} onChange={onClick} color='primary'
            />}
                label={text}
        />
    </div>
/*}*/)

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;