import styles from './Header.module.css'
import igniteLogo from '../src/assets/igniteLogo.svg'

console.log(igniteLogo)

export function Header(){
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logo-ignite" />
    </header>
  )
}