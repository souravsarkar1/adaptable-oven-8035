import { Heading } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import { IoBookSharp } from 'react-icons/io5';
import { AiFillStar, AiFillCodeSandboxCircle } from 'react-icons/ai';
import { BiRectangle } from 'react-icons/bi';
import { GoFileDirectory } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

const ProfilePageNavbar = () => {
  return (
    <StyledNavbar>
      <NavLink exact to="/profile" activeClassName="active" className="NavItem">
        <IoBookSharp style={{ marginTop: "3px" }} /> OverView
      </NavLink>
      <NavLink to="/repositories" activeClassName="active" className="NavItem">
        <BiRectangle style={{ marginTop: "3px" }} /> Repositories
      </NavLink>
      <NavLink to="/projects" activeClassName="active" className="NavItem">
        <GoFileDirectory style={{ marginTop: "3px" }} /> Projects
      </NavLink>
      <NavLink to="/pakages" activeClassName="active" className="NavItem">
        <AiFillCodeSandboxCircle style={{ marginTop: "3px" }} /> Packages
      </NavLink>
      <NavLink to="/stars" activeClassName="active" className="NavItem">
        <AiFillStar style={{ marginTop: "3px" }} /> Stars
      </NavLink>
      <hr />
    </StyledNavbar>
  );
};

export default ProfilePageNavbar;

const StyledNavbar = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  width: 50%;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  position: sticky;
  top: 0;

  .NavItem {
    display: flex;
    flex-direction: row;
    gap: 9px;
    font-size: 20px;
    text-decoration: none;
    color: black;
    padding: 5px;
  }

  .NavItem:hover {
    text-decoration: underline;
  }

  .active {
    font-weight: bold;
  }
`;
