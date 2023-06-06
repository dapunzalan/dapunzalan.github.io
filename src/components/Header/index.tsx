import { useReducer } from 'react'
import { Close, Menu } from '@mui/icons-material'
import styled, { css } from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import myLogo from '/icons/dp-icon.svg'
import styles from './index.module.scss'

const Nav = styled.nav`
  background-color: #212A3E;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 500;
  height: 100vh;
  left: 0;
  opacity: 1;
  padding-top: 4rem;
  position: absolute;
  pointer-events: auto;
  text-align: center;
  text-transform: uppercase;
  top: 0;
  transition: opacity 0.5s ease-out;
  width: 100%;
  z-index: 9999;

  @media (min-width: 600px) {
    align-self: center;
    background: none;
    flex-direction: row;
    font-size: 1rem;
    grid-column: 3 / -2;
    height: auto;
    justify-content: flex-end;
    opacity: 1;
    padding-top: 0;
    pointer-events: auto;
    position: static;
    text-align: right;
    width: auto;
  }
`;

const Wrapper = styled.div<{delay: string}>`
  margin: 12px 0;

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: appear 1s ease-out both;
  animation-delay: ${(props) => props.delay};
`;

const itemCSS = css`
  position: relative;

  @media (min-width: 800px) {
    ::after {
      content: "";
      display: block;
      height: 2px;
      left: 0;
      position: absolute;
      right: 0;
      transform: scaleX(0);
      transform-origin: top right;
      transition: transform 0.25s ease-out;
    }

    &:hover {
      ::after {
        transform: scaleX(1);
        transform-origin: top left;
      }
    }
  }
`;

const AnchorItem = styled(AnchorLink)<any>`
  all: unset;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  will-change: filter;
  transition: filter 300ms;
  margin: 0 24px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: #03C988;
    filter: drop-shadow(0 0 2em #03C988);
  }
  ${itemCSS};
`;

const Header = () => {
  const [toggle, toggleMenu] = useReducer((value) => !value, false )

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={myLogo} alt="My logo" />
      </div>
      <div className={styles.header__menu} onClick={toggleMenu}>
        { toggle ? <Close /> : <Menu />}
      </div>
      <div className={[styles.header__links, toggle ? styles['header__links--is-show'] : ''].join(' ')}>
        <Nav>
          <Wrapper delay="0.5s">
            <AnchorItem
              href="#"
              offset="160"
            >
              Me
            </AnchorItem>
          </Wrapper>
          <Wrapper delay="0.6s">
            <AnchorItem
              href="#"
              offset="160"
            >
              Skills
            </AnchorItem>
          </Wrapper>
          <Wrapper delay="0.7s">
            <AnchorItem
              href="#"
              offset="160"
            >
              Projects
            </AnchorItem>
          </Wrapper>
          <Wrapper delay="0.8s">
            <AnchorItem
              href="#"
              delay="0.8s"
            >
              Education
            </AnchorItem>
          </Wrapper>
        </Nav>
      </div>
    </div>
  )
}

export default Header