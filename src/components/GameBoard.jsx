export default function GameBoard({gameBoard}) {
    return <>
        <div className="game-board">
            {
                gameBoard.map((row, rowIndex) => {
                    return <li key={rowIndex} className="rows">
                        <ol>
                            {
                               row.map((col, colIndex)=>{
                                return <li key={colIndex}>
                                        <button>rowIndex-colIndex</button>
                                </li>
                               })
                            }
                        </ol>
                    </li>
                })
            }
        </div>
    </>
}
// return <ol id="game-board">
//         {board.map((row, rowIndex) => {
//             return <li key={rowIndex}>
//                 <ol>
//                     {row.map((playerSymbol, colIndex) => {
//                         return <li key={colIndex}>
//                             <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol != null}>{playerSymbol}</button>
//                         </li>
//                     })}
//                 </ol>
//             </li>
//         })}
//     </ol>