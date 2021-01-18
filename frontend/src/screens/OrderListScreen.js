import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listOrders } from '../actions/orderActions';

export default function OrderListScreen() {
  const orderList = useSelector(state => state.orderList)
  const { loading, error, orders } = orderList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrders());
  })
  return (
    <div>
      
    </div>
  )
}
