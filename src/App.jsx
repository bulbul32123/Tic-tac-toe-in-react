import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  return (
    <>
      <Board />
    </>
  )
}


function Board() {
  const [marks, setmarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState(1)
  const [Winplayer, setWinPlayer] = useState('Game On')

  useEffect(()=>{
    const combination =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let c of combination){
      if(marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1 ){
        setWinPlayer('Player 1 is Win');
      }
      else if(marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2 ){
        setWinPlayer('Player 2 is Win');
      }
    }
  },[marks])
  const changeMark = (position) => {
    let m = [...marks]
    if(m[position] === 0 ){
      m[position] = player
      setmarks(m)
      setPlayer(player === 1 ? 2 : 1 )
    }else{
      alert('Please Click on another Empty Box')
    }
  }
  const hadleReset = ()=>{
    setmarks([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setWinPlayer('Game On ');
  }
  return (
    <div className='Board'>
      <h1>{Winplayer}</h1>
      <div>
        <Block mark={marks[0]} position={0} changeMark={changeMark} />
        <Block mark={marks[1]} position={1} changeMark={changeMark} />
        <Block mark={marks[2]} position={2} changeMark={changeMark} />
      </div>
      <div>
        <Block mark={marks[3]} position={3} changeMark={changeMark} />
        <Block mark={marks[4]} position={4} changeMark={changeMark} />
        <Block mark={marks[5]} position={5} changeMark={changeMark} />
      </div>
      <div>
        <Block mark={marks[6]} position={6} changeMark={changeMark} />
        <Block mark={marks[7]} position={7} changeMark={changeMark} />
        <Block mark={marks[8]} position={8} changeMark={changeMark} />
      </div>
      <button  style={{border:'2px solid black', padding: '10px 13px', borderRadius: '4px', background: 'transparent',marginLeft: '15%', marginTop: '20px'}} onClick={()=>hadleReset()}>Reset</button>
    </div>
  )
}


function Block({ mark, changeMark, position }) {
  return (
    <div className={`Block mark${mark}`} onClick={() => changeMark(position)}>

    </div>
  )
}




