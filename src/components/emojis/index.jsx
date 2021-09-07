import PropTypes from 'prop-types'
import styles from './emojis.module.css'
import EmojisBox from '../emojisBox/index'
import { useEffect, useState } from 'react'
import { filterEmojis } from '../../utils/filterEmojis'
import Empty from '../../components/empty/index'

const Emojis = ({emojisData, searchText}) => {
    const [filteredEmojis, setFilteredEmojis] = useState([])

    useEffect(() => {
        setFilteredEmojis(filterEmojis({
            emojisData,
            searchText
        }))

    }, [emojisData, searchText])

    if(filteredEmojis.length > 0){
        return(
            <div className={styles.emojisGrid}>
            {filteredEmojis.map((data,index) =>(
               <EmojisBox 
               key={index} 
               title={data.title} 
               symbol={data.symbol}>
               </EmojisBox>
            ))}
        </div>
        )
    } else{
        return (
            <Empty text="No Emojis Found!"/>
        )
    }
}

Emojis.propTypes = {
    emojisData: PropTypes.array,
    searchText: PropTypes.string
}

export default Emojis