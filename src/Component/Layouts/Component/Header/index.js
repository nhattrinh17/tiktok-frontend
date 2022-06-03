import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faArrowRightToBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import imgs from '~/assets/img/index';
import styles from './header.module.scss';
import Button from '~/Component/Button';
import Menu from '~/Component/Propper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/Component/Icons';
import Image from '~/Component/Image';
import Search from '../Search';
import routeConfig from '~/config/routes';

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
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change type language
                break;
            default:
        }
    };
    useEffect(() => {});

    const currentUser = true;

    return (
        <header className={cx('wrapeer')}>
            <div className={cx('inner')}>
                <Link to={routeConfig.home} className={cx('logo-link')}>
                    <img src={imgs.logo} alt="Logo Tiktok" />
                </Link>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <div className={cx('current-user')}>
                                <Tippy delay={[0, 300]} content="Upload Video">
                                    <button className={cx('icon-upload')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 300]} content="Message">
                                    <button className={cx('icon-message')}>
                                        <MessageIcon width="2.8rem" height="2.8rem" />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 300]} content="Inbox">
                                    <button className={cx('icon-inbox')}>
                                        <InboxIcon />
                                        <span className={cx('number-message')}>20</span>
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
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1654394400&x-signature=3bxWJGjjV4dX7z2899iavbmOmp4%3D"
                                className={cx('user-avatar')}
                                alt="Do MiXi"
                            ></Image>
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
