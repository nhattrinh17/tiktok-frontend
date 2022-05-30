import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './accountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1653991200&x-signature=S6Seqs6srXvUnjWxEAJAh3%2B8zHg%3D"
                alt="Độ Mixi"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Mixigamming</span>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('info-check')} />
                </p>
                <p className={cx('username')}>Độ Phùng</p>
            </div>
        </div>
    );
}

export default AccountItem;
