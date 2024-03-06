import '../styles.scss'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";


const NotePage = () => {

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [notes, setNotes] = useState(data);
    const [count, setCount] = useState(4);
 
    function remove(id) {
        setNotes(notes.filter((e) => e.key !== id));
    }
 
    function handle() {
        if (!title || !des) {
            window.alert("Incomplete input");
            return;
        }
        setNotes([...notes, { key: count, title: title, des: des }]);
        setCount(count + 1);
        setTitle("");
        setDes("");
        console.log(notes);
    }

return (
        <div className="note-container bg-dark text-white d-flex flex-column py-5 px-5 overflow-hidden">
            <Link to="/" className="text-decoration-none"><h1 className="fw-bold text-warning mb-5">Notes</h1></Link>
            <div className="d-flex align-items-start w-100">
                <div className="d-flex flex-column gap-2 justify-content-center w-50 px-5">
                        <h3>Add Notes</h3>
                        <input
                            className="rounded-2 px-3 py-2 w-75"
                            type="text"
                            id="title"
                            placeHolder="Add title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        ></input>
                        <input
                            className="rounded-2 px-3 py-2 w-75"
                            type="text"
                            id="description"
                            placeholder="Notes"
                            value={des}
                            onChange={(e) => {
                                setDes(e.target.value);
                            }}
                        ></input>
                        <button className="btn btn-success  w-75" type="submit" onClick={handle}>
                            Submit
                        </button>
                </div>

                <div className="d-flex flex-wrap gap-5 w-100 h-screen">
                    {notes.map((e) => (
                        <div className="note-card w-25 d-flex flex-column bg-gray-800 px-4 py-3 rounded-3 shadow">
                            <div className=''>    
                                <h4 className="fw-bold text-warning">Title: {e.title}</h4>
                                <p className="">{e.des}</p>
                            </div>
                            <button
                                type="input"
                                className="btn btn-danger"
                                onClick={() => remove(e.key)}
                            >
                                Done
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 


const data = [
    {
        key: 0,
        title: "React",
        des: "Finish React Todo App",
    },
    { 
        key: 1, title: "Studies",
        des: "Read ASP.Net docs" },
    {
        key: 2,
        title: "ASP.Net",
        des: "Create CRUD App",
    },
    {
        key: 3,
        title: "Personal",
        des: "Go to gym",
    },
];


export default NotePage