import React from 'react';

import { ProductList } from './styles';
import { MdShoppingBasket } from 'react-icons/md';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis esportivo</strong>
        <span>R$129,00</span>

        <button type='button'>
          <div>
            <MdShoppingBasket size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis esportivo</strong>
        <span>R$129,00</span>

        <button type='button'>
          <div>
            <MdShoppingBasket size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis esportivo</strong>
        <span>R$129,00</span>

        <button type='button'>
          <div>
            <MdShoppingBasket size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis esportivo</strong>
        <span>R$129,00</span>

        <button type='button'>
          <div>
            <MdShoppingBasket size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis esportivo</strong>
        <span>R$129,00</span>

        <button type='button'>
          <div>
            <MdShoppingBasket size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis esportivo</strong>
        <span>R$129,00</span>

        <button type='button'>
          <div>
            <MdShoppingBasket size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
