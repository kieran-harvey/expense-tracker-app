import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalContext);
    const ammounts = transactions.map(transaction => transaction.ammount);

    const income = ammounts
    .filter(item => item > 0)
    .reduce((acc,item)=>(acc+=item),0)
    .toFixed(2);

    const expense = ammounts
    .filter(item => item<0)
    .reduce((acc,item)=>(acc+=item),0)
    .toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
      </div>
    )
}

export default IncomeExpenses;
