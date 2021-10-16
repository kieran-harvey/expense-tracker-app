import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const sign = transaction.ammount < 0 ? '-':'+';
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <li className={transaction.ammount < 0 ? 'minus':'plus'}>
        {transaction.text} <span>{sign}{Math.abs(transaction.ammount)}€</span>
            <button onClick={()=>deleteTransaction(transaction.id)}className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
