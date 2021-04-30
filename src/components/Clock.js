import React, {useState, useEffect} from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';

const MyClock = () => {

    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date()),
            1000
        );

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
            <Clock value={value} size={window.innerHeight / 11}/>
            //Clock cannot be styled using 'vh' value so I used a workaround
    )
}

export default MyClock;
