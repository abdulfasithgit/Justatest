import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
//Redux
import { listProducts } from '../redux/actions/productActions'
//components
import ProductComponent from '../components/Products'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch()
  const productsList = useSelector(state => state.productsList)
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const { loading, products, error } = productsList
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
        <Row>
          {products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductComponent product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
