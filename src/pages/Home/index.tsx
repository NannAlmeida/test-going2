import { useState } from 'react';
import { StatusBar } from 'react-native';

import { HomeHeader, HomeCard } from '../../components';
import { HomeContext } from '../../contexts';
import { CartType } from '../../types';
import { products } from '../../utils';
import * as S from './styles';

export function Home() {
  const [cart, setCart] = useState<CartType[]>([]);

  const handleToggleItemToCart = (itemId: string) => {
    const hasInCart = cart.find(item => item.id === itemId);

    hasInCart ?
      setCart(old => old.filter(item => item.id !== itemId))
      :
      setCart(old => [...old, { id: itemId, quantity: 1 }]);
  }

  return (
    <HomeContext.Provider value={{ products, cart, handleToggleItemToCart }}>
      <S.Container>
        <S.Wrapper>
          <StatusBar barStyle="dark-content" />
          <HomeHeader />
          <HomeCard />
        </S.Wrapper>
      </S.Container>
    </HomeContext.Provider>
  );
}