import classNames from 'classnames/bind';
import { useState, forwardRef } from 'react';
import imgs from '~/assets/img';
import styles from './image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ className, src, alt, fallBack = imgs.noImage }, ref) => {
    const [fallBackDefault, setFallBack] = useState('');

    const handleErrorImage = () => {
        setFallBack(fallBack);
    };

    return (
        <img
            ref={ref}
            className={cx('wrapper', className)}
            src={fallBackDefault || src}
            alt={alt}
            onError={handleErrorImage}
        />
    );
});

export default Image;
