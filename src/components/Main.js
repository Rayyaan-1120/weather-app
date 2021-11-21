import React,{useState} from 'react'
import styled from 'styled-components'
import Time from './time'
import Weathercard from './weathercard'
import {pushdata,query} from '../features/weatherdata'
import { useDispatch,useSelector } from 'react-redux'
import Navigate from '../components/navigate'

function Main() {

  const textquery = useSelector((state) => state.data.query);

  const key = '2369b60cfbbf472d92a192549210910'
    const dispatch = useDispatch()

     const getdata = async (query) => {
         const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`)
         dispatch(pushdata(await data.json()))
     }

    return (
        <Maindiv >
            <Navigate />
            <Time />
            <input type="text" onChange={(e) => dispatch(query(e.target.value))}/>
            <button onClick={() => getdata(textquery)}>
                <span>Search</span>
            </button>
            <Weathercard />
        </Maindiv>
    )
}

const Maindiv = styled.div`
width: 100%;
background-image: url('https://source.unsplash.com/random');
min-height: 100vh;
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

input{
    background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5.5px );
-webkit-backdrop-filter: blur( 5.5px );
border-radius: 6px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding: 1rem;
width: 15rem;
color: #04040a;
font-size: 1.6rem;

&:focus{
    border: none;
    outline: transparent;
}
}

button {
 align-items: center;
 background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
 border: 0;
 border-radius: 8px;
 box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
 box-sizing: border-box;
 color: #FFFFFF;
 display: flex;
 font-family: Phantomsans, sans-serif;
 font-size: 18px;
 justify-content: center;
 line-height: 1em;
 max-width: 100%;
 min-width: 130px;
 padding: 2px;
 text-decoration: none;
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 white-space: nowrap;
 cursor: pointer;
 transition: all .3s;
 margin-top: 1rem;

 &:active,&:focus{
    outline: 0;

 }

 span {
 background-color: rgb(5, 6, 45);
 padding: 10px 14px;
 border-radius: 6px;
 width: 100%;
 height: 100%;
 transition: 300ms;
 &:hover {
 background: none;
}
}

}

`;

export default Main
