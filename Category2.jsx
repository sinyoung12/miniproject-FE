import React from 'react'
import styled from 'styled-components'


const Category2 = () => {
  
    return (
      <Boxfather>
      <Boxdown>   
        <Boxslice>
        <Box>중급</Box>
        <Faker/>      
        </Boxslice>
        <NewBox></NewBox>
      </Boxdown>
    </Boxfather>
    )
    
  }
  
 
  
  const Boxfather = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
  `
  
  const NewBox = styled.div`
    background-color: #FDD600;
    width: 1100px;
    height: 700px;
  `
  
  
  const Box = styled.div`
    flex: 3;
    background-color: #FDD600;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: bold;
    
    
  `;
  
  const Boxdown = styled.div`
    
    margin-top: 100px;
    
  `;
  
  const Boxslice = styled.div`
    background-color: white;
    display: flex;
    width: 1100px;
    height: 100px;
    /* border: 1px solid #000; */
    
  `;
  
  const Faker = styled.div`
    background-color: white;
    flex: 7;
  `

 export default Category2