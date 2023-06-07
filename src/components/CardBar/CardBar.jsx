import React from 'react'
import styled from 'styled-components'
import CardBarItem1 from "../../assets/images/card-bar-item1.svg"
const CardBarWrapper = styled.div`
    padding:20px;
    display: flex;
    align-items:center;
    width: 140px;
    height: 80px;
    left: 668px;
    top: 775px;

    background: #EEEEEE;
    border-radius: 10px;
    img{
        width: 25px;
        height: 25px;
        margin-right:10px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 15px;

        color: #7B7878;
        margin:0;
    }
`
export const CardBar = () => {
  return (
   <CardBarWrapper>
        <img src={CardBarItem1} alt="" />
        <div className="inform">
            <p>Total Visits</p>
            <p>10.8m</p>
        </div>
   </CardBarWrapper>
  )
}
