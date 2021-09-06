import PropTypes from 'prop-types'
import styles from './emojis.module.css'
import EmojisBox from '../emojisBox/index'

const emojis = ({emojisData}) => {
    return(
        <div className={styles.emojisGrid}>
            {emojisData.map((data,index) =>(
               <EmojisBox 
               key={index} 
               title={data.title} 
               symbol={data.symbol}>
               </EmojisBox>
            ))}
        </div>
    )
}

emojis.propTypes = {
    emojisData: PropTypes.array
}

export default emojis