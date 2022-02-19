import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import mediaDevices from "../style/mediaDevices.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Fragment } from "react";
import { signOut } from "../redux/user/actions.js";
////////////////////////////////////////////////////////////

const Container = styled.div`
  height: 6rem;
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  @media ${mediaDevices.mobile} {
    padding: 1rem;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  cursor: pointer;

  @media ${mediaDevices.mobile} {
    display: none;
  }
`;

const SearchContainer = styled.div`
  border: 0.05rem solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
  padding: 0.5rem;

  @media ${mediaDevices.mobile} {
    margin-left: 0;
    margin-right: 1rem;
  }
`;

const Input = styled.input`
  border: none;
  :focus {
    outline: none;
  }

  @media ${mediaDevices.mobile} {
    width: 100%;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const MenuItem = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  cursor: pointer;
  margin-left: 2.5rem;
  color: #333 !important;
  text-transform: capitalize;

  span {
    min-width: 1rem;
    height: 1.5rem;
  }

  svg {
    font-size: 1.6rem;
  }

  @media ${mediaDevices.mobile} {
    margin-left: 1.5rem;
  }
`;

////////////////////////////////////////////////////////////
const Navbar = ({ isLoggedIn, user, logOut }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "1.6rem" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem to="/">home</MenuItem>
          {!isLoggedIn ? (
            <Fragment>
              <MenuItem to="/register">register</MenuItem>
              <MenuItem to="/login">sign in</MenuItem>
            </Fragment>
          ) : (
            <Fragment>
              <MenuItem as="div">{user.name.split(" ")[0]}</MenuItem>
              <MenuItem as="div" onClick={logOut}>
                sign out
              </MenuItem>
            </Fragment>
          )}
          <MenuItem as="div">
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
