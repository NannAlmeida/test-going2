import { FC, useContext } from "react";
import { FlatList } from "react-native";

import { HomeCardItem } from "../HomeCardItem";
import { HomeContextProps } from "../../types";
import { HomeContext } from "../../contexts";
import * as S from "./styles";

export const HomeCard: FC = () => {
    const { products, cart, handleToggleItemToCart } = useContext(HomeContext) as HomeContextProps;

    const _renderItem = ({ item }: any) => (
        <HomeCardItem
            {...item}
            isAddedInCart={cart?.some(cartItem => cartItem.id === item.id)}
            onAddInCart={() => handleToggleItemToCart(item.id)}
        />
    );

    return (
        <FlatList
            keyExtractor={item => item.id}
            data={products}
            renderItem={_renderItem}
            contentContainerStyle={{
                padding: 16,
            }}
            ItemSeparatorComponent={S.Spacer}
        />
    )
};