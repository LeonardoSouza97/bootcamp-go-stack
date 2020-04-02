import React from 'react';

import { MdDelete, MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { Container, ProductTable, Total } from './styles';

import { formatPrice } from '../../util/format';

import * as cartActions from '../../store/models/cart/actions';


function Cart({ cart, total, removeFromToCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <th> </th>
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th> </th>
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
                    <MdRemoveCircleOutline onClick={() => decrement(product)} size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type='button'>
                    <MdAddCircleOutline onClick={() => increment(product)} size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <div>
                  <button type='button'>
                    <MdDelete size={20} color="#7159c1" onClick={() => removeFromToCart(product.id)} />
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
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container >
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({ ...product, subtotal: formatPrice(product.amount * product.price), })),
  total: formatPrice(state.cart.reduce((total, product) => { return total + product.amount * product.price }, 0))
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
