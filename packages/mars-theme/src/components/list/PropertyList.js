import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import star_arch from "../../assets/elements/star_arch.png";
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack } from 'pure-react-carousel';


const PropertyList = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get("/property-list");
  let title = 'Blog';
  if ( data.isisPropertyArchive ) {
    null
  }

  return (
    <Container>
      {data.isPropertyArchive && (
        <Header>
          <img className ="titleImg" src={star_arch} />
          <h2>Our Properties</h2>
        </Header>
      )}
      {!data.isAwsmJobOpeningsArchive && (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={250}
          infinite={true}
          isIntrinsicHeight={true}
          touchEnabled={true}
          visibleSlides={1}
          totalSlides={data.items.length}
        >
          <ButtonBack className="button btn-dark">Back</ButtonBack>
          <ButtonNext className="button btn-dark">Next</ButtonNext>
          <Slider>
            {data.items.map(({ type, index, id }) => {
              const item = state.source[type][id];
              // Render one Item component for each one.
              return <Slide index={index}><Item key={item.id} item={item} /></Slide>;
            })}
          </Slider>
        </CarouselProvider>
      )}
    </Container>
  );
};

export default connect(PropertyList);

const Container = styled.section`
  max-width: 100%;
  background: #f6f2ec;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  list-style: none;
  color: #153211;
  
  .titleImg{
    width: 20%;
    height: auto;
    margin-bottom: -10px;
  }
  h2{
    margin-top: -10px;
    font-size: 4.5rem;
  }


`;

const CarouselContainer = styled.div`
  width: 100%;

  `
const Header = styled.h1`
  text-align: center;
`

