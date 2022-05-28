import classNames from 'classnames/bind';
import styles from './defaultLayout.module.scss';
import Header from '~/Component/Layouts/Component/Header';
import SideBar from './SideBar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
