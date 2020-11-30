import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import FadeIn from 'react-fade-in';
import Link from "./link";
import List from "./list";
import PropertyList from "./list/PropertyList";
import FeaturedMedia from "./featured-media";
import Contact from "./Contact";

const Sub = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const sub = state.source[data.type][data.id];

  const postType = sub.acf.posttype
  
  const testimonial = state.source.get("/testimonials");
  const properties = state.source.get("/property-list");

  // Get the html2react component.
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
  return data.isReady && properties.isReady ? (
       <Container>
        <div>
          {/* <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
          {/* Only display author and date on posts */}
          {data.isSub}
        </div>
        {/* Look at the settings to see if we should include the featured image */}
        {state.theme.featured.showOnPost && (
          <FeaturedMedia id={sub.featured_media} />
        )}
        {/* Render the content using the Html2React component so the HTML is processed
        by the processors we included in the libraries.html2react.processors array. */}
        <FadeIn
          transitionDuration = '1400'
        >
          <Content>
            <Html2React html={sub.content.rendered} />              
          </Content>
        </FadeIn>
      </Container>
  ) : null;
};
export default connect(Sub);
const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "freight-sans-pro", "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  max-width: 100%;
  margin: 0;
  background: #f6f2ec;
  overflow: hidden;
`

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  max-width: 100%;
  word-break: break-word;
  * {
    max-width: 100%;
  }
  `;