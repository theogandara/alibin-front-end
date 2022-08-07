import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
`

export const RowContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 216px 216px 216px 216px 70px;
    gap: 16px;
    border-bottom: #8080803d 1px solid;
`

export const ColumnHeader = styled.div`
    width: 100%;
    padding: 8px;
    font-size: 12px;
    font-family: "Sans";
    font-weight: 500;
    color: #808080;
    font-weight: 600;
`

export const Button = styled.button`
    width: 100%;
    color: #4682B4;
    border: 0;
    cursor: pointer;
    background-color: transparent;
    height: 100%;
`