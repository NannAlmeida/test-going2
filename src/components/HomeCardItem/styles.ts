import styled from "@emotion/native";

export const Container = styled.View`
  background-color: #FFF;
  border-radius: 5px;
  padding: 16px;
`;

export const ItemHeader = styled.View`
  flex-direction: row;
`

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`
export const ItemInfo = styled.View`
  margin-left: 12px;
`
export const Name = styled.Text`
  font-size: 16px;
`

export const Price = styled.Text`
  font-size: 12px;
  font-weight: bold;
`

export const AddCartButton = styled.TouchableOpacity`
  margin-top: 16px;
  padding: 8px;
  border-color: #000;
  border-width: 1px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

export const AddCardText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
`