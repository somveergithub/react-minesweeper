import { useState } from "react"
import { useEffect } from "react";

function startTimer(setMyTimer) {
    const myinterval = useEffect(() => {
        const interval = setInterval(() => {
            setMyTimer((prevState) => {
                return getRemainingTime(prevState)
            })
            console.log(new Date());
        }, 1000);

        return () => clearInterval(interval)

    }, [setMyTimer]);
    console.log('myinteravl:', myinterval);
}

function getRemainingTime(e) {
    let [hours, mins, seconds] = e.split(':')
    // console.log(hours, mins, seconds);
    if (seconds > 0) {
        seconds--;
    } else if (mins > 0) {
        mins--;
        seconds = '59'
    }
    else if (hours > 0) {
        hours--;
        mins = '59'
    }
    let newtmp = hours + ':' + mins + ':' + seconds;
    return newtmp
}

export default function PlayersArea() {
    const [timer, setMyTimer] = useState('00:00:10')

    return <>
        <div className="players-area">
            PlayersArea
            <div>
                <div>
                    {/* {startTimer(setMyTimer)} */}
                    {/* <p>{timer}</p> */}
                </div>
                {/* Form */}

            </div>
        </div>
    </>
}