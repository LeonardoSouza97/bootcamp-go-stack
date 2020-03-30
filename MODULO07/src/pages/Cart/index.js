import React from 'react';

import { MdDelete, MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { connect } from 'react-redux';
import { Container, ProductTable, Total } from './styles';


function Cart({ cart, dispatch }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <th />
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th />
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img
                  src={product.image}
                  alt={product.title} />
              </td>
              <td>
                <span>{product.title}</span>
                <strong>{product.priceFormatted}</strong>
              </td>
              <td>
                <div>
                  <button type='button'>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type='button'>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
              </td>
              <td>
                <div>
                  <button type='button'>
                    <MdDelete size={20} color="#7159c1" onClick={() => dispatch({type: 'REMOVE_FROM_CART', id : product.id})}/>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type='button'>Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$129,90</strong>
        </Total>
      </footer>
    </Container >
  );
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Cart);
