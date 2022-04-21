import styled from "@emotion/native";

export const Container = styled.View`
  background-color: #FFF;
  justify-content: space-between;
  padding: 20px;
  flex-direction: row;
`;

export const CartWrapper = styled.View``

export const CartDotNumber = styled.Text`
  font-size: 10px;
  border-radius: 9999px;
  font-weight: bold;

  width: 15px;
  height: 15px;
  text-align: center;
  

  background-color: red;
  position: absolute;

  top: 0;
  right: -5px;
`