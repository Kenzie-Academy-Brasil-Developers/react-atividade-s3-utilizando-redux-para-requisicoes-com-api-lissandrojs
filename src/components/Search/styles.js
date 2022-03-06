import styled from "styled-components"

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

`

export const Content = styled.div`
    margin-top: 15px;

    input{
        width:200px ;
        height:38px ;
        border-radius:6px 0 0 6px  ;
        border:none ;
        background-color:#151715 ;
        color:#cac4c4;
    }
    button{
        color:#cac4c4;
        background-color:#151715 ;
        margin-left:2px ;
        border:none ;
        width:70px ;
        height:38px ;
        border-radius:0 6px  6px 0  ;
    }
`