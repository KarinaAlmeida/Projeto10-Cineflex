import styled from "styled-components";


export default function Footer(){

    return(
        <Container>


        </Container>

    )

}



const Container = styled.div`
    width: 100%;
    max-width: 552px;
    height: 117px;
    background-color: #C3CFD9;
    border: 1px solid #9EADBA;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    bottom: 0;
    left: calc(100vw/2 - width/2);
    z-index: 1;
`

// const Poster = styled.div`
//     width: 64px;
//     height: 89px;
//     background: #FFFFFF;
//     box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
//     border-radius: 3px;
//     margin: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     img {
//         width: 48px;
//         height: 72px;
//         margin: auto;
//     }
// `

// const TextInfo = styled.div`
//     margin-left: 15px;
//     font-weight: 400;
//     font-size: 26px;
//     line-height: 30px;
//     color: #293845;
// `