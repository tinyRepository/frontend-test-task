import axios from 'axios';

let cart = localStorage.getItem('cart');

export default {
  state: {
    items: [
      {
        id: 1,
        cost: 1000000,
        oldCost: 2000000,
        title: '«Рождение Венеры» Сандро Боттичелли',
        image: 'card-1.jpg',
      },
      {
        id: 2,
        cost: 3000000,
        title: '«Тайная вечеря» Леонардо да Винчи',
        image: 'card-2.jpg',
      },
      {
        id: 3,
        cost: 5000000,
        oldCost: 6000000,
        title: '«Сотворение Адама» Микеланджело',
        image: 'card-3.jpg',
      },
      {
        id: 4,
        cost: 'sold',
        title: '«Урок анатомии» Рембрандт',
        image: 'card-4.jpg',
      },
    ],
    cart: cart ? JSON.parse(cart) : [],
  },

  getters: {
    cards: ({ items }) => items,
    checkPictureInCart: ({ cart }) => id => {
      return cart.some(todo => todo.id === id);
    },
  },

  actions: {
    async sendRequest({ commit }, id) {
      const testUrl = 'https://jsonplaceholder.typicode.com/posts';

      await axios(`${testUrl}/${id}`).then(data => {
        const { id } = data.data;
        commit('ADD_ITEM', id);
        commit('SAVE_CART');
      });
    },
  },

  mutations: {
    ADD_ITEM: (s, id) => {
      const foundItem = s.cart.find(i => i.id === id);
      const item = s.items.find(i => i.id === id);

      if (!foundItem) {
        s.cart.push(item);
      } else {
        s.cart = s.cart.filter(i => i !== foundItem);
      }
    },

    SAVE_CART: state => {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
};
