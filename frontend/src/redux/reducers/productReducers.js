import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_REPORT_REQUEST,
  PRODUCT_REPORT_SUCCESS,
  PRODUCT_REPORT_FAILURE
} from '../constants/productConstants'

export const productReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, ...state}

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }

    case PRODUCT_LIST_FAILURE:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const productReportReducers = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_REPORT_REQUEST:
      return { loading: true, ...state }

    case PRODUCT_REPORT_SUCCESS:
      return { loading: false, product: action.payload }

    case PRODUCT_REPORT_FAILURE:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
