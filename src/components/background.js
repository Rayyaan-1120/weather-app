import React from 'react'
import styled from 'styled-components'
import Main from "./Main";


function Background() {
    return (
        <Back>
            <img src="https://source.unsplash.com/random" alt="bg" />
        <Main />
 
        </Back>
    )
}

const Back = styled.div`
height: 100vh;
width: 100%;
position: relative;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
`

export default Background
