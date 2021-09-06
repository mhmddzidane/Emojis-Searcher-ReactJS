import PropTypes from 'prop-types'
import styles from './empty.module.css'

const empty = ({text}) => {
    return (
        <div className={styles.empty}>
            {text}
        </div>
    )
}

empty.propTypes = {
    text: PropTypes.string.isRequired
}

export default empty