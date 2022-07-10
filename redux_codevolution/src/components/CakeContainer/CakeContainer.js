import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../../redux/features/cake/actions';

function CakeContainer() {
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const numOfCakes = useSelector(state => state.cake.numOfCakes);


  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
        <button onClick={()=>dispatch(buyCake(parseInt(number)))}>Buy Cake</button>
    </div>
  )
}

export default CakeContainer