import React from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';

import './CartTable.scss';

const CartTable = ({ items, total }) => {

  if (!total) {
    return null
  }

  return (
    <div className='tableWrapper'>
      <div className='title'>
        <h4>Your Order</h4>
        <p>Total: ${total}</p>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th className='actions'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item, idx) => {
              return (
                <tr key={idx}>
                  <TableRow
                    item={item}
                    idx={idx}
                  />
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

const mapToStateProps = ({ cartList, allOrder }) => {
  return {
    items: cartList,
    total: allOrder,
  }
};

export default connect(mapToStateProps)(CartTable);

