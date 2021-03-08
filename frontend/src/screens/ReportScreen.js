import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//Redux
import { listProducts } from '../redux/actions/productActions'
//components
import Loader from '../components/Loader'
import Message from '../components/Message'
import BarChart from '../components/BarChart'

const ReportScreen = ({ history }) => {
  const dispatch = useDispatch()
  const productsList = useSelector(state => state.productsList)
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const { loading, products, error } = productsList
  //console.log(productsList);
  //
  useEffect(() => {
    if (userInfo) {
      dispatch(listProducts())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])
  //console.log("Home Screen",products)
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <BarChart products={products} from="report"/>
      )}
    </>
  )
}

export default ReportScreen
