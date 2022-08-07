import styled from "styled-components";

export const RowContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 216px 216px 216px 216px 70px;
    gap: 16px;
    border-bottom: #8080803d 1px solid;
`

export const ColumnRow = styled.div`
    width: 100%;
    padding: 8px;
    font-size: 12px;
    font-family: "Sans";
    font-weight: 500;
    color: #808080;
    display: flex;
    gap: 16px;
`

export const ButtonRow = styled.div`
    border: 0;
    cursor: pointer;
`

export const Badge = styled.div`
    height: 24px;
    color: #4682B4;
    background-color: #87CEEBb3;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
`