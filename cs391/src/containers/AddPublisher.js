import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function AddPublisher() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    }

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2> Fill out the form to add a new publisher: </h2>
            <form onSubmit={handleSubmit}>
                <label> Publisher name:         <input type="text"      name="name"         value={inputs.name || ""}           onChange={handleChange} /> <br/> </label>
                <label> Publisher description:  <input type="textarea"  name="description"  value={inputs.description || ""}    onChange={handleChange} /> <br/> </label>
                <label> Founder:                <input type="text"      name="founder"      value={inputs.founder || ""}        onChange={handleChange} /> <br/> </label>
                <label> Founding date:          <input type="date"      name="foundingdate" value={inputs.foundingdate || ""}   onChange={handleChange} /> <br/> </label>
                <label> Game count: <select onChange={handleChange}>
                    <option value="twenty">1-20</option>
                    <option value="fifty">21-50</option>
                    <option value="onehudnred">51-100</option>
                    <option value="more">101+</option>
                </select> <br/> </label>
                <input type="submit" />
            </form>
        </main>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AddPublisher />);