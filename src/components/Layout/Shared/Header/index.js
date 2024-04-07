import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={styles['wrapper']}>
            <div className={styles['inner']}>
                <h2>Title</h2>
            </div>
        </header>
    )
}

export default Header