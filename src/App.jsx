import {useState} from 'react'
import './App.css'

function App() {
    const [color, setColor] = useState('green');
    const ChangeColor = () => {
        setTimeout(() => {
            setColor('pink');
        }, 3000);
    }
    ChangeColor();
    return (
        <div
            style={{
                backgroundColor: color,
                paddingTop: 20,
                width: 400,
                height: 80,
                margin: 'auto'
            }}
        >
        </div>
    )
}

export default App
