import { atom, selector } from 'recoil';

const localStorageEffect = key => ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue));
    });
};

export const cartState = atom({
    key: 'cart',
    default: [],
    effects: [
        localStorageEffect('cart'),
    ]
});

export const addToCart = (cart, item) => {
    const newCart = [...cart];
    const foundIndex = cart.findIndex(x => x.id === item._id);
    if (foundIndex >= 0) {
        newCart[foundIndex] = {
            ...cart[foundIndex],
            quantity: cart[foundIndex].quantity + 1,
        };
        return newCart;
    }
    newCart.push({
        id: item._id,
        product: item,
        quantity: 1,
    });
    return newCart;
};

export const deleteItemCart = (cart, idDelete   ) => {
    const newCart = [...cart];
    return newCart.filter((item) => {
        return item.id !== idDelete
    })
};

export const cartQuantity = selector({
    key: 'cartQuantity',
    get: ({ get }) => {
        const cart = get(cartState);
        return cart.reduce((total, item) => {
            return total + (item.quantity);
        }, 0);
    }
});

export const cartTotal = selector({
    key: 'cartTotal',
    get: ({ get }) => {
        const cart = get(cartState);
        return cart.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }
});