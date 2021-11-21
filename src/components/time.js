import React,{useState} from 'react'
import styled from 'styled-components'

function Time() {

    const x = new Date()
    let month = x.getMonth() + 1 
    let day = x.getDay()
    const year = x.getFullYear()
    if (month <10 ){month='0' + month;}
    if (day <10 ){day='0' + day;}

    const finaldate = `${month}-${day}-${year}`

    let time = new Date().toLocaleTimeString();
	let [ctime, setCTime] = useState();
	const updateTime = () => {
		time = new Date().toLocaleTimeString();
		setCTime(time);
	}
	setInterval(updateTime, 1000);

    return (
        <Timediv>
            <h1>{ctime}</h1>
            <h3>{finaldate}</h3>
        </Timediv>
    )
}

const Timediv = styled.div`
min-height: 10vh;
text-align: center;

h1{
    font-size: 3rem;
    color: #fff;
    font-weight: 500;
}

h3{
    font-size: 2rem;
    font-weight: 300;
    color: #fff;
}

`

export default Time
