import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import AllProperties from "./list/AllProperties"
// import Testimonials from "./testimonials/Testimonials.js";
import FeaturedMedia from "./featured-media";
import FadeIn from 'react-fade-in';


const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const page = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[page.author];
  // Get a human readable date.
  const date = new Date(page.date);
  // Get the html2react component.

  const properties = state.source.get("/property-list");
  const Html2React = libraries.html2react.Component;
  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
    actions.source.fetch("/property-list");
    List.preload();

  }, []);
  // Load the post, but only if the data is ready.
  return data.isReady && properties.isReady ?  (
      <Container>
      <div>
        {/* <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
        {/* Only display author and date on posts */}
        {data.isPage}
      </div>
      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={page.featured_media} />
      )}
      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <FadeIn
        transitionDuration = '1400'
      >
      <Content>
        <Html2React html={page.content.rendered} />
      </Content>
      </FadeIn>

      {data.id === 479 ? 
      <AllProperties />
    :
    null
    }
    </Container>
  ) : null;
   
};
export default connect(Page);
const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "SourceSansPro", "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  max-width: 100%;
  margin: 0;
    .directions{
      display: none;
    }
    #bar2{
      height: 5px;
      width: 25%;
      margin-bottom: 20px;
      background-color: #DBC472;
    }
    #bar{
      height: 5px;
      width: 40%;
      background-color: #DBC472;
    }
    .propsTitle{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span{
        display: none;
      }
      h2{
        font-family: ivymode, serif;
        font-size: 2.5rem;
        color: #013110;
      }
      p{
        color: #013110;
        font-size: 1rem;
        font-family: freight-sans-pro, sans-serif;
      }
      .wp-image-123{
        width: 100%;
      }
    }
    @media screen and (max-width: 750px){
      max-width: 100%;
      margin: 0;
    }
`
/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  z-index: 1;
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;
  max-width: 100%;
  `;