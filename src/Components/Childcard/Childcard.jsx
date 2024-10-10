import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

function Childcard({ jsonData }) {
    console.log(jsonData);

    return (
        <div>
            {
                jsonData.map(item => (
                    <MDBCard alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle>{item.id}</MDBCardTitle>
                            <MDBCardText>
                                {item.quote}
                            </MDBCardText>
                            <MDBCardText>
                                {item.author}
                            </MDBCardText>
                        
                        </MDBCardBody>
                    </MDBCard>
                ))
            }
        </div>
    )
}

export default Childcard