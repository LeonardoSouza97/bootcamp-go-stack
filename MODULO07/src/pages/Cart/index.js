import React from 'react';

import { MdDelete, MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ims=326x"
                alt="Tênis" />
            </td>
            <td>
              <span>Tênis Esportivo</span>
              <strong>R$258,80</strong>
            </td>
            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={3} />
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
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type='button'>Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$129,90</strong>
        </Total>
      </footer>
    </Container>
  );
}