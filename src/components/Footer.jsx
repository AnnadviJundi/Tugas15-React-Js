import styled from 'styled-components'

function Footer(){

    const Tagline = styled.div`
        background-color:#3876BF;
        padding: 20px;
    `

    const TextTagline = styled.p`
        color: black;
        font-size: 2rem;
    `

    return(
        <>
           <Tagline>
                <TextTagline>Copyright By PeTIK Jombang</TextTagline>
           </Tagline> 
        </>
    )
}

export default Footer