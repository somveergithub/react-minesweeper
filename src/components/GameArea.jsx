import { useEffect } from "react";
import GameBoard from "./GameBoard"
import PlayersArea from "./PlayersArea"

function initializeGameBoard(row, col){
    let gameBoard = [];
    for(let i=0; i<col; i++){
        gameBoard.push(new Array(row+1))
    }

    // for(let i=0; i<row; i++){
    //     for(let j=0; j<col; j++){
    //         gameBoard[i][j] = null
    //     }
    // }

    // console.log(gameBoard);
    return gameBoard;
}

function updateGameBord(bombs){
    let i = 10;
    return i;
}


export default function GameArea() {
    let initialGameBoard = initializeGameBoard(2,2);
    
    return <>
        <div className="game-area">
            <GameBoard gameBoard={initialGameBoard}/> 
            <PlayersArea /> 

        </div>
    </>
}