import styled from 'styled-components';

export const NavEstilo = styled.div`
nav {
  background-color: #00d2af;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

  .navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .logo {
    width: auto;
    height: 50px;
    filter: brightness(100);
  }

  .navbar-nav {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .navbar-nav.expanded {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .navbar-nav li {
    margin-bottom: 10px;
  }

  .navbar-nav li a {
    text-decoration: none;
    color: #ffffff;
  }

  .navbar-nav li a:hover {
    text-decoration: underline;
    color: #009393;
  }

  @media (max-width: 768px) {
    .navbar .collapsed {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: #343a40;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: all 0.3s ease;
      justify-content: flex-end;
      height: 0;
    }

    .navbar-nav {
      display: none;
    }

    .navbar .expanded {
      width:100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: #343a40;
      padding: 10px;
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: all 0.3s ease;
    }

    .navbar-toggler {
      display: block;
      background-color: transparent;
      border: none;
      cursor: pointer;
      outline: none;
    }

    .navbar-toggler-icon {
      display: block;
      width: 24px;
      height: 16px;
      background-color: #fff;
      transition: background-color 0.3s ease;
      position: relative;

      span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        transition: transform 0.3s ease;
      }

      span:first-child {
        top: 0;
      }

      span:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
      }

      span:last-child {
        bottom: 0;
      }
    }

    .navbar-toggler.collapsed .navbar-toggler-icon span {
      &:first-child,
      &:last-child {
        transform: translateY(8px) rotate(0);
      }
      &:nth-child(2) {
        transform: translateY(-50%) rotate(0);
      }
    }

    .navbar-toggler:not(.collapsed) .navbar-toggler-icon span:first-child {
      transform: translateY(8px) rotate(45deg);
    }

    .navbar-toggler:not(.collapsed) .navbar-toggler-icon span:last-child {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;
