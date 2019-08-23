import React from 'react';
import styled from 'styled-components'

interface HeaderProps {
    title: String,
}

const Header: React.FC<HeaderProps> = (props) => {
    const { title } = props
    return (
        <StyledHeader>
            <StyledTitle>{title}</StyledTitle>
        </StyledHeader>
    )
}

const StyledHeader = styled('header')`
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #000;
`
const StyledTitle = styled('p')`
    text-align: center;
    font-size: 20px;
`

export default Header
