
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
 MDBRipple,
} from "mdb-react-ui-kit";
import { MDBBtn } from 'mdb-react-ui-kit';
import styles from './Cards.module.css'

const ProductsPage = () => {

    const [data, setData] = useState([]);

  const callProductApi = () => {
   
   fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    callProductApi();
  }, []);

  return (
    <>
    <MDBContainer fluid className="my-5 text-center">
    <h4 className="mt-4 mb-5">
      <strong>Products</strong>
    </h4>
    <MDBRow>
      {data.map((products, index) => (
        <MDBCol key={index} md="12" lg="4" className="mb-4">
        <MDBCard className={styles.card}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image rounded hover-zoom"
        >
          <MDBCardImage
            src={products.image}
            fluid
            //className="w-60"
            width={200}
          />
          <a href="#!">
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100">
                <h5>
                  <span className="badge bg-primary ms-2">New</span>
                </h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <a href="#!" className="text-reset">
            <h5 className="card-title mb-3">{products.title}</h5>
          </a>
          <a href="#!" className="text-reset">
            <p>{products.category}</p>
          </a>
          <h6 className="mb-3">${products.price}</h6>
        </MDBCardBody>

        <Link to={`/singleproduct/${products.id}`}>
        <MDBBtn className='mx-2 mb-4' color='danger'>
        Show Details
      </MDBBtn>
            </Link>
      </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  </MDBContainer>
  
   
    </>
  );
}

export default ProductsPage