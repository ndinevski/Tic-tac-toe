import {useEffect, useState} from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const checkWin = (board) => {
    for(let i in [0,1,2]){
        if(board[i][0]!=null && board[i][0] === board[i][1] && board[i][0] === board[i][2]){
            return true;
        }
        if(board[0][i]!=null && board[0][i] === board[1][i] && board[0][i] === board[2][i]){
            return true;
        }
    }

    if(board[0][0]!=null && board[0][0] === board[1][1] && board[0][0] === board[2][2]){
        return true;
    }

    if(board[2][0]!=null && board[2][0] === board[1][1] && board[2][0] === board[0][2]){
        return true;
    }

    return false;
};

export default function GameBoard ({onSelectSquare, activeSymbol, getLog, gameOver}) {
    const [gameBoardState, setGameBoardState] = useState(initialGameBoard);
    const [win, setWin] = useState(false);
    const [winningSymbol, setWinningSymbol] = useState('X');
    
    const handleSelect = (x,y) =>{
        let newBoard = Object.assign([], gameBoardState);
        newBoard[x][y] = activeSymbol;

        setGameBoardState(newBoard);

        onSelectSquare();

        getLog(x, y);
        
        const result = checkWin(newBoard);
        setWin(result);
        if(result)
            setWinningSymbol(activeSymbol);
    };

    if(win){
        gameOver(winningSymbol);
    };


    return (
        <ol id="game-board">
            {gameBoardState.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, colIndex)=>{
                            return <li key={colIndex}>
                                <button onClick={() => handleSelect(rowIndex, colIndex)} disabled={symbol!=null}>{symbol}</button>
                            </li>
                        })}
                    </ol>    
                </li>
            })}
        </ol>
    );
}