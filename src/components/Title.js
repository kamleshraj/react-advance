import React from 'react'
import styled from 'styled-components';

const TitleStyled =styled.h3`
    font-weight: 700;
    font-size: 32px;
    padding: 15px 0;
`;
const Title = () => {
  return (
    <>
        <TitleStyled>Published Reports</TitleStyled>
    </>
  )
}

export default Title