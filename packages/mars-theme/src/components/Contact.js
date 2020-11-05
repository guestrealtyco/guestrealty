import React from "react";
import { connect, styled } from "frontity"
import star_arch from "../assets/elements/star_arch.png";

const Contact = ({ state, libraries }) => {

    const data = state.source.get("/contact");
    const contactForm = state.source.page[data.id];
    const Html2React = libraries.html2react.Component;

    return (
        <>
        <Container>
            <HalfContainer>
                <TextContainer>
                    <h1 class="text">Have a question for us? <br />We'd love to offer our expertise.</h1>
                </TextContainer>
            </HalfContainer>

            <HalfContainer>
                <div className="cta-container">
                    <div className="cta-text">
                    <h2>Get in touch with us.</h2>
                    <Arrow><svg xmlns="http://www.w3.org/2000/svg" id="arrow"  viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg></Arrow>
                    <ContactForm>
                        <Html2React html={contactForm.content.rendered} />
                    </ContactForm>
                    </div>
                </div>
            </HalfContainer>
        </Container>
        </>
    );
};

export default connect(Contact);

const Container =styled.div`
    min-height: 100%;
    color: white;
    overflow: hidden;
`
const HalfContainer = styled.div`
    color: white;
    float: left;
    width: 50%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .cta-container{
        background: #FFCE45;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30vh;
        transition: 1s all;
        overflow: hidden;
        &:before {
        content: "";
        position: absolute;
        background: #E7BB3F;
        width: 150%;
        height: 100%;
        left: -50%;
        bottom: -50%;
        transform: rotate(25deg);
        display: block;
        }
        .cta-text{
            text-align: center;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            transition: 1s all;
        }
    }
`

const TextContainer = styled.div`
    position: relative;
    padding: 20px;
    top: 50%;
    transform: translateY(-80%);
    transition: 1s all;
    text-align: center;
    &.is-active {
      transform: translateY(-50%);
      transition-delay: 1s;
    }
`


//   .cta-container.is-active {
//     height: 100vh;
//     .cta-text {
//       position: absolute;
//       left: 0;
//       right: 0;
//       margin: auto;
//       top: 45%;
//       transform: translateY(-200%);
//       transition-delay: 1s;
//     }
//     .form-container {
//       opacity: 1;
//       label,.submit {
//         opacity: 1;
//       }
//       label:nth-of-type(1) {
//         transition-delay: 1.8s;
//       }
//       label:nth-of-type(2) {
//         transition-delay: 2.0s;
//       }
//       label:nth-of-type(3) {
//         transition-delay: 2.2s;
//       }
//       .submit {
//         transition-delay: 2.6s;
//       }
//     }
//     .arrow {
//       opacity: 0;
//     }
//   }
  
  const Arrow = styled.div`
    transition: .4s all;
    cursor: pointer;
    transform-origin: center;
    width: 30px;
    height: 30px;
    margin: auto;
    &:hover {
      transform: rotate(90deg) scale(1.3);
    }
    svg path {
    fill: #0D735D;
    }
  `

const ContactForm = styled.div`
    opacity: 0;
    padding: 20px;
    position: absolute;
    transition: .3s all 1s;
    text-align: left;
    left: 0;
    right: 0;
    margin: auto;
    .titleImg{
        width: 10%;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: space-around;
        
        max-width: 95%;
        label{
        display: flex;
        flex-direction: row;
        margin: 0px 100px 0px 100px;
        font-weight: 400;
        text-align: left;
        white-space: nowrap;
        vertical-align: middle;
        color: #ccb25c;
        font-size: 1rem;
        font-weight: 800;
        width: 100%;
        .wpcf7-not-valid-tip {
            color: #ccb25c;
            font-size: 1em;
            font-weight: normal;
            display: block;
        }
    }
    input{
        display: flex;
        width: 100%;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #f6f2ec;
        background-clip: padding-box;
        border: 1px solid gray;
        border-radius: 4px;
        outline-color: transparent;
        transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        margin: 0px 100px 0px 100px;
        -webkit-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
        -moz-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
        box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
        &:focus {
            outline-color: #ccb25c;
        }
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
    }
    
    }
    @media (max-width: 768px) {
      input{
          width: 80%;
      }
      input[type="submit"] {
          width: 100%;
      }
    }
`