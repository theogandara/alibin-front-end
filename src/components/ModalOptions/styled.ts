import styled from "styled-components";

export const ModalBody = styled.div`
    width: 150px;
    height: 265px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: absolute;
    transition: all 0.5s;
    background-color: #fff;
    border-radius: 16px;
    right: 10px;
    top: 30px;
    z-index: 10;
    cursor: auto;
    font-family: 'Open Sans', sans-serif;
`

export const Title = styled.div`
    font-size: 12px;
    font-weight: 600;
    padding: 8px;
    color: #808080;
    `

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #808080;
    gap: 8px;
`

export const Hr = styled.hr`
    width: 90%;
    height: 1px;
    background-color: #808080b3;
    margin: 8px;
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
`