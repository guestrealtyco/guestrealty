import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import star_arch from "../../assets/elements/star_arch.png";


const AllProperties = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get("/property-list");
  let title = 'Blog';
  if ( data.isisPropertyArchive ) {
    null
  }

  return (
    <Container>
      {data.isPropertyArchive && (
        <iframe
        src="https://beds24.com/booking2.php?ownerid=65282&amp;referer=iframe"
        title="Frontity"
        width= "1000px"
        height= "3250px" 
        />
      )}    
    </Container>
  );
};

// paste this in the last data.is block to return the property component
// data.items.map(({ type, index, id }) => {
//   const item = state.source[type][id];
//   // Render one Item component for each one.
//   return <Item key={item.id} item={item} />
// })
export default connect(AllProperties);

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
  
  iframe {
    display: flex;
    width: 1800px;
    max-width: 96%;
  }

  .titleImg{
    width: 20%;
    height: auto;
    margin-bottom: -10px;
  }
  h2{
    margin-top: -10px;
    font-size: 3rem;
  }
`;

const Header = styled.h1`
  text-align: center;
`;


