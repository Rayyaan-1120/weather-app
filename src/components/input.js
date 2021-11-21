import React from 'react'
import styled from 'styled-components'

function Input() {
    return (
        <Inputdiv>
            <input type="text" />
        </Inputdiv>
    )
}

const Inputdiv = styled.div`
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


`

export default Input
