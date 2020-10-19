import axios from 'axios';

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */

export const getProducts = ({ products }) => products;

/* ACTIONS */

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });


/* INITIAL STATE */

const initialState = [];

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload];
    default:
      return statePart;
  }

};

export const loadProductsRequest = () => {
  return dispatch => {

    axios.get('http://localhost:8000/api/products').then(res => {
      dispatch(loadProducts(res.data));
    })

      .catch(err => {
        console.log(err.message);
      });
  };
};
/* THUNKS */

// export const loadProductsRequest = () => {
//   return dispatch => {
//     console.log('Request started...');
//     setTimeout(() => {
//       const arr = [{ id: 'a3fssdc1', title: 'Product 1', content: 'Lorem Ipsum' }];
//       dispatch(loadProducts(arr));
//       console.log('Request finished after 2sec!');
//     }, 2000);
//   };
// };