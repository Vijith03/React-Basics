import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
function Product({ jsonData }) {
  console.log(jsonData);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {
        jsonData.map(item=>(
          <div >
          <MDBCard alignment='center' className='mb-4' style={{ maxWidth: '22rem', borderRadius: '10px', overflow: 'hidden' }}>
          <MDBCardImage  src={item.images} position='top' alt='...'  style={{ height: '200px', objectFit: 'cover' }}  />
          <MDBCardBody>
            <MDBCardTitle>Title: {item.title} </MDBCardTitle>
            <MDBCardText>
            Category: {item.category}
            </MDBCardText>
            <MDBCardText>
            Price  {item.price}
            </MDBCardText>
            <MDBCardText>
            Rating : {item.rating}
            </MDBCardText>
            <MDBBtn href='#'>Buy now</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </div>
        ))
      }
    </div>
  )
}

export default Product