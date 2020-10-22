import axios from 'axios';
import { API_URL } from '../config';

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */

export const getProducts = ({ products }) => products.data;
export const getProductsCounter = ({ products }) => products.amount;
export const getRequest = ({ products }) => products.request;
export const getSingleProduct = ({ products }) => products.singleProduct;
export const getPages = ({ products }) => Math.ceil(products.amount / products.productsPerPage);
export const getPresentPage = ({ products }) => products.presentPage;
export const getProductsSort = ({ products }) => {
  const sortProducts = [...products.data].sort((a, b) => {
    if (a[products.key] > b[products.key]) return products.direction === 'asc' ? 1 : -1;
    if (a[products.key] < b[products.key]) return products.direction === 'asc' ? -1 : 1;
    return 0;
  });
  return sortProducts;
};
export const getMenuState = ({ products }) => products.showMenu;
export const getCart = products => products.cart;

/* ACTIONS */

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const LOAD_PRODUCTS_PAGE = createActionName('LOAD_PRODUCTS_PAGE');
export const SORT_OPTIONS = createActionName('SORT_OPTIONS');
export const TOGGLE_MENU = createActionName('TOGGLE_MENU');
export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const CART_QTY = createActionName('CART_QTY');
export const REMOVE_QTY = createActionName('REMOVE_QTY');
export const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');


export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });
export const sortOptions = payload => ({ payload, type: SORT_OPTIONS });
export const toggleMenu = () => ({ type: TOGGLE_MENU });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const cartQty = payload => ({ payload, type: CART_QTY });
export const removeQty = payload => ({ payload, type: REMOVE_QTY });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  singleProduct: [],
  key: '',
  direction: '',
  amount: 0,
  productsPerPage: 6,
  productsPage: 1,
  showMenu: false,
  productAdd: [],
  summary: 0,
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
    case LOAD_SINGLE_PRODUCT:
      return { ...statePart, singleProduct: action.payload };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    case RESET_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: null } };
    case LOAD_PRODUCTS_PAGE:
      return {
        ...statePart,
        productsPerPage: action.payload.productsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.products],
      };
    case SORT_OPTIONS:
      return {
        ...statePart,
        key: action.payload.key,
        direction: action.payload.direction,
      };
    case TOGGLE_MENU:
      let menuState = !statePart.showMenu;
      return {
        ...statePart,
        showMenu: menuState
      };
    case ADD_TO_CART:
      let productAdd = [...statePart.productAdd, action.payload];
      statePart.productAdd.map((products) => {
        if (products.id === action.payload.id) {
          products.qty += 1;
          productAdd = [...statePart.productAdd]
        }
      })
      return {
        productAdd: productAdd,
        summary: statePart.summary + action.payload.price
      };
    case CART_QTY:
      statePart.productAdd.map((products) => {
        if (products.id === action.payload.id) {
          products.qty += 1
        }
      }) 
      return {
        productAdd: [...statePart.productAdd],
        summary: statePart.summary + action.payload.price,
      };
    case REMOVE_QTY:
      statePart.productAdd.map((products) => {
        if (products.id === action.payload.id) {
          products.qty -= 1
        }
      })
      return {
        productAdd: statePart.productAdd.filter(function (object) { return object.qty !== 0 }),
        summary: statePart.summary - action.payload.price
      };
    case REMOVE_PRODUCT:
      return {
        productAdd: [],
        summary: 0
      };

    default:
      return statePart;
  }

};

export const loadProductsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (err) {
      dispatch(errorRequest(err.message));
    }
  };
};

export const loadSingleProductRequest = (id) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/product/${id}`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadSingleProduct(res.data));
      dispatch(endRequest());

    } catch (err) {
      dispatch(errorRequest(err.message));
    }
  };
};

export const loadProductsByPageRequest = (page, productsPerPage) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;

      let res = await axios.get(`${API_URL}/products/range/${startAt}/${limit}`);

      const payload = {
        products: res.data.products,
        amount: res.data.amount,
        productsPerPage,
        presentPage: page,
      };

      dispatch(loadProductsByPage(payload));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
