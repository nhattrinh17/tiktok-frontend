import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faMessage,
    faCoins,
    faGear,
    faArrowRightToBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/Component/Propper';

import img from '~/assets/img/index';
import styles from './header.module.scss';
import AccountItem from '~/Component/AccountItem';
import Button from '~/Component/Button';
import Menu from '~/Component/Propper/Menu';

const cx = classnames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback end help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keybrard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@ahihi1702',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEM,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [searchSesult, setSearchResult] = useState([]);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change type language
                break;
            default:
        }
    };
    useEffect(() => {
        setInterval(() => {
            setSearchResult([]);
        }, 0);
    });

    const currentUser = true;

    return (
        <header className={cx('wrapeer')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <img src={img.logo} alt="Logo Tiktok" />
                </Link>
                <HeadlessTippy
                    interactive
                    visible={searchSesult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Account</h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                            className={cx('search-input')}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        {/* Loading */}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <div className={cx('current-user')}>
                                <Tippy delay={[0, 300]} content="Upload Video">
                                    <button className={cx('icon-upload')}>
                                        <FontAwesomeIcon icon={faCloudUpload} />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 300]} content="Message">
                                    <button className={cx('icon-message')}>
                                        <FontAwesomeIcon icon={faMessage} />
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log In</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1654135200&x-signature=AzMJiwhqrHwec4Unq%2B8MKhTfJoM%3D"
                                className={cx('user-avatar')}
                                alt="Do MiXi"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
