import React from 'react';
import styled from '@emotion/styled'

const Container = styled.div`
    padding: 1.5rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 700px;
    margin-top: 5rem;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        font-size: 1.7rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            left: -1rem;
            top: -2rem;
            position: absolute;
        }
    }

    p {
        font-family: Verdana, Geneva, Thoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`

const quote = ({quote}) => {

    if(Object.keys(quote).length === 0) {
        return null
    }

    return (
        <Container>
            <h1>{quote.quote}</h1>
            <p>{quote.author}</p>
        </Container>
    );
};

export default quote;