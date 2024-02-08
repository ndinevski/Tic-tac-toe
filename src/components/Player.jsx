import {useState} from "react";


export default function Player({initialName, symbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        setIsEditing( prevState => !prevState);
    };

    const handleChangeName = (event) => {
        setPlayerName(event.target.value);
    };
    
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? 
                <input type="text" required value={playerName} onChange={(event) => handleChangeName(event)}/>
                :
                <span className="player-name">{playerName}</span>
                }
              <span className="player-symbol">{symbol}</span>
            </span> 
            <button onClick={() => handleClick()}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}