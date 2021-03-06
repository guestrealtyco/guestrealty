import React from 'react';
import { styled } from "frontity";

const Quote = ({ quote, author}) => {
    return (
            <Blockquote>
                <h3>" {quote} "</h3>
                <h4>- {author} </h4>
            </Blockquote>
    )
}

const quote = {
    name: 'quote',
    priority: 20,
    test: ({ component, props }) => component === "blockquote" && props.className === "wp-block-quote",
    processor: ({ node }) => {
        const quote = node.children[0].children[0].content
        const author = node.children[1].children[0].content
        return{
            component: Quote,
            props: { quote, author}
        }
    },
}

export default quote;

const Container = styled.div`
    background: #f6f2ec;
`

const Blockquote = styled.div`
    background: #013110;
    border: 2px solid #ccb25c;
    border-radius: 25px;
    padding: 10px;
    margin: 10px;
    h3{
        color: #ccb25c;
        font-weight: 800;
        font-style: italic;
        font-size: 2rem;
    }
    h4{
        color: #f6f2ec; 
    }
`