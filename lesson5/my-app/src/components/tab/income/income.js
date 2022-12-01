import {useState} from 'react';
import Tabs from '../tab';
import "./income.css";

function Income() {
    const [moneys,inComes] = useState([]);
    const [dates,setDates] = useState([]);
    const [notes,setNotes] = useState([]);
    const [money,inCome] = useState("");
    const [date,setDate] = useState("");
    const [note,setNote] = useState("");
    const handleSubmitForm = e => {
        e.preventDefault();
        console.log("amount:", money);
        console.log("note", note);
        console.log("date",date);
    }
    const handleSubmit = () => {
        inComes(prev =>[...prev,money])
        inCome('')
        setDates(prev =>[...prev,date])
        setDate('')
        setNotes(prev =>[...prev,note])
        setNote('')
    }
    return(
    
            <form className='hinhvuongnho' onSubmit={handleSubmitForm} >    
             <div>
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
            <input className='amount' type="text" value={money} onChange = {(e) => inCome(e.target.value)} />
            </label>
            
            <label className='date-name'> date
            <input className='date' type="date" value={date} onChange = {(e) => setDate(e.target.value)} />
            </label>
            
            <label className='note-name'> Note
            <textarea className='note' value={note} onChange = {(e) => setNote(e.target.value)}></textarea>
            </label>
            <div className='nut'>
            <button className='chunut' type="submit" onClick={handleSubmit}>add new transaction</button>
            </div>
           
            </form>
            
      
        
    )
}
export default Income;