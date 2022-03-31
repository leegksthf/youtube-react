import styles from "./search_header.module.css";
import React, { memo, useRef } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchHeader = memo(({ onSearch, logoClick }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.start}>
        <button className={styles.toggleBtn}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button className={styles.logo} onClick={logoClick}>
          <img className={styles.img} src="/images/logo.png" alt="logo" />
          <h2 className={styles.title}>Youtube</h2>
        </button>
      </div>
      <div className={styles.inputWrap}>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="검색"
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} type="submit" onClick={onClick}>
          <img
            className={styles.buttonImg}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </div>
      <div className={styles.myInfo}>
        <FontAwesomeIcon icon={faBell} className={styles.bellIcon} />
        <img src="/images/myinfo.png" alt="" className={styles.myImg}/>
      </div>
    </header>
  );
});

export default SearchHeader;
