import styled from "styled-components"

function Hero() {
    const Background = styled.div`
    background: linear-gradient( to bottom,#00A9FF , #CDF5FD);
    padding: 40px;
    border-radius: 30px`

    const TextEdit = styled.h3`
    font-size:2rem;
    color: #3876BF;
    font-family:sans serif`

    const Edit = styled.h5`
    font-style: italic;
    color: #4D4C7D;
    font-size: 3rem`

    const title = [
        'Nama Lengkap',
        'Asal',
        'Umur',
        'Status',
        'Quotes'
    ]

    const user = [
        'Muhammad Annadvi Jundi Abdurobbirosul',
        'Jombang',
        '18 Tahun',
        'Lajang',
        '"Kadang kalanya kita perlu pinjam seratus ke temen"',
    ]

    return (
        <>
        <Background>
            <Edit>{title[0]}</Edit>
            <TextEdit>{user[0]}</TextEdit> <br/>

            <Edit>{title[1]}</Edit>
            <TextEdit>{user[1]}</TextEdit> <br/>

            <Edit>{title[2]}</Edit>
            <TextEdit>{user[2]}</TextEdit> <br/>

            <Edit>{title[3]}</Edit>
            <TextEdit>{user[3]}</TextEdit> <br/>

            <Edit>{title[4]}</Edit>
            <TextEdit>{user[4]}</TextEdit> <br/>
        </Background>
        </>
    )
}

export default Hero