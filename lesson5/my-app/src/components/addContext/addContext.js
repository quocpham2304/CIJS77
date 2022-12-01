import {useState, createContext} from 'react'

const AddContext = createContext()

function AddProvider({ children}) {
    const [moneys,outComes] = useState([]);
    const [dates,setDates] = useState([]);
    const [notes,setNotes] = useState([]);
    const [money,outCome] = useState("");
    const [date,setDate] = useState("");
    const [note,setNote] = useState("");
    const handleSubmit = () => {
        outComes(prev =>[...prev,money])
        outCome('')
        setDates(prev =>[...prev,date])
        setDate('')
        setNotes(prev =>[...prev,note])
    }
    const handleSubmitForm = e => {
        e.preventDefault();
        console.log("amount:", money);
        console.log("note", note);
        console.log("date",date);
    
    }
    const value ={ money,date,note, handleSubmitForm}
    return(
        <AddContext.Provider value={value}>
        {children}
        </AddContext.Provider>
    )
}
export {AddContext, AddProvider } ;