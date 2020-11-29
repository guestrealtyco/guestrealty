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
  .grid-container {
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fit(6, 1fr));
  gap: 0 0;
  grid-template-areas:
    "Hero Hero Hero Hero Hero"
    "Services Services Services Services"
    "Steps Steps Steps Steps Steps"
    "signup signup signup signup signup";
    background-attachment: fixed;
    background-color: #f6f2ec;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1118' height='1118' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%23ccb25c' stroke-width='0.1' stroke-opacity='0.17'%3E%3Crect x='-40' y='40' width='75' height='75'/%3E%3Crect x='-35' y='45' width='65' height='65'/%3E%3Crect x='-30' y='50' width='55' height='55'/%3E%3Crect x='-25' y='55' width='45' height='45'/%3E%3Crect x='-20' y='60' width='35' height='35'/%3E%3Crect x='-15' y='65' width='25' height='25'/%3E%3Crect x='-10' y='70' width='15' height='15'/%3E%3Crect x='-5' y='75' width='5' height='5'/%3E%3Crect width='35' height='35'/%3E%3Crect x='5' y='5' width='25' height='25'/%3E%3Crect x='10' y='10' width='15' height='15'/%3E%3Crect x='15' y='15' width='5' height='5'/%3E%3Crect x='40' width='75' height='75'/%3E%3Crect x='45' y='5' width='65' height='65'/%3E%3Crect x='50' y='10' width='55' height='55'/%3E%3Crect x='55' y='15' width='45' height='45'/%3E%3Crect x='60' y='20' width='35' height='35'/%3E%3Crect x='65' y='25' width='25' height='25'/%3E%3Crect x='70' y='30' width='15' height='15'/%3E%3Crect x='75' y='35' width='5' height='5'/%3E%3Crect x='40' y='80' width='35' height='35'/%3E%3Crect x='45' y='85' width='25' height='25'/%3E%3Crect x='50' y='90' width='15' height='15'/%3E%3Crect x='55' y='95' width='5' height='5'/%3E%3Crect x='120' y='-40' width='75' height='75'/%3E%3Crect x='125' y='-35' width='65' height='65'/%3E%3Crect x='130' y='-30' width='55' height='55'/%3E%3Crect x='135' y='-25' width='45' height='45'/%3E%3Crect x='140' y='-20' width='35' height='35'/%3E%3Crect x='145' y='-15' width='25' height='25'/%3E%3Crect x='150' y='-10' width='15' height='15'/%3E%3Crect x='155' y='-5' width='5' height='5'/%3E%3Crect x='120' y='40' width='35' height='35'/%3E%3Crect x='125' y='45' width='25' height='25'/%3E%3Crect x='130' y='50' width='15' height='15'/%3E%3Crect x='135' y='55' width='5' height='5'/%3E%3Crect y='120' width='75' height='75'/%3E%3Crect x='5' y='125' width='65' height='65'/%3E%3Crect x='10' y='130' width='55' height='55'/%3E%3Crect x='15' y='135' width='45' height='45'/%3E%3Crect x='20' y='140' width='35' height='35'/%3E%3Crect x='25' y='145' width='25' height='25'/%3E%3Crect x='30' y='150' width='15' height='15'/%3E%3Crect x='35' y='155' width='5' height='5'/%3E%3Crect x='200' y='120' width='75' height='75'/%3E%3Crect x='40' y='200' width='75' height='75'/%3E%3Crect x='80' y='80' width='75' height='75'/%3E%3Crect x='85' y='85' width='65' height='65'/%3E%3Crect x='90' y='90' width='55' height='55'/%3E%3Crect x='95' y='95' width='45' height='45'/%3E%3Crect x='100' y='100' width='35' height='35'/%3E%3Crect x='105' y='105' width='25' height='25'/%3E%3Crect x='110' y='110' width='15' height='15'/%3E%3Crect x='115' y='115' width='5' height='5'/%3E%3Crect x='80' y='160' width='35' height='35'/%3E%3Crect x='85' y='165' width='25' height='25'/%3E%3Crect x='90' y='170' width='15' height='15'/%3E%3Crect x='95' y='175' width='5' height='5'/%3E%3Crect x='120' y='160' width='75' height='75'/%3E%3Crect x='125' y='165' width='65' height='65'/%3E%3Crect x='130' y='170' width='55' height='55'/%3E%3Crect x='135' y='175' width='45' height='45'/%3E%3Crect x='140' y='180' width='35' height='35'/%3E%3Crect x='145' y='185' width='25' height='25'/%3E%3Crect x='150' y='190' width='15' height='15'/%3E%3Crect x='155' y='195' width='5' height='5'/%3E%3Crect x='160' y='40' width='75' height='75'/%3E%3Crect x='165' y='45' width='65' height='65'/%3E%3Crect x='170' y='50' width='55' height='55'/%3E%3Crect x='175' y='55' width='45' height='45'/%3E%3Crect x='180' y='60' width='35' height='35'/%3E%3Crect x='185' y='65' width='25' height='25'/%3E%3Crect x='190' y='70' width='15' height='15'/%3E%3Crect x='195' y='75' width='5' height='5'/%3E%3Crect x='160' y='120' width='35' height='35'/%3E%3Crect x='165' y='125' width='25' height='25'/%3E%3Crect x='170' y='130' width='15' height='15'/%3E%3Crect x='175' y='135' width='5' height='5'/%3E%3Crect x='200' y='200' width='35' height='35'/%3E%3Crect x='200' width='35' height='35'/%3E%3Crect y='200' width='35' height='35'/%3E%3C/g%3E%3C/svg%3E");
  }

