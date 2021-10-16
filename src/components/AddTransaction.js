import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {

    const [text,setText] = useState('');
    const [ammount,setAmmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) =>{
        e.preventDefault();
        const newTransaction = {
            id:Math.floor(Math.random()*100000),
            text,
            ammount: +ammount
        }
        addTransaction(newTransaction);
        setText('');
        setAmmount('');
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" id="amount" value={ammount} onChange={(e)=> setAmmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;