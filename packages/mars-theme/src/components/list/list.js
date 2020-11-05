import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import star_arch from "../../assets/elements/star_arch.png";
import FadeIn from 'react-fade-in';


const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  let title = 'Blog';
  if ( data.isisPropertyArchive ) {
    null
  }

  return (
    <FadeIn
    transitionDuration = '1400'
  >
    <Container>
      {/* If the list is a list of blog posts, we render a title. */}
      {data.isPostArchive && (
        <FadeIn
        transitionDuration = '1400'
      >
        <Header>
          <img className ="titleImg" src={star_arch} />
          <h2>Recent Posts</h2>
        </Header>
        </FadeIn>
      )}
        {/* If the list is a AWSM Job career page, we render a title. */}
      {data.isPropertyArchive && (
        <FadeIn
        transitionDuration = '1400'
      >
        <Header>
          <img className ="titleImg" src={star_arch} />
          <h2>Our Properties</h2>
        </Header>
        </FadeIn>
      )}
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <FadeIn
        transitionDuration = '1400'
      >
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
        </FadeIn>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <FadeIn
        transitionDuration = '1400'
      >
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
        </FadeIn>
      )}
      <FadeIn
      transitionDuration = '1400'
    >
        {/* Iterate over the items of the list. */}
      {data.isAwsmJobOpeningsArchive && (
          <section className="section job-listing">
            <div className="container">
              <div className="row">
              {/* Iterate over the items of the list. */}
              {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <Item key={item.id} item={item} />;
              })}
            </div>
            </div>
          </section>
      )}
      {!data.isAwsmJobOpeningsArchive && (
          <>
          {data.items.map(({ type, id }) => {
              const item = state.source[type][id];
              // Render one Item component for each one.
              return <Item key={item.id} item={item} />;
            })}
          </>
      )}
    </FadeIn>
    <FadeIn
      transitionDuration = '1400'
    >
      <Pagination />
    </FadeIn>
    </Container>
    </FadeIn>
  );
};

export default connect(List);

const Container = styled.section`
  background: #f6f2ec;
  width: 1200px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  list-style: none;
  color: #013110;
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

const Header = styled.h1`
  text-align:center;
  margin-bottom:3rem;
`