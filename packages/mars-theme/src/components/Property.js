import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import star_divider from "../assets/elements/star_divider.png";
import FadeIn from 'react-fade-in';

const Property = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const property = state.source[data.type][data.id];
  
  //Grab advanced custom fields
  const acf = property.acf;
  const images = acf.images;

  // grabs bed 24 id to load into iframe
  const bed24 = `https://beds24.com/booking2.php?ownerid=65282&propid=${acf.bed24id}`

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
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
      <FadeIn>
      <div className ="titleBox">
        <Title dangerouslySetInnerHTML={{ __html: property.title.rendered }} /> 
        <img className ="titleImg" src={star_divider} />
        {/* Only display author and date on posts */}
        {data.isProperty}
      </div>
      </FadeIn>
      
      <FadeIn>
      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={property.featured_media} />
      )}
      </FadeIn>
      
      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <FadeIn>
      <Content>
        <Html2React html={property.content.rendered} />
        {acf.bed24id === null ? 
          <PageError />
          :
            <iframe 
            src={bed24}
            title="bed 24 widget"
           />
      }
      </Content>
      </FadeIn>
    </Container>
  ) : null;
};

export default connect(Property);

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "SourceSansPro", "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 100%;
  margin: 0;
  background: #f6f2ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .titleBox{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .titleImg{
    width: 20%;
    height: auto;
    margin-top: -10px;
  }
`

const Title = styled.h2`
  font-size: 3.5rem;
  color: #013110;
`



/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */

const Content = styled.div`
  background-color: #f6f1eb;
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    height: auto;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    max-width: 95%;
    width: 1500px;
    height: 1000px;
    max-height: 100%;
    display: flex;
    align-items: center;
    border: 0;
    margin: 0 auto;

  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */
  label {
    color: #ccb25c;
  }
  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #013110;
    background-color: #f6f2ec;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #013110;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    background-color: #013110;
    border: 1px solid #013110;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #013110;
    background-color: #f6f2ec;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
