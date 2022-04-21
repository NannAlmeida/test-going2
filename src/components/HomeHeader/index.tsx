import { FC, useContext } from 'react';
import Feather from "@expo/vector-icons/Feather";

import { HomeContext } from "../../contexts";
import { HomeContextProps } from '../../types';

import * as S from './styles';

export const HomeHeader: FC = () => {

  const { cart } = useContext(HomeContext) as HomeContextProps;

  return (
    <S.Container>
      <Feather name="menu" size={24} color="#000" />

      <S.CartWrapper>
        <Feather name="shopping-cart" size={24} color="#000" />
        <S.CartDotNumber>
          {cart?.length}
        </S.CartDotNumber>
      </S.CartWrapper>
    </S.Container>
  );
};
