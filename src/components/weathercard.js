import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Weathercard() {
  const data = useSelector((state) => state.data.value.current);
  const datalo = useSelector((state) => state.data.value.location);

  

  return (
    <Weatherdiv>
      {data && (
        <>
          <img src={data.condition.icon} alt="" />
          <h2>{data.condition.text}</h2>
          <h3>{`${data.temp_c} C`}</h3>
          <h3>{`${data.temp_f} F`}</h3>
          <h3>{`Last updated: ${data.last_updated}`}</h3>
          <h3>{datalo.name}</h3>
          <h3>{datalo.country}</h3>
        </>
      )}
    </Weatherdiv>
  );
}

const Weatherdiv = styled.div`
  width: 30rem;
  height: 50vh;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;


  h2 {
    font-size: 3rem;
  }

  h3{
      font-size: 2rem;
      margin: .5rem 0;
  }

  img {
    width: 100px;
    height: 100px;
  }

  


`;

export default Weathercard;
