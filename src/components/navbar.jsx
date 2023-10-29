import styled from "styled-components"

function Navbar () {
    let title = "My Landing Page"

    let TextHeader = styled.h2`
    margin-bottom: 30px;
    color: #47B5FF;
    font-family: roboto;
    font-size: 3rem;
    border: 3px solid #75C2F6;
    border-radius: 25px;
    `

    let Ubah = styled.div`
    background-color: #2F58CD;
    padding: 15px;
    margin: 10px;
    border: 1px solid;
    border-radius: 30px;
    `

    return(
        <>
            <Ubah>
            <TextHeader>{title}</TextHeader>
            </Ubah>
        </>
    )
}

export default Navbar