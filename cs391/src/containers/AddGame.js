import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

export default function AddGame() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <form>
                <label>Name: <input type="text" name = "name" /></label>
                <label>Publisher: 
                    <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;    
                </label>
                
                < input type = "submit" value = "Submit" />
            </form>
        </main>
    );
}