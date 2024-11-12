import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FeaturedProducts() {
  return (
    <>
        <Container className="mt-5">
            <h1 className='text-center'>Featured Products </h1>
          <Row>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b31e49c2-400f-4317-a564-c2d26e8017c4/W+PEGASUS+TRAIL+5+GTX.png" alt="Card image" />
                <Card.Body>
                  <Card.Title>Nike Pegasus 41 GORE-TEX </Card.Title>
                  <Card.Text>
                  Women's Waterproof Road Running Shoes
                  </Card.Text>
                  <h5>MRP :₹ 14 995.00</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/66a6723b-81ca-404b-b41f-203f5b34d2f5/W+AIR+ZM+PEGASUS+41+GTX.png" alt="Card image" />
                <Card.Body>
                <Card.Title>Nike Pegasus 41 GORE-TEX </Card.Title>
                  <Card.Text>
                  Women's Waterproof Road Running Shoes
                  </Card.Text>
                  <h5>MRP :₹ 14 995.00</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/224023ec-160e-447d-a88c-a96718ce69e5/W+PEGASUS+PLUS.png" alt="Card image" />
                <Card.Body>
                <Card.Title>Nike Pegasus 41 GORE-TEX </Card.Title>
                  <Card.Text>
                  Women's Waterproof Road Running Shoes
                  </Card.Text>
                  <h5>MRP :₹ 14 995.00</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9b1976e6-93eb-41f3-934d-858abacd24b7/W+NIKE+REACTX+PEGASUS+TRAIL+5.png" alt="Card image" />
                <Card.Body>
                <Card.Title>Nike Pegasus 41 GORE-TEX </Card.Title>
                  <Card.Text>
                  Women's Waterproof Road Running Shoes
                  </Card.Text>
                  <h5>MRP :₹ 14 995.00</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
       <Row>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/34a48650-af51-494b-8b7f-ebc4d3a53ad3/zoom-vomero-roam-winterized-shoes-DLzKkR.png" alt="Card image" />
            <Card.Body>
              <Card.Title>Nike Pegasus 41 GORE-TEX </Card.Title>
              <Card.Text>
              Women's Waterproof Road Running Shoes
              </Card.Text>
              <h5>MRP :₹ 14 995.00</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/7eb3b84a-8dbd-40a4-bc9c-a877b7853f67/wio-11-road-running-shoes-lnpWld.png" alt="Card image" />
            <Card.Body>
            <Card.Title>Nike Pegasus 41 GORE-TEX </Card.Title>
              <Card.Text>
              Women's Waterproof Road Running Shoes
              </Card.Text>
              <h5>MRP :₹ 14 995.00</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/49fc753b-cc45-4a22-85b9-4760346fccd5/zoom-vomero-roam-winterized-shoes-mp7nwT.png" alt="Card image" />
            <Card.Body>
            <Card.Title>Nike Pegasus 41 GORE-TEX </Card.Title>
              <Card.Text>
              Women's Waterproof Road Running Shoes
              </Card.Text>
              <h5>MRP :₹ 14 995.00</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/819f55b9-afd5-4b5c-bd0b-8bc8ca73eed0/v2k-run-shoes-MsnNQB.png" alt="Card image" />
            <Card.Body>
            <Card.Title>Nike Pegasus 41 GORE-TEX </Card.Title>
              <Card.Text>
              Women's Waterproof Road Running Shoes
              </Card.Text>
              <h5>MRP :₹ 14 995.00</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    
  );
}

export default FeaturedProducts;
