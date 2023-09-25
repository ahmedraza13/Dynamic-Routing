import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
  import styles from './Singleproduct.module.css'
import axios from "axios";

const SingleProduct = () => {
  const param = useParams();
  console.log("param", param);
  const [productData, setProductData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://fakestoreapi.com/products/${param.productid}`
      );
      setProductData(data.data);
    };
    fetchData();
  }, [param.productid]);
  return (
    <>
  
 
    <MDBCard className={styles.sincard}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={productData.image} fluid alt='...' width={200} />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{productData.name}</MDBCardTitle>
        <MDBCardText>
         {productData.title}
        </MDBCardText>
        <MDBBtn href='#' className={styles.btn}>Buy Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  


     
      
      
    </>

  );
};

export default SingleProduct;