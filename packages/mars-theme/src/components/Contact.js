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
          <BoxContainer>
            <HalfContainer>
              <Cta>
                <div className="ctaOutsideBorder">
                <div className="imageCta">
                  <img src="https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/animation_500_kha1qbom.gif" alt="guest realty sydney property management" />
                </div>
                <div className ="textCta">
                  <h2>We Can Help!</h2>
                  <p>Fill out your details in the form, or else give us a call by pressing the call button below.</p>
                  <a href="tel:+610280956240"><button className="button btn-gold-dark">Call Us</button></a>
                </div>
                </div>
              </Cta>
            </HalfContainer>
          <ContactContainer>
          <Html2React html={contactForm.content.rendered} />
          </ContactContainer>
          </BoxContainer>
        </Container>
        </>
    );
};

export default connect(Contact);

const Container = styled.div`
    min-height: 100%;
    max-width: 100%;
    color: #013110;
    border: 2px solid #ccb25c;
`
const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccb25c;
  background: #013110;
  width: 100%;
  @media screen and (max-width: 1080px){
    flex-direction: column
  }
`
const HalfContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background: #f6f2ec;
  @media screen and (max-width: 1080px){
    width: 100%;
  }

`
const Cta = styled.div`
  display: flex;
  flex-direction: row;
  background: #013110;
  margin: 10px;
  min-height: 100%;
  .ctaOutsideBorder{
    display: flex;
    align-items: center;
    background: #013110;
    border: 2px solid #ccb25c;
    padding: 20px;
    
  }
  .imageCta{
    width: 40%;
    img{
      width: 100%;
    }
  }
  .textCta{
    h2{
      color: #ccb25c;
      font-family: ivymode, serif;
    }
    p{
      font-family: freight-sans-pro, sans-serif;
      color: #f6f2ec;
    }
  }
`
const ContactContainer = styled.div`
    width: 50%;
    display: inline-block;
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
        display: inline-block;
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
        font-family: ivymode, serif;
        .wpcf7-not-valid-tip {
            color: #ccb25c;
            font-size: 1em;
            font-weight: normal;
            display: block;
        }
    }
    input{
        display: flex;
        width: 50%;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #f6f2ec;
        background-clip: padding-box;
        border: 1px solid gray;
        font-family: freight-sans-pro, sans-serif;
        border-radius: 10px;
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
        width: 50%;
        -webkit-box-shadow: 25px 23px 19px -10px rgba(0,0,0,0.47);
        -moz-box-shadow: 25px 23px 19px -10px rgba(0,0,0,0.47);
        box-shadow: 25px 23px 19px -14px rgba(0,0,0,0.47);
    }
    input[type="submit"] {
        display: inline-block;
        margin: 0 auto;
        font-weight: 400;
        text-align: center;
        font-family: ivymode, serif;
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
          width: 50%;
      }
    }
`