/* Hero */
.Hero { 
    grid-area: Hero; 
    grid-gap: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-width: 100vw;
    padding-bottom: 80px;
}
#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
  object-fit: cover;
  width: 100vw;
  max-height: 100vh;
}
.hero-header-text{
  font-family: ivymode, sans-serif;
  color: #FFF;
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  display: flex;
  flex-direction: column;
  margin: 0 auto 20 auto;
  padding: 15px;
  background-color: rgba(1, 49, 16, 0.25);
  border: 0.5px dotted #ccb25c;
  z-index: 1;
}
.hero-header-text blockquote {
  border-left: 2px solid #ccc;
  margin-left: 1.5em 10px;
  padding: 0.5em 10px;
}
.hero-header-text blockquote p {
  display: inline;
}
.hero-buttons{
  z-index: 0;
}
/* Services */
.Services{ 
  grid-area: Services;
  text-align: center;
  border: 25px solid rgba(1, 49, 16, 0.25);
  display: flex;
  flex-direction: column;
  margin-top: -80px;
}
.Services h2{
  color: #153211;
  font-family: ivymode, serif;
  font-size: 3.5rem;
  padding: 40px 40px 40px 40px;
  margin-bottom: -20px;
}
.Services p{
  color: #153211;
  font-family: freight-sans-pro, sans-serif;
  font-size: 1.35rem;
  padding: 10px 40px 40px 40px;
}
.Services #bar2{
  margin: 0 auto;
}
.services-container {
  position: inline-block;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  padding: 10px;
}
.services-row{
  position: inline-block;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.services-container img{
  max-width: 25vw;
  height: auto;
  display: inline-block;
  border-radius: 20px;
  margin: 10px;
}
.services-container .card {
  position: relative;
  height: 10rem;
  line-height: 1.2rem;
  transition: all 0.3s ease-in-out;
  background-color: rgba(31, 33, 29, 0.5);
  margin: -200px 5px 5px 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.services-container .card:hover {
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.2);
  background-color: rgba(31, 33, 29, 0.5);
  margin-top: -200px;
  line-height: 1.2rem;
  height: 11rem;

}
.services-container .card img{
  max-width: 30rem;
  height: auto;
}
.services-container .card__link {
  display: block;
  padding: 1em;
  text-decoration: none;
}
.services-container .card__icon {
  position: absolute;
  transition: all 0.3s ease-in-out;
  width: 12em;
  height: 5rem;
}
.services-container .card:hover .card__icon {
  opacity: 0;
  transform: scale(0);

}
.services-container .card__icon h3 {
  color: #f6f2ec;
  margin-top: -10px;
  font-family: ivymode, serif;
}
.services-container .card__media p {
  color: #f6f2ec;
  margin-top: -40px;
  font-size: 1.1rem;
  font-weight: 400;
  font-family: "freight-sans-pro", sans-serif;
  text-align: center;
  display: none;
  opacity: 0;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  transform-origin: center center;
}
.services-container .card__media {
  padding: 2em 0;
}
.services-container .card__media h3 {
  opacity: 0;
  transition: all 0.3s ease-in-out;
  transform-origin: center center;
}
.services-container .card:hover .card__media h3 {
  animation: fadeInScale 0.3s ease-in-out forwards;
}
.services-container .card:hover .card__media p {
  animation: fadeInScale 0.3s ease-in-out forwards;
  display: inline-block;
}
.services-container .card:hover .card__media h3:nth-child(2) {
  animation-delay: 0.1s;
}
.services-container .card:hover .card__media p:nth-child(2) {
  animation-delay: 0.1s;
}
.services-container .card:hover .card__media h3:nth-child(3) {
  animation-delay: 0.2s;
}
.services-container .card:hover .card__media p:nth-child(3) {
  animation-delay: 0.2s;
}
.services-container .card__header {
  position: relative;
}
.services-container .card__header-icon {
  opacity: 1;
  position: absolute;
  right: 0;
  top: 10%;
  margin-top: -3.5rem;
  width: 2em;
  height: 2em;
  transform: translateX(0);
}
.services-container .card:hover .card__header-icon {
  opacity: 0;
  transform: translateX(-20%);
  transition: all 0.3s ease-in-out;
}
/* How It Works/ Need Help Planning*/
.Steps { 
  grid-area: Steps; 
  padding: 40px;
}
.Steps h2{
  font-size: 2.5rem;
  color: #153211;
  text-align: left;
  font-family: ivymode, serif;
  width: 100%;
  padding: 20px;
}
.Steps p{
  font-size: 1.4rem;
  color: #153211;
  text-align: left;
  font-family: freight-sans-pro, sans-serif;
  width: 100%;
  padding: 20px;
}

.Steps span{
  font-size: 1.2rem;
  color: #153211;
  background: linear-gradient(to top, #ccb25c 25%, transparent 50%);
  font-family: ivymode, sans-serif;
}
.tooltip,
.container__step1:before,
.container__step2:before,
.container__step3:before {
  position: absolute;
  margin: 0 auto;
  bottom: 100%;
  color: #fff;
  background: #ccb25c;
  font-family: ivymode, serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  padding: 0.25rem 0.75rem;
  border-radius: 2.5px;
}
.card,
.container__step1 div,
.container__step2 div,
.container__step3 div {
  line-height: 2;
  background: #FFF;
  padding: 1.2rem 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 10px #e6e6e6;
}

.steps-container {
  margin: -20px 2.5vw 5vh 2.5vw;
  padding: 15vh 0;
  background-attachment: fixed;
	background-color: #f6f2ec;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1118' height='1118' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%23ccb25c' stroke-width='0.1' stroke-opacity='0.17'%3E%3Crect x='-40' y='40' width='75' height='75'/%3E%3Crect x='-35' y='45' width='65' height='65'/%3E%3Crect x='-30' y='50' width='55' height='55'/%3E%3Crect x='-25' y='55' width='45' height='45'/%3E%3Crect x='-20' y='60' width='35' height='35'/%3E%3Crect x='-15' y='65' width='25' height='25'/%3E%3Crect x='-10' y='70' width='15' height='15'/%3E%3Crect x='-5' y='75' width='5' height='5'/%3E%3Crect width='35' height='35'/%3E%3Crect x='5' y='5' width='25' height='25'/%3E%3Crect x='10' y='10' width='15' height='15'/%3E%3Crect x='15' y='15' width='5' height='5'/%3E%3Crect x='40' width='75' height='75'/%3E%3Crect x='45' y='5' width='65' height='65'/%3E%3Crect x='50' y='10' width='55' height='55'/%3E%3Crect x='55' y='15' width='45' height='45'/%3E%3Crect x='60' y='20' width='35' height='35'/%3E%3Crect x='65' y='25' width='25' height='25'/%3E%3Crect x='70' y='30' width='15' height='15'/%3E%3Crect x='75' y='35' width='5' height='5'/%3E%3Crect x='40' y='80' width='35' height='35'/%3E%3Crect x='45' y='85' width='25' height='25'/%3E%3Crect x='50' y='90' width='15' height='15'/%3E%3Crect x='55' y='95' width='5' height='5'/%3E%3Crect x='120' y='-40' width='75' height='75'/%3E%3Crect x='125' y='-35' width='65' height='65'/%3E%3Crect x='130' y='-30' width='55' height='55'/%3E%3Crect x='135' y='-25' width='45' height='45'/%3E%3Crect x='140' y='-20' width='35' height='35'/%3E%3Crect x='145' y='-15' width='25' height='25'/%3E%3Crect x='150' y='-10' width='15' height='15'/%3E%3Crect x='155' y='-5' width='5' height='5'/%3E%3Crect x='120' y='40' width='35' height='35'/%3E%3Crect x='125' y='45' width='25' height='25'/%3E%3Crect x='130' y='50' width='15' height='15'/%3E%3Crect x='135' y='55' width='5' height='5'/%3E%3Crect y='120' width='75' height='75'/%3E%3Crect x='5' y='125' width='65' height='65'/%3E%3Crect x='10' y='130' width='55' height='55'/%3E%3Crect x='15' y='135' width='45' height='45'/%3E%3Crect x='20' y='140' width='35' height='35'/%3E%3Crect x='25' y='145' width='25' height='25'/%3E%3Crect x='30' y='150' width='15' height='15'/%3E%3Crect x='35' y='155' width='5' height='5'/%3E%3Crect x='200' y='120' width='75' height='75'/%3E%3Crect x='40' y='200' width='75' height='75'/%3E%3Crect x='80' y='80' width='75' height='75'/%3E%3Crect x='85' y='85' width='65' height='65'/%3E%3Crect x='90' y='90' width='55' height='55'/%3E%3Crect x='95' y='95' width='45' height='45'/%3E%3Crect x='100' y='100' width='35' height='35'/%3E%3Crect x='105' y='105' width='25' height='25'/%3E%3Crect x='110' y='110' width='15' height='15'/%3E%3Crect x='115' y='115' width='5' height='5'/%3E%3Crect x='80' y='160' width='35' height='35'/%3E%3Crect x='85' y='165' width='25' height='25'/%3E%3Crect x='90' y='170' width='15' height='15'/%3E%3Crect x='95' y='175' width='5' height='5'/%3E%3Crect x='120' y='160' width='75' height='75'/%3E%3Crect x='125' y='165' width='65' height='65'/%3E%3Crect x='130' y='170' width='55' height='55'/%3E%3Crect x='135' y='175' width='45' height='45'/%3E%3Crect x='140' y='180' width='35' height='35'/%3E%3Crect x='145' y='185' width='25' height='25'/%3E%3Crect x='150' y='190' width='15' height='15'/%3E%3Crect x='155' y='195' width='5' height='5'/%3E%3Crect x='160' y='40' width='75' height='75'/%3E%3Crect x='165' y='45' width='65' height='65'/%3E%3Crect x='170' y='50' width='55' height='55'/%3E%3Crect x='175' y='55' width='45' height='45'/%3E%3Crect x='180' y='60' width='35' height='35'/%3E%3Crect x='185' y='65' width='25' height='25'/%3E%3Crect x='190' y='70' width='15' height='15'/%3E%3Crect x='195' y='75' width='5' height='5'/%3E%3Crect x='160' y='120' width='35' height='35'/%3E%3Crect x='165' y='125' width='25' height='25'/%3E%3Crect x='170' y='130' width='15' height='15'/%3E%3Crect x='175' y='135' width='5' height='5'/%3E%3Crect x='200' y='200' width='35' height='35'/%3E%3Crect x='200' width='35' height='35'/%3E%3Crect y='200' width='35' height='35'/%3E%3C/g%3E%3C/svg%3E");
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.steps-container svg {
  height: 5rem;
}
.steps-container svg line {
  stroke: #ccb25c;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 2px 20px;
  animation: animateline 5s linear both infinite;
}
.steps-container h3 {
  font-family: ivymode, serif;
  font-size: 1.3rem;
  text-align: center;
  margin: 0 auto;
  color: #013110;
}
.steps-container p {
  font-family: freight-sans-pro, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  width: 80%;

}
.steps-container ul {
  font-family: freight-sans-pro, sans-serif;
  text-align: left;
  margin-left: 25px;
}
.steps-container li {
  font-family: freight-sans-pro, sans-serif;
  font-size: 0.95rem;
  width: 80%;
}
.container__step1 {
  display: grid;
  border-radius: 8px;
  padding: 1.5rem;
  border: 3px solid #ccb25c;
  background-color: rgba(1, 49, 16, 0.25);
  position: relative;
}
.container__step1 img{
  height: 4rem;
  width: 4rem;
  margin: 20px 20px 10px 20px;
}
.container__step1:before {
  content: 'Getting Started';
}
.container__step1 div {
  text-align: center;
  margin: 1rem 1rem;
}
.container__step2 {
  padding: 1.5rem;
  display: grid;
  border-radius: 8px;
  border: 3px solid #ccb25c;
	background-color: rgba(1, 49, 16, 0.25);
  position: relative;
}
.container__step2:before {
  content: 'From Check-In';
}
.container__step2 div {
  margin: 1rem 1rem;
}
.container__step2 div svg {
  width: 100%;
  fill: #ccb25c;
  margin-top: 10px;
  animation: pulse 5s infinite;
}
.container__step2 div img {
  height: 5rem;
  width: 5rem;
  margin: 20px 20px 10px 20px;
  animation: pulse 5s infinite;
}
.container__step3 {
	padding: 1.5rem;
  display: grid;
  border-radius: 8px;
  border: 3px solid #ccb25c;
	background-color: rgba(1, 49, 16, 0.25);
  position: relative;
}
.container__step3 img{
  height: 4rem;
  width: 4rem;
  margin: 20px 20px -10px 20px;
}
.container__step3:before {
  content: 'To Check Out';
}
.container__step3 div {
  margin: 1rem 1rem;
}
@media (max-width: 700px) {
  .container__step1 {
    flex-direction: column;
  }
  .container__step1 div {
    margin: 1rem 0;
  }
}
/* Signup*/
.signup { 
  grid-area: signup; 
  background-size: cover;
  padding: 40px;
  margin-top: -100px;
}
.signup-container{
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
background-color: #f6f23c;
background:  url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg");
background:  url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg"); /* The least supported option. */
background-size: cover;
background-position: center;
background-attachment: fixed;
border-radius: 8px;
padding: 20px;

}
.signup-text{
  font-size: 1.2rem;
  font-weight: 800;
  color: #f6f2ec;
  font-family: ivymode, sans-serif;
  font-style: normal;
}
.signup-buttons{
display: flex;
flex-direction: row;
}

/* Media Queries */
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
/* Smartphones - Portrait Mode */
@media screen and (max-width: 420px) {
  /*Hero-xs*/
  .grid-container{
    margin: 0;
    padding: 0;
    max-width: 100vw;
    grid-template-areas:
    "Hero"
    "Services"
    "Steps"
    "signup";
  }
  header{
    display: none;
  }
  footer{
    display: none;
  }
  .Hero{
    grid-area: Hero;
    padding: 0px;
    margin: 0px;
    max-width: 100vw;
  }
  .hero-header-text{
    font-size: 1rem;
    margin-top: -80px;
    margin-left: -8px;
  }
  .hero-buttons{
    flex-direction: column;
  }
  /* Services-xs */
  .Services{
    grid-area: Services;
    margin-top: 20px;
    padding: 20px;
    max-width: 100vw;
  }
  .Services h2{
    font-size: 1.4rem;
  }
  .Services p{
    font-size: .9rem;
  }
  .services-container {
    flex-direction: column;
    margin-top: 0px;
    max-width: 100vw;
    margin-left: -5px;
  }
  .services-row{
    flex-direction: column;
  }
  .services-container img{
    min-height: 250px;
    width: 100%;
    height: auto;
    display: inline-block;
    overflow: clip;
    border-radius: 20px;
    margin: 10px;
  }
  .services-container .card {
    max-width: 60vw;
    height: 6rem;
    margin-top: -110px;
  }
  .services-container .card:hover {
    margin-top: -255px;
    height: 15rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 0;
  }
  .services-container .card__header-icon {
    margin-top: -2.5rem;
  }
  .services-container .card__icon h3 {
    font-size: 1rem;
    width: 80%;
    padding: 5px;
  }
  .services-container .card__media p {
    font-size: 0.9rem;
    width: 100%;
    padding: 5px;
  }
  .services-container img{
    max-width: 60vw;
  }
   /* Steps-xs */
  .Steps{
    grid-area: Steps;
    max-width: 100vw;
  }
  .Steps h2{
    font-size: 1.4em;
  }
  .Steps-wrapper {
    flex-direction: column;
    justify-content: space-evenly;
    }
    .steps-container h3 {
      font-size: 1rem;
    }
    .steps-container p {
      font-size: 0.9rem;
    }
    .steps-container ul {
      text-align: left;
      margin-left: 5px;
    }
    .steps-container li {
      font-size: 0.9rem;
    }
    .container__step1 {
      padding: 0.5rem;
    }
    .container__step2 {
      padding: 0rem;
    }
    .container__step3 {
      padding: 0rem;
    }

    /* Signup - xs*/
  .signup{
    grid-area: signup;
    max-width: 100vw;
    margin-top: -180px;
  }
  .signup-container{
    flex-direction: column;
    align-items: center;
  }
  .signup-text{
    font-size: 0.8rem;
    font-weight: 400;
  }
  .signup-buttons{
    flex-direction: column;
  }
}
/* Smartphones - Landscape */
@media screen and (min-width: 421px) and (max-width: 767px) {
  .grid-container{
    margin: 0;
    padding: 0;
    max-width: 100vw;
    grid-template-areas:
    "Hero"
    "Services"
    "Steps"
    "signup";
  }
  /* Hero -sm */

  .Hero{
    grid-area: Hero;
    padding: 0px;
    margin: 0px;
    max-width: 100vw;
  }
  .hero-header-text{
    font-size: 0.9rem;
    width: 80%;
    margin-left: -8px;
  }
  /* Services -sm */
  .Services{
    margin-top: -40px;
    grid-area: Services;
    max-width: 95%;
    border: 10px solid rgba(1, 49, 16, 0.25);
  }
  .Services h2{
    font-size: 1.4rem;
  }
  .Services p{
    font-size: .9rem;
  }
  .services-container {
    flex-direction: column;
    margin-top: 0px;
    max-width: 90vw;
    margin-left: -5px;
  }
  .services-row{
    flex-direction: column;
  }
  .services-container img{
    min-height: 250px;
    width: 100%;
    height: auto;
    display: inline-block;
    overflow: clip;
    border-radius: 20px;
    margin: 10px;
  }
  .services-container .card {
    max-width: 60vw;
    height: 6rem;
    margin-top: -110px;
  }
  .services-container .card:hover {
    margin-top: -255px;
    height: 15rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 0;
  }
  .services-container .card__icon h3 {
    font-size: 1rem;
    width: 100%;
    padding: 5px;
  }
  .services-container .card__media p {
    font-size: 1rem;
    width: 100%;
    padding: 5px;
    margin-top: 20px;
  }
  .services-container .card__header-icon {
    margin-top: -2.5rem;
  }
  .services-container .card__icon h3 {
    font-size: 1rem;
    width: 90%;
    padding: 5px;
  }
  .services-container .card__media p {
    font-size: 1rem;
    width: 100%;
    padding: 5px;
  }
  .services-container img{
    max-width: 60vw;
  }
  /* Steps -sm */
  .Steps{
    grid-area: Steps;
    max-width: 100vw;
  }
  .steps-container p {
    font-size: 0.9rem;
  }
   /* Signup - sm */
   .signup{
    grid-area: signup;
    max-width: 100vw;
    margin-top: -180px
  }
  .signup-buttons{
    flex-direction: column;
  }
}
/* Tablet- Portrait */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .grid-container{
    margin: 0;
    padding: 0;
    max-width: 100vw;
    grid-template-areas:
    "Hero Hero Hero Hero Hero"
    "Services Services Services Services Services"
    "Step Steps Steps Steps Steps"
    "signup signup signup signup signup";
  }
  /* Hero -m */
  .Hero{
    grid-area: Hero;
    max-width: 100vw;
  }
    /* Services -m */
  .Services{
    grid-area: Services;
    max-width: 100vw;
  }
  .Services h2{
    font-size: 2rem;
  }
  .Services p{
    color: #153211;
    font-family: freight-sans-pro, sans-serif;
    font-size: 1rem;
  }
  .Services h2{
    font-size: 1.6rem;
  }
  .Services p{
    font-size: 1rem;
  }
  .services-container {
    flex-direction: row;
    margin-top: 0px;
    max-width: 90vw;
    margin-left: -5px;
  }
  .services-row{
    flex-direction: column;
  }
  .services-container img{
    min-height: 250px;
    width: 100%;
    max-width: 40vw;
    height: auto;
    display: inline-block;
    overflow: clip;
    border-radius: 20px;
    margin: 10px;
  }
  .services-container .card {
    height: 6rem;
    margin-top: -110px;
  }
  .services-container .card:hover {
    margin-top: -255px;
    height: 15rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 0;
  }
  .services-container .card__header-icon {
    margin-top: -2.5rem;
  }
  .services-container .card__icon h3 {
    font-size: 1rem;
    width: 100%;
    padding: 5px;
    font-weight: 600;
  }
  .services-container .card__media p {
    font-size: 1rem;
    width: 100%;
    padding: 5px;
    margin-top: 20px;
  }
    /* Steps -m */
  .Steps{
    grid-area: Steps;
    max-width: 100vw;
    margin-left: -90px;
    margin-bottom: -80px;
  }
   /* Signup - m */
   .signup{
    grid-area: signup;
    max-width: 100vw;
   
  }
}

/* Tablet- Landscape and sm Laptop/Desktop */
@media screen and (min-width: 1024px) {
  .grid-container{
    margin: 0;
    padding: 0;
    max-width: 100vw;
    grid-template-areas:
    "Hero Hero Hero Hero Hero"
    "Services Services Services Services Services" 
    "Steps Steps Steps Steps Steps"
    "signup signup signup signup signup";
  }
  /* Hero -lg */
  .Hero{
    grid-area: Hero;
    max-width: 100vw;
  }
  /* Services -lg */
  .Services{
    grid-area: Services;
    max-width: 100vw;
  }
  .Services h2{
    font-size: 2.4rem;
    margin-bottom: -20px;
  }
  .Services p{
    font-size: 1.4rem;
    margin: 0 auto;
    padding: 0px 120px 20px 120px;
    width: 100%;
  }
  .services-container {
    flex-direction: column;
  }
  .services-row{
    flex-direction: row;
  }
  .services-container img{
    min-height: 250px;
    max-width: 25vw;
    height: auto;
    display: inline-block;
    overflow: clip;
    border-radius: 20px;
    margin: 10px 20px 10px 20px;
  }
  .services-container .card {
    max-width: 25vw;
    height: 6rem;
    margin-top: -110px;
    margin-left: 20px;
  }
  .services-container .card:hover {
    max-width: 25vw;
  }
  .services-container .card__icon h3 {
    font-size: 1.2rem;
  }
  .services-container .card__media p {
    font-size: .90rem;
    width: 100%;
    padding: 5px;
  }

   /* Steps -lg */
   .Steps{
    grid-area: Steps;
    max-width: 100vw;
  }
   /* Signup - lg */
   .signup{
    grid-area: signup;
    max-width: 100vw;
  }

}
/* Video Hero */
@media (min-aspect-ratio: 16/9) {
  #myVideo {
      width:100%;
      height: auto;
      z-index: 0;
  }
}
@media (max-aspect-ratio: 16/9) {
  #myVideo { 
      width:auto;
      height: 100%;
      z-index: 0;
  }
}
`;