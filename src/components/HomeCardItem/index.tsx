import React from 'react';

import { HomeCardItemProps } from '../../types';
import * as S from './styles';

export const HomeCardItem: React.FC<HomeCardItemProps> = ({
  name,
  imageUrl,
  price,
  isAddedInCart,
  onAddInCart
}) => {
  return (
    <S.Container>
      <S.ItemHeader>
        <S.Image
          source={{
            uri: imageUrl
          }}
        />

        <S.ItemInfo>
          <S.Name>
            {name}
          </S.Name>

          <S.Price>
            R$ {price}
          </S.Price>
        </S.ItemInfo>
      </S.ItemHeader>

      <S.AddCartButton activeOpacity={0.4} onPress={onAddInCart}>
        <S.AddCardText>
          {isAddedInCart ? 'Remover ao carrinho' : 'Adicionar ao carrinho'}
        </S.AddCardText>
      </S.AddCartButton>
    </S.Container>
  );
};
