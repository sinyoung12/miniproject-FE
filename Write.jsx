import React from 'react'

import styled from 'styled-components'


const Write = () => {
  
  return (
    <Boxfather>
    <Boxdown>   
      <Boxslice>
      <Box>게시글 작성</Box>
      <Faker/>      
      </Boxslice>
      <NewBox>
          <SpahBox placeholder="여기에 글을 입력하세요"/>
          <Button1>등록</Button1>
          <Button2>수정</Button2>
          <Button3>삭제</Button3>
      </NewBox>
    </Boxdown>
  </Boxfather>
  )
  
}



const Boxfather = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const NewBox = styled.div`
  background-color: #FDD600;
  width: 1100px;
  height: 700px;
  position: absolute;
`

const SpahBox = styled.textarea`
  background-color: white;
  margin-top: 100px;
  margin-left: 80px;
  width: 930px;
  height: 460px;
  border-radius: 30px;
  border-color: #FDD600;
  font-size: 40px;
  
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

const Button1 = styled.div`
  margin-left: 800px;
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
  
`
const Button2 = styled.div`
  margin-left: 900px;
  margin-top: -25px;
  font-size: 20px;
  font-weight: bold;
  
`
const Button3 = styled.div`
  margin-left: 1000px;
  margin-top: -25px;
  font-size: 20px;
  font-weight: bold;
  
`

export default Write