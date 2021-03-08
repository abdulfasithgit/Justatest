import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_REPORT_REQUEST,
  PRODUCT_REPORT_SUCCESS,
  PRODUCT_REPORT_FAILURE
} from '../constants/productConstants'

export const listProducts = () => async (
  dispatch,
  getState
)  => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST
    })
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get('/api/products', config)
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const productReport = (id) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRODUCT_REPORT_REQUEST
    })
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/products/${id}`, config)
    dispatch({
      type: PRODUCT_REPORT_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_REPORT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
