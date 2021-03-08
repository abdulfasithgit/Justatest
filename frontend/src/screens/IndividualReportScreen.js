import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//Redux
import { productReport } from '../redux/actions/productActions'
//
import BarChart from '../components/BarChart'
import Loader from '../components/Loader'
import Message from '../components/Message'

const IndividualReportScreen = ({ match, history }) => {
  const dispatch = useDispatch()
  const productReports = useSelector(state => state.productReport)
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { loading, product, error } = productReports
  //console.log(productReports)
  //console.log("individual prod", productReports);
  var id = match.params.id
  useEffect(() => {
    if (userInfo) {
      dispatch(productReport(id))
    } else {
    
      history.push('/login');
    }
  }, [dispatch, history, id, userInfo])
  // const [productData, setProductData] = useState({})
  // setProductData(product);
  
  return (
    <>
      {
      loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <BarChart product={product} from="individual" />
      )
      }
    </>
  )
}

export default IndividualReportScreen
