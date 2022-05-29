import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from 'react';
import 'react-dropdown/style.css';

const publishers = [
  'one', 'two', 'three'
];

const genres =[
    'Sandbox', 'Real-time strategy (RTS)', 'Shooters (FPS and TPS)', 'Multiplayer online battle arena (MOBA)',
    'Role-playing (RPG, ARPG, and More)', 'Simulation and sports', 'Puzzlers and party games', 'Action-adventure',
    'Survival and horror', 'Platformer'
];

export default function AddGame() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <form>
                <label>Name: <input type="text" name = "name" /></label>
                <label>Publisher: 
                    <Dropdown options={publishers} onChange={this._onSelect} value={publishers[0]} placeholder="Select an option" />;    
                </label>
                <label>Game Genre: 
                    <Dropdown options={genres} onChange={this._onSelect} value={genres[0]} placeholder="Select an option" />;    
                </label>
                <label>Price: 
                    <input type="number" name = "price" />  
                </label>
                < input type = "submit" value = "Submit" />
            </form>
        </main>
    );
}