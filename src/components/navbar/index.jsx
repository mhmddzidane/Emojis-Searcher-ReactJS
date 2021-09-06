import styles from './navbar.module.css'

import searchIcon from '../../assets/search-icon.svg'
import emojiIcon from '../../assets/emoji-icon.svg'

const navbar  = () => {
    return (
    <nav className={styles.nav}>
        <img src={emojiIcon} className={styles.navIcon} alt="emoji icon" style={{marginRight: 8}}></img>
        <img src={searchIcon} className={styles.navIcon} alt="search icon" style={{marginTop: 3}}></img>
        <span className={styles.navTitle}>er</span>
    </nav>
    )
}

export default navbar