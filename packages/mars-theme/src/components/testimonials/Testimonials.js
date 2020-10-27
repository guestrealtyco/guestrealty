import React from "react";
import { connect, styled } from "frontity"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Testimonial = ({ state, libraries }) => {

    const data = state.source.get("/testimonials");
    const quotes = state.source.page[data.id];
    const Html2React = libraries.html2react.Component;

      return (
        <ContactContainer>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={quotes.length}
            >
            <Slider>
            {quotes.map((quote, i) => {
                <Slide key={quote} index={i}>
                    <Html2React html={quote.content.rendered} />
                </Slide>
            })}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </ContactContainer>
    );
};

export default connect(Testimonial);


const ContactContainer = styled.div`
    padding: 5px;
`