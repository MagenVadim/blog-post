import React from 'react';
import { Link } from "react-router-dom";

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


export const Header = () => {
    const isAuth = false;

    const onClickLogout = () => {};

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to ="/">
            <div>POST BLOG</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/posts/create">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  LogIn
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">LogIn</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Create account</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};