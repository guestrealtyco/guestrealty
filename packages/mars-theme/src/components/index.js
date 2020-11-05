import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import FontFace from "./styles/fontFace"
import Switch from "@frontity/components/switch";
import Headroom from 'react-headroom';
import Iframe from "@frontity/html2react/processors/iframe";
import Header from "./header/header";
import Footer from "./footer/Footer";
import List from "./list";
import PropertyList from "./list/PropertyList";
import Page from "./Page";
import Sub from "./Sub";
import Property from "./Property"
import Post from "./post/post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import style from "./styles/style.css";
import reactcarousel from 'pure-react-carousel/dist/react-carousel.es.css';


/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <FontFace />
      <Global styles={globalStyles} />
      <Global styles={css(style)} />
      <Global styles={reactcarousel} />
      

      {/* Add the header of the site. */}
      <Headroom>
        <HeadContainer>
          <Header />
        </HeadContainer>
      </Headroom>
      

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <PropertyList when={data.isPropertyArchive} />
          <List when={data.isArchive} />
          <Sub when={data.isSub} />
          <Property when={data.isProperty} />
          <Page when={data.isPage} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "SourceSansPro", "ivymode", "freight-sans-pro", "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #013110;
  background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg");
  background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg"); /* The least supported option. */
  background-repeat: no-repeat;
  background-size: cover;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f6f2ec;
`;


const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #013110;
  background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg");
  background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg"); /* The least supported option. */
  background-repeat: no-repeat;
  background-size: cover;
`
