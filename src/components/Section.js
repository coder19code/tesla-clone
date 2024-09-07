import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({title,para,backgroundImg,leftBtnText,rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
        <ItemT>
            <h1>{title}</h1>              {/*fade is an animation in react-reveal installed through npm*/}
            <p>{para}</p>
        </ItemT>
        </Fade>

        <Buttons>
        <Fade bottom>
        <ButtonGroup> 
            <LeftButton>
                 
                {leftBtnText}           {/*dynaimic props used*/}
            </LeftButton>          

            { rightBtnText &&       // Only if right button is avaliable then only implement this statement 
                  <RightButton>
                  {rightBtnText}    
                  </RightButton>
            
            }
        </ButtonGroup>
        </Fade>
        <DonwArrow src='/images/down-arrow.svg'>
        </DonwArrow>
        </Buttons>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat : no-repeat;
    display: flex;
    flex-direction: column ;
    justify-content : space-between; //vertical
    align-items : center; //horizontal 
    background-image : ${props=>`url("/images/${props.bgImage}")`};
    scroll-snap-align:start;
    z-index:1;

`;

const ItemT= styled.div`
     padding-top :15vh;
     text-align : center;
     font-size: 20px;
     
`;

const Buttons=styled.div`
    display:flex;
    flex-direction:column;
`;

const ButtonGroup=styled.div`
   display: flex;
   gap: 25px
   @media (max-width: 768px){
     flex-direction : column;
   }
`;

const LeftButton = styled.div`
   background-color :rgba(23, 26, 32, 0.8);
   height: 40px;
   width: 256px;
   color: white;
   display: flex
   justify-content: center;
   align-items : center;
   border-radius : 100px;
   opacity : 0.85;
   text-transform : uppercase;
   font-size : 12px;
   cursor: pointer;
   font-weight: bold;
   padding-top: 10px;

`

const RightButton= styled(LeftButton)`
    background : white;
    opacity : 0.65;
    color : black ;

`
const DonwArrow =styled.img`
    margin-top :20px;
    height: 40px;
    margin-bottom: 20px;
    animation: bounce infinite 1.5s;
    
`

