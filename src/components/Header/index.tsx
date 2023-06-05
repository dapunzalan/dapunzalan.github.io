import myLogo from '/icons/dp-icon.svg'
import styles from './index.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={myLogo} alt="My logo" />
      </div>
      <div className={styles.header__links}>
        <div>
          <a href="/#"> Me </a>
        </div>
        <div>
          <a href="/#"> Skills </a>
        </div>
        <div>
          <a href="/#"> Projects </a>
        </div>
        <div>
          <a href="/#"> Education </a>
        </div>
      </div>
    </div>
  )
}

export default Header