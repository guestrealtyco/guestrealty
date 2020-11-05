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
          <h2>Take a look at some of our rental properties</h2>
        </Header>
      )}
      {!data.isAwsmJobOpeningsArchive && (
        <CarouselProvider
          naturalSlideWidth={10}
          naturalSlideHeight={10}
          infinite={true}
          isIntrinsicHeight={true}
          touchEnabled={true}
          visibleSlides={2.5}
          totalSlides={data.items.length}
        >
          <CarouselHorizontal>
            <ButtonBack>&#x2190;</ButtonBack>
            <ButtonNext>&#x2192;</ButtonNext>
            <Slider>
              {data.items.map(({ type, index, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <Slide index={index}><Item key={item.id} item={item} /></Slide>;
              })}
            </Slider>
          </CarouselHorizontal> 
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
  color: #013110;
  display: block;
  position: relative;
  
  .titleImg{
    width: 20%;
    height: auto;
    margin-bottom: -10px;
  }
  h2{
    margin-top: -10px;
    font-size: 3rem;
  }
  .carousel__slide{
    margin: 10px;
    min-height: 500px;
    max-width: 25%;
    h1{
      font-size: 1.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 40px; /* fallback */
      -webkit-line-clamp: 1; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
    p{
      font-size: 0.75rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 40px; /* fallback */
      -webkit-line-clamp: 1; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
  }

  .carousel__back-button{
    position: absolute;
    background: #ccb25c;
    color: #013110;
    border: 2px solid #013110;
    transition: all .3s ease; 
    height: 30px;
    width: 45px;
    margin-bottom: 10px;
    border-radius: 6px;
    font-weight: 500;
    font-family: freight-sans-pro;
    font-size: 1rem;
    left: -10px;
    top: 250px;
    z-index: 2;
    &:hover{
      background: #013110;
      color: #f6f2ec;
      border: 2px solid #ccb25c;
    }
  
  }
  .carousel__next-button{
    position: absolute;
    background: #ccb25c;
    color: #013110;
    border: 2px solid #013110;
    transition: all .3s ease; 
    height: 30px;
    width: 45px;
    margin-bottom: 10px;
    border-radius: 6px;
    font-weight: 500;
    font-family: freight-sans-pro;
    font-size: 1rem;
    right: -10px;
    top: 250px;
    z-index: 2;
    &:hover{
      background: #013110;
      color: #f6f2ec;
      border: 2px solid #ccb25c;
    }
  }

`;

const CarouselHorizontal = styled.div`
  width: 98%;
  position: relative;
  `

const Header = styled.h1`
  text-align: center;
  h2{
    font-family: ivymode, sans-serif;
  }
  p{
    font-style: italic;
    font-size: 1rem;
  }
`

