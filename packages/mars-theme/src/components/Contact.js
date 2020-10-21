import React from "react";
import { connect, styled } from "frontity"
import star_arch from "../assets/elements/star_arch.png";

const Contact = ({ state, libraries }) => {

    const data = state.source.get("/contact");
    const contactForm = state.source.page[data.id];
    const Html2React = libraries.html2react.Component;

    return (
        <>
        <ContactContainer>
            <ContactForm>
            <img className ="titleImg" src={star_arch} />
            <h2>Contact Us</h2>
                <Html2React html={contactForm.content.rendered} />
            </ContactForm>  
        </ContactContainer>
                
        </>
    );
};

export default connect(Contact);
const ContactContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f2ec;
    h2{
        color: #ccb25c;
    }
    width: 900px;
    max-width: 90%;
`

const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    width: 900px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 15px;
    border: 1px solid #ccb25c;
    background: #153211; /* Old browsers */
    -webkit-box-shadow: 25px 23px 19px -10px rgba(0,0,0,0.47);
    -moz-box-shadow: 25px 23px 19px -10px rgba(0,0,0,0.47);
    box-shadow: 25px 23px 19px -14px rgba(0,0,0,0.47);

    .titleImg{
        width: 10%;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    label{
        color: #ccb25c;
        font-size: 1rem;
        font-weight: 800;
    }
    input{
        padding: 10px;
        margin: 10px;
        -webkit-box-shadow: 25px 23px 19px -10px rgba(0,0,0,0.47);
        -moz-box-shadow: 25px 23px 19px -10px rgba(0,0,0,0.47);
        box-shadow: 25px 23px 19px -14px rgba(0,0,0,0.47);
        }
    textarea{
        padding: 1px;
        margin: 1px;
        -webkit-box-shadow: 25px 23px 19px -10px rgba(0,0,0,0.47);
        -moz-box-shadow: 25px 23px 19px -10px rgba(0,0,0,0.47);
        box-shadow: 25px 23px 19px -14px rgba(0,0,0,0.47);
    }
    select{
        padding: 10px;
        margin: 1px;
        width: 100%;
        -webkit-box-shadow: 25px 23px 19px -10px rgba(0,0,0,0.47);
        -moz-box-shadow: 25px 23px 19px -10px rgba(0,0,0,0.47);
        box-shadow: 25px 23px 19px -14px rgba(0,0,0,0.47);
    }
    input[type="submit"] {
    display: inline-block;
    margin: 0 auto;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #ccb25c;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: var(--white);
    background-color: transparent;
    margin-bottom:3.5rem;
    -webkit-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
    -moz-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
    box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
    &:hover {
        border: 1px solid #f6f2ec;
        font-weight: 800; 
      }
`