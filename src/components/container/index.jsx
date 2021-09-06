import PropTypes from 'prop-types'

import styles from './container.module.css'

const container = ({children}) => {
    return(
        <section className={styles.container}>
            {children}
        </section>
    )
}

container.propTypes = {
    children: PropTypes.node
}

export default container