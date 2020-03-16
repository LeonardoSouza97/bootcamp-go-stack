import React, { Component } from 'react';

import api from '../../services/api';

import { ProductList } from './styles';
import { MdShoppingBasket } from 'react-icons/md';

import { formatPrice } from '../../util/format';

import { connect } from 'react-redux';

class Home extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({ type: 'ADD_TO_CART', product })
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt="Tênis" />
            <strong>{product.title}</strong>
            <span>{product.priceFormmated}</span>

            <button type='button' onClick={() => this.handleAddProduct(product)}>
              <div>
                <MdShoppingBasket size={16} color="#FFF" /> 3
            </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }

}

export default connect()(Home);
