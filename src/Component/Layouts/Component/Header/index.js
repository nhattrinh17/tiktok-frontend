import classnames from 'classnames/bind';
import styles from './header.module.scss';

const cx = classnames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapeer')}>
      <div className={cx('inner')}></div>
    </header>
  );
}

export default Header;
