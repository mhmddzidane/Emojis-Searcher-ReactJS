import Proptypes from 'prop-types'

import styles from './input.module.css'

const Input = ({onChange, value}) => {
    return(
        <input className={styles.input} onChange={onChange} placeholder="Search" value={value}></input>
    )
}

Input.propTypes = {
    onChange: Proptypes.func,
    value: Proptypes.string
}

export default Input;