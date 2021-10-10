import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Center = styled.div`
  text-align: center;
  margin-top: 150px;
  p {
    font-weight: bold;
  }

  h1 {
    font-size: 60px;
    color: green;
    margin-top: 50px;
  }
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: 50px;
  border-radius: 4%;
`;

export const ProductsStyle = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-bottom: 100px;
`;

export const Item = styled.div`
  text-align: center;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4%;
  }

  p {
    font-weight: bold;
  }
`;

export const ItemDetail = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 25 rem;

  display: flex;
  justify-content: center;
`;

export const DetaledImage = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 4%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 18rem;
  border-radius: 1%;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  display: block;
  width: 40%;
`;

export const StyledButton = styled.button`
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border-radius: 12px;
  border: 2px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 28px;
  font-weight: bold;
  padding: 0px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2b665e;
  margin-bottom: 20px;
  :hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

export const NavB = styled.nav`
  /* background-color: ${(props) => props.theme.backGroundColor}; */
  padding: 5px;
  /* border-bottom: 1px solid ${(props) => props.theme.thirdColor}; */
  display: flex;
  justify-content: space-between;
  height: 90px;
`;
export const LinkItem = styled(NavLink)`
  background-color: ${(props) => props.theme.backGroundColor};
  color: ${(props) => props.theme.textColor};
  padding: 5px;

  &.active {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.backGroundColor};
    padding: 5px;
    margin: 5px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  letter-spacing: 2px;
  margin-left: 50px;
  img {
    width: 150px;
    margin-right: 15px;
  }
`;

export const ButtonLink = styled(Link)`
  padding: 5px;
  width: 50px;
`;

export const FlexStyle = styled.div`
  /* margin-top: 20px; */

  display: flex;
  justify-content: center;
`;

export const FlexStyleVer = styled.div`
  /* margin-top: 20px; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormCenter = styled.form`
  margin: auto;
  margin-top: 80px;
  width: 40%;
  border: 3px solid black;
  border-radius: 10px;
  padding: 20px;
`;

export const ButtonsStyle = styled.div`
  display: flex;
  justify-content: left;
`;
