import React from "react";
import { connect, styled } from "frontity"
import Item from "./list-item";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const Testimonial = ({ state, libraries }) => {

    const data = state.source.get("/testimonials");
    const quotes = state.source.page[data.id];
    const Html2React = libraries.html2react.Component;
      return (
        <>
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={250}
        infinite={true}
        isIntrinsicHeight={true}
        touchEnabled={true}
        visibleSlides={1}
        totalSlides={data.items.length}
        >
            <Slider>
                {data.items.map(({ type, index, id }) => {
                    const item = state.source[type][id];
                    // Render one Item component for each one.
                    return <Slide index={index}><Item key={item.id} item={item} /></Slide>;
                })}
            </Slider>
        </CarouselProvider>
        
        
        </>
    );
};

export default connect(Testimonial);


const ContactContainer = styled.div`
    padding: 5px;
`