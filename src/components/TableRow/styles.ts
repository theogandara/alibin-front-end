import styled from "styled-components";

export const RowContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 216px 216px 216px 216px 70px;
    gap: 16px;
    border-bottom: #8080803d 1px solid;

    transition: all 0.4s;

    &:hover{
        background-color: #4682B41a;
    }
`

export const ColumnRow = styled.div`
    width: 100%;
    padding: 8px;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    color: #808080;
    display: flex;
    gap: 16px;
    align-items: center;
`

export const ButtonRow = styled.div`
    border: 0;
    cursor: pointer;
`

export const Badge = styled.div`
    height: 24px;
    color: #4682B4e3;
    background-color: #87CEEB4d;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
`