import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import { Wrapper as PopperWrapper } from '~/Component/Propper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

// const defaultFn = () => {};

function Menu({ children, items = [], onChange }) {
    const [hystory, setHystory] = useState([{ data: items }]);
    const current = hystory[hystory.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHystory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu_list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {hystory.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => setHystory((pre) => pre.splice(0, pre.length - 1))}
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHystory((pre) => pre.splice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
