import Container from '../Container/Container'

import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.space}>
          <div>
            <a className={styles.link} href='/'><span className={`${styles.icon} fa fa-tasks`} /></a>
          </div>
          <div>
            <a className={styles.link} href='/'>Home</a>
            <a className={styles.link} href='/about'>About</a>
            <a className={styles.link} href='/favorite'>Favorite</a>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar;