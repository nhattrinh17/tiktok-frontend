import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/Component/Propper';
import styles from './search.module.scss';
import AccountItem from '~/Component/AccountItem';
import { SearchIcon } from '~/Component/Icons';
import { useDebounce } from '~/hoks';
import * as searchService from '~/apiServices/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchSesult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(true);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            setLoading(false);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (searchValue.startsWith(' ')) {
            return;
        }

        setSearchValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchSesult.length > 0}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>Account</h3>
                            {searchSesult.map((account) => {
                                return <AccountItem data={account} key={account.id}></AccountItem>;
                            })}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        className={cx('search-input')}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                        // onKeyUp={(e) => console.log(e.keyCode)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/* Loading */}
                    {loading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
