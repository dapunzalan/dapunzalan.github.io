import styles from './index.module.scss'

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={styles.introduction__info}>
        <div>
          <p>Hello I'm</p>
          <h1>Dexter Ariel <span>Punzalan</span> </h1>
          <p>A Software Engineer with over 4 years of Front-End Experience and passion for web development. 
            Familiar with applicable design and user practices. Successful at creating and improving designs to meet
            company brand styles and business needs.
          </p>
        </div>
      </div>
      <div className={styles.introduction__profile}>
        <img src="/images/profile.png" alt="profile" />
      </div>
    </div>
  )
}

export default Introduction