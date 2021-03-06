import React from 'react';
import { PropTypes } from 'prop-types';
import v4 from 'uuid/v4';
import { Link } from 'react-router-dom';

import Spinner from '../../common/Spinner/Spinner';
import PageTitle from '../../common/PageTitle/PageTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './CartSummary.scss';
import BackButton from '../../common/BackButton/BackButton';
import ModalPay from '../../features/Modal/ModalPay';

const Summary = (props) => {

    const { cart, request, price, discountStatus } = props;

    if (request.pending === false && request.success === true && cart.length > 0)
        return (
            <Container className="summary">
                <PageTitle>Order summary</PageTitle>
                <div className="summary-wrapper">
                    <BackButton />
                    <div className="scroll-wrapper">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(el =>
                                    <tr key={v4()}>
                                        <td>{el.name}</td>
                                        <td>${el.price}</td>
                                        <td>{el.qty}</td>
                                        <td>${(el.price * el.qty).toFixed(2)}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                    <div className="summary-footer">
                        <span><strong>Discount:</strong> {discountStatus ? '10%' : '0'}</span>
                        <span><strong>Grand total:</strong> ${price}</span>
                        <div className="summary-buttons">
                            <Link to="/">
                                <Button color="info">
                                    <FontAwesomeIcon className="back-icon" icon={faChevronLeft} />
                                    Continue shopping
                  </Button>
                            </Link>
                            <ModalPay />
                        </div>
                    </div>
                </div>
            </Container>
        );

    else if (request.pending || request.success === null)
        return <Spinner />
}

Summary.propTypes = {
    cart: PropTypes.array.isRequired,
    request: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    discountStatus: PropTypes.bool.isRequired,
}

export default Summary; 