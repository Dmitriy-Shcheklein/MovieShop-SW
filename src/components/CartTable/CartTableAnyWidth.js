import React from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '80%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  orderTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& h4': {
      color: '#ffffff',
      fontSize: '1.5rem',
    },
    '& p': {
      color: '#ffffff',
      fontSize: '1.5rem',
      borderBottom: '1px solid #ffffff'
    }
  },
  table: {
    width: '100%',
    color: '#ffffff',
    borderCollapse: 'collapse',
    border: '1px',
    margin: '0 auto',
    textAlign: 'left',
    '& th, td': {
      border: '1px solid #e9e9e9',
      padding: '5px',
    }
  },
  actions: {
    width: '40%',
    textAlign: 'right',
  }
})

const CartTableAnyWidth = ({ items, total }) => {

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <div className={classes.orderTitle}>
        <h4>Your Order</h4>
        <p>Total: ${total}</p>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th className={classes.actions}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item, idx) => {
              return (
                <tr
                  key={idx}>
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

export default connect(mapToStateProps)(CartTableAnyWidth);