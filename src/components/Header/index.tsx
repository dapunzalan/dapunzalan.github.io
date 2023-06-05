import { useReducer } from 'react'
import { MenuOpen, Menu } from '@mui/icons-material'
import myLogo from '/icons/dp-icon.svg'
import styles from './index.module.scss'

const Header = () => {
  const [toggle, toggleMenu] = useReducer((value) => !value, false )

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={myLogo} alt="My logo" />
      </div>
      <div className={styles.header__menu} onClick={toggleMenu}>
        { toggle ? <MenuOpen /> : <Menu />}
      </div>
      <div className={[styles.header__links, toggle ? styles['header__links--is-show'] : ''].join(' ')}>
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