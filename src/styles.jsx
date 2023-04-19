import styled from "styled-components";

export const Inicio = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;1,200&display=swap');
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Noto Sans', sans-serif;
    
    article{
        display: flex;
        align-items: center;
    }
    article h1{
        font-size: 96px;
        font-weight: 100;
        color: #f1f1f1;
        margin-right: 10px;
    }
    article h1::first-letter{
        text-transform:uppercase;
        font-size: 96px;
        font-weight: bold;
    }
    div h3{
        color: #f1f1f1;
        font-weight: 100;
        font-size: 38px;
    }
`



