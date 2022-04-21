export const products = Array.from({ length: 30 }).map((item, i) => ({
    id: 'item-' + (i + 1),
    name: 'Item ' + (i + 1),
    imageUrl: 'https://picsum.photos/id/400/400',
    price: 100
}));