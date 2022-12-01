import {useState} from 'react';
import "./expanse.css"
import { AddProvider } from '../../addContext/addContext';
import { useContext } from 'react';
import { AddContext } from '../../addContext/addContext';

function Expanse() {
    const [moneys,outComes] = useState([]);
    const [dates,setDates] = useState([]);
    const [notes,setNotes] = useState([]);
    const [money,outCome] = useState("");
    const [date,setDate] = useState("");
    const [note,setNote] = useState("");
    
    const handleSubmitForm = e => {
        e.preventDefault();
        console.log("amount:", money);
        console.log("note", note);
        console.log("date",date);
    
    }
    const handleSubmit = () => {
        outComes(prev =>[...prev,money])
        outCome('')
        setDates(prev =>[...prev,date])
        setDate('')
        setNotes(prev =>[...prev,note])
    }

    const add = useContext(AddContext)
    return(
       <AddContext.Provider>
            <form className='hinhvuongnho' onSubmit={handleSubmitForm} >   
            <div className='amount1'>
                {moneys.map((money,index) => (
                <li key = {index}>{money}</li>
            ) )}
            {dates.map((date,index) => (
                <li key = {index}>{date}</li>
            ) )}
            {notes.map((note,index) => (
                <li key = {index}>{note}</li>
            ) )}
            </div>    
            <label className='amount-name'> amount
            <input className='amount' type="text" value={money} onChange = {(e) => outCome(e.target.value)} />
            </label>
            
            <label className='date-name'> date
            <input className='date' type="date" value={date} onChange = {(e) => setDate(e.target.value)} />
            </label>
            
            <label className='note-name'> Note
            <textarea className='note' value={note} onChange = {(e) => setNote(e.target.value)}></textarea>
            </label>
            <div className='nut'>
            <button className='chunut' type="submit" onClick={add.handleSubmitForm} >add new transaction</button>
            </div>
            
            </form>
    </AddContext.Provider>
    )
}
export default Expanse;