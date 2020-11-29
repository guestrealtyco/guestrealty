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
  .grid-container {
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fit(6, 1fr));
  gap: 0 0;
  grid-template-areas:
    "Hero Hero Hero Hero Hero"
    "Subhero Subhero Subhero Subhero Subhero"
    "Body1img Body1img Body1 Body1 Body1"
    "icongroup icongroup icongroup icongroup icongroup"
    "Body2 Body2 Body2 Body2 Body2"
    "testimonials testimonials testimonials testimonials testimonials"
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
    margin-bottom: -100px;
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
  margin: -40px 10px 10px 10px;
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
.hero-header{
  font-style: normal;
  padding: 20px;
  font-weight: 800;
  font-size: 3rem;
  line-height: 80px;
  /* identical to box height, or 143% */
  text-align: center;
  letter-spacing: -0.015em;
  color: #f6f2ec;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.hero-buttons{
  z-index: 0;
}
/* Subhero */
.Subhero { 
    grid-area: Subhero; 
    padding: 40px;
}
.Subhero h2{
    font-size: 2.5rem;
    color: #153211;
    text-align: left;
    font-family: ivymode;
    width: 100%;
}
.Subhero-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin: 5px;
}
.Subhero-card {
  width: 20%;
  min-width: 280px;
  height: 290px;
  border-radius: 15px;
  padding: 1.5rem;
  margin: 10px;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
}
.Subhero-card:hover {
  transform: translateY(20px);
}
.Subhero-card:hover:before {
  opacity: 1;
}
.Subhero-card:hover .Subhero-info {
  opacity: 1;
  transform: translateY(0px);
}
.Subhero-card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}
.Subhero-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
}
.Subhero-card .Subhero-info {
  position: relative;
  z-index: 3;
  color: #F6F2EC;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;
}
.Subhero-card .Subhero-info h1 {
  font-size: 1.25rem;
  margin: 0px;
  font-family: ivymode, serif;
}
.Subhero-card .Subhero-info p {
  letter-spacing: 1px;
  font-size: 0.85rem;
  margin-top: 4px;
  font-family: freight-sans-pro, sans-serif;
}
.Subhero-card .Subhero-info button:hover {
  background: dodgerblue;
  color: white;
}
/* Why Guest Realty? */
.Body1 { 
    grid-area: Body1; 
    text-align: right;
}
.Body1 #bar2{
  margin-left:auto; 
  margin-right:40px;
}
.Body1 h2{
  color: #153211;
  font-family: ivymode, serif;
  font-size: 3.4rem;
  padding: 40px 40px 0px 40px;
}
.Body1 ul{
  border-right: 2px solid #a1ada0;
  margin-right: 40px;
  padding-right: 20px;
  text-align: block;
}
.Body1 li{
  list-style: none;
  font-size: 1.25rem;
  font-family: ivymode, serif;
  padding: 20px;
}
.Body1-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 95%;
}
i {
  opacity: 0;
  font-size: 28px;
  color: #CCB25C;
  will-change: transform;
  -webkit-transform: scale(.1);
          transform: scale(.1);
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}
.btn_wrap {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  overflow: hidden;
  cursor: pointer;
  width: 192px;
  border-radius: 6px;
  font-weight: 500;
  font-family: ivymode, serif;
  font-size: 1rem;
  margin: 10px;
  will-change: transform;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}
.btn_wrap .share-container a i {
  opacity: 0;
  font-size: 28px;
  color: #CCB25C;
  will-change: transform;
  -webkit-transform: scale(.1);
          transform: scale(.1);
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}
.btn_wrap:hover {
  /* transition-delay: .4s; */
  -webkit-transform: scale(1.1);
          transform: scale(1.1)
}
.btn_wrap span {
  position: absolute;
  border-radius: 6px;
  font-weight: 500;
  font-family: ivymode, serif;
  font-size: 1rem;
  -webkit-transition: all 1.2s ease;
  transition: all 1.2s ease;
}
.share-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 240px;
  height: 64px;
  border-radius: 80px;
}
.share-container i:nth-of-type(1) {
          -webkit-transition-delay: 1.1s;
                  transition-delay: 1.1s;
}
.share-container i:nth-of-type(2) {
          -webkit-transition-delay: .9s;
                  transition-delay: .9s;
}
.share-container i:nth-of-type(3) {
          -webkit-transition-delay: .7s;
                  transition-delay: .7s;
}
.share-container i:nth-of-type(4) {
          -webkit-transition-delay: .4s;
                  transition-delay: .4s;
}
.btn_wrap:hover span {
  -webkit-transition-delay: .25s;
          transition-delay: .25s;
  -webkit-transform: translateX(-280px);
          transform: translateX(-280px)
}
.btn_wrap:hover .share-container a i {
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}
.btn_wrap .share-container .dr {
position: absolute;
bottom: 16px; 
right: 16px;
width:100px;
}
.Body1img { 
    grid-area: Body1img; 
}
.Body1img img{
  width: 100%;
  border: 50px solid #a1ada0;
}
.Body1imgContainer{
  display: inline-block;
  position: relative;
}
.Body1imgContainer::before {
  position: absolute;
  top: -5%;
  left: -15%;
  width: 100%;
  height: 100%;
  border: 4px solid #ccb25c;
  content: '';
}

/* WE ARE... */
.Body2 { 
  grid-area: Body2;
  text-align: center;
  margin-bottom: 50px;
  border: 25px solid rgba(1, 49, 16, 0.25);
}
.Body2 h2{
  color: #153211;
  font-family: ivymode, serif;
  font-size: 3.5rem;
  padding: 40px 40px 0px 40px;
}
.Body2 #bar2{
  margin: 0 auto;
  margin-bottom: -20px;
}

.weare-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -140px;
  margin-bottom: 250px;
}
.weare-container img{
  max-width: 25vw;
  height: auto;
  display: inline-block;
}
.card {
  position: relative;
  max-width: 25vw;
  height: 5rem;
  transition: all 0.3s ease-in-out;
  background-color: rgba(31, 33, 29, 0.5);
  margin-top: -85px;
}
.card:hover {
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.2);
  background-color: rgba(31, 33, 29, 0.5);
  margin-top: -185px;
  height: 10rem;
}
.card img{
  max-width: 30rem;
  height: auto;
}
.card__link {
  display: block;
  padding: 1em;
  text-decoration: none;
}
.card__icon {
  position: absolute;
  transition: all 0.3s ease-in-out;
  width: 12em;
  height: 5rem;
}
.card:hover .card__icon {
  opacity: 0;
  transform: scale(0);

}
.card__icon h3 {
  color: #f6f2ec;
  margin-top: 5px;
  font-family: ivymode, serif;
}
.card__media p {
  color: #f6f2ec;
  margin-top: -20px;
  font-size: 1.3rem;
  font-weight: 400;
  font-family: freight-sans-pro, sans-serif;
  text-align: center;
  display: none;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  transform-origin: center center;
}
.card__media {
  padding: 2em 0;
}
.card__media h3 {
  opacity: 0;
  transition: all 0.3s ease-in-out;
  transform-origin: center center;
}
.card:hover .card__media h3 {
  animation: fadeInScale 0.3s ease-in-out forwards;
}
.card:hover .card__media p {
  animation: fadeInScale 0.3s ease-in-out forwards;
  display: inline-block;
}
.card:hover .card__media h3:nth-child(2) {
  animation-delay: 0.1s;
}
.card:hover .card__media p:nth-child(2) {
  animation-delay: 0.1s;
}
.card:hover .card__media h3:nth-child(3) {
  animation-delay: 0.2s;
}
.card:hover .card__media p:nth-child(3) {
  animation-delay: 0.2s;
}
.card__header {
  position: relative;
}
.card__header-icon {
  opacity: 1;
  position: absolute;
  right: 0;
  top: 10%;
  margin-top: -3.5rem;
  width: 2em;
  height: 2em;
  transform: translateX(0);
}
.card:hover .card__header-icon {
  opacity: 0;
  transform: translateX(-20%);
  transition: all 0.3s ease-in-out;
}
/* .Body2img { 
    margin: 10px;
    border: 50px solid #a1ada0; 
    background-color:#a1ada0;  
}
.Body2img img{
  width: 100%;
} */

/* Benefits */
.icongroup { 
    grid-area: icongroup; 
    padding: 20px;
}
.icongroup h2{
  font-family: ivymode;
  font-size: 3.4rem;
  color: #013110;
}
.benefits-content{
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
  margin-top: 40px;
}
.benefits-content h4 {
  font-family: freight-sans-pro;
  color: #013110;
  font-size: 1rem;
  padding: 20px;
  font-weight: 600;
  }
.benefits-content img{
  height: 100px;
  width: 100px;
  transition: all .2s ease-in-out;
}
.benefits-icon{
    display: flex;
    width: 250px;
    max-width: 20%;
    max-height: 250px;
    padding: 20px;
    flex-direction: column;
    align-items: center; 
    border: 2px solid rgba(31, 33, 29, 0.1);
    text-align: center;
  }
  .benefit-icon p{
    font-size: 1.5rem;
    font-family: freight-sans-pro, sans-serif;
  }
/* Testimonial */
.testimonials{
  grid-area: testimonials;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  margin-bottom: 20px;
}
  .testimonialTitle{
    display: flex;
    flex-direction: column;
    border: 25px solid rgba(1, 49, 16, 0.25);
    padding: 40px;
  }
  .testimonialTitle h3{
    font-size: 4rem;
    font-family: ivymode;
    color: #013110;
    padding: 40px 40px 0px 40px;
  }
  .testimonialTitle #bar{
    margin-top: -10px;
    margin-left: 40px;
    margin-right: auto;
  }
  .testimonialTitle ul{
    border-left: 2px solid #a1ada0;
    margin-left: 1.5em 10px;
    margin-bottom: 0px;
    padding-left: 20px;
  }
  .testimonialTitle li{
    list-style: none;
    font-size: 1.25rem;
    font-family: ivymode, serif;
    padding: 20px;
  }


/* Testimonial Carousel*/
  
.carousel {
  height: 600px;
  width: 650px;
  overflow: hidden;
  text-align: center;
  position: relative;
  padding: 0;
  list-style: none;
}
.carousel__controls,
.carousel__activator {
  display: none;
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__track {
  transform: translateX(0%);
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__slide:nth-of-type(1) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__controls:nth-of-type(1) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(1) {
  opacity: 1;
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__track {
  transform: translateX(-100%);
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__slide:nth-of-type(2) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__controls:nth-of-type(2) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(2) {
  opacity: 1;
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__track {
  transform: translateX(-400%);
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__slide:nth-of-type(3) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__controls:nth-of-type(3) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(3) {
  opacity: 1;
}

.carousel__control {
  height: 30px;
  width: 30px;
  margin-top: -15px;
  top: 50%;
  position: absolute;
  display: block;
  cursor: pointer;
  border-width: 5px 5px 0 0;
  border-style: solid;
  border-color: #1f211d;
  opacity: 0.35;
  outline: 0;
  z-index: 3;
}
.carousel__control:hover {
  opacity: 1;
}
.carousel__control--backward {
  left: 10px;
  transform: rotate(-135deg);
}
.carousel__control--forward {
  right: 10px;
  transform: rotate(45deg);
}
.carousel__indicators {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}
.carousel__indicator {
  height: 15px;
  width: 15px;
  border-radius: 100%;
  display: inline-block;
  z-index: 2;
  cursor: pointer;
  opacity: 0.35;
  margin: 0 2.5px 0 2.5px;
}
.carousel__indicator:hover {
  opacity: 0.75;
}
.carousel__track {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  transition: transform 0.5s ease 0s;
}
.carousel__track .carousel__slide {
  display: block;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
}
.carousel__track .carousel__slide:nth-of-type(1) {
  transform: translateX(0%);
}
.carousel__track .carousel__slide:nth-of-type(2) {
  transform: translateX(100%);
}
.carousel__track .carousel__slide:nth-of-type(3) {
  transform: translateX(200%);
}
.carousel--scale .carousel__slide {
  transform: scale(0);
}
.carousel__slide {
  height: 100%;
  position: absolute;
  padding: 50px;
  opacity: 0.9;
  background-color: black;
}
.carousel__slide h3{
  color: #1f211d;
  font-family: ivymode, serif;
  padding: 20px 10px 0px 10px;
  font-size: 1.2rem;
  margin: 40px 40px 10px 40px;
  font-style: italic;
  text-align: block;
  background-color: rgba(1, 49, 16, 0.1);
  border-radius: 50px;
}
.carousel__slide h4{
color: #1f211d;
font-family: ivymode, serif;
padding: -25px 10px 0px 10px;
font-size: 1rem;
text-align: center;
margin: 0 auto;
}
.carousel__slide p{
display: inline-block;
font-size: 0.90rem;
padding: 0px 10px 0px 10px;
color: #1f211d;;
font-family: freight-sans-pro, sans-serif;
text-align: center;
font-style: italic;
font-weight: 400;
}
.carousel__slide article {
  /* limit the width of the article container */
  width: 525px;
  /* display the contents in a column */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsl(0, 0%, 100%);
  line-height: 2;
  border-radius: 10px;
  margin: 0.5rem;
  margin-top: 20px;
  /* transition for the transform property, updated in the script */
  transition: transform 0.2s ease-out;
  box-shadow: 0 0 5px -2px hsla(0, 0%, 0%, 0.1);
}
.carousel__slide article figure {
  /* limit the width and height of the figure to show the image in a circle */
  width: 120px;
  height: 120px;
  border-radius: 50%;
  /* specify negative margin matching half the height of the element */
  margin-top: -60px;
  /* position relative for the pseudo element */
  position: relative;
  
}
.carousel__slide article figure:before {
  /* add a border around the figure matching the color of the background, faking the clip */
  content: "";
  border-radius: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-clip: padding-box; 
  box-shadow: 0 1px hsla(0, 0%, 0%, 0.1);
}
.carousel__slide article figure img {
  /* stretch the image to cover the size of the wrapping container */
  border-radius: inherit;
  width: 130%;
  height: 130%;
  margin-left: -12px;
  /* object fit to maintain the aspect ratio and fit the width/height */
  object-fit: cover;
}

.carousel__slide article div {
  /* center the text in the div container */
  text-align: center;
  margin: 2rem;
}
.carousel__slide article div p {
  color: hsl(250, 5%, 45%);
  font-weight: 400;
  font-size: 1.1rem;
  font-style: italic;
  margin: 1rem 0 3rem;
  font-family: ivymode, serif;
  /* position relative for the pseudo element */
  position: relative;
  z-index: 5;
}
.carousel__slide article div p:before {
  /* with SVG elements include two icons for the quote */
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: -5;
  opacity: 0.05;
  /* position the icons at either end of the paragraph, rotate the second to have a mirrorer image */
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="70" height="70"><rect x="0" y="40" width="30" height="30"></rect><path d="M 0 40 q 0 -40 30 -40 v 15 q -15 0 -15 25"></path><rect x="40" y="40" width="30" height="30"></rect><path d="M 40 40 q 0 -40 30 -40 v 15 q -15 0 -15 25"></path></svg>'),
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="70" height="70" transform="rotate(180)"><rect x="0" y="40" width="30" height="30"></rect><path d="M 0 40 q 0 -40 30 -40 v 15 q -15 0 -15 25"></path><rect x="40" y="40" width="30" height="30"></rect><path d="M 40 40 q 0 -40 30 -40 v 15 q -15 0 -15 25"></path></svg>');
  background-position: 20% 20%, 80% 80%;
  background-repeat: no-repeat;
}

.carousel__slide article div h1 {
  /* considerably reduce the size of the heading */
  color: hsl(260, 5%, 55%);
  font-family: "Lato", sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}
.carousel__slide article div h3 {
  /* considerably reduce the size of the heading */
  color: hsl(260, 5%, 55%);
  font-family: "Lato", sans-serif;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}

.testimonial-container {
  display: inline-block;
}
.my-carousel {
  border-radius: 5px;
  margin: 30px;
}
.carousel__slide {
  overflow: hidden;
}
.carousel--thumb .carousel__indicator {
  height: 30px;
  width: 30px;
}

.carousel__indicator {
  background-color: #013110;
}
.carousel__slide:nth-of-type(1),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(1) {
  background: -webkit-linear-gradient(rgba(246, 242, 236, 0.4), rgba(246, 242, 236, 0.4)), url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/properties/33_Bronte/33-Gardyne-St-Bronte-14.jpg");
  background: linear-gradient(rgba(246, 242, 236, 0.4), rgba(246, 242, 236, 0.4)), url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/properties/33_Bronte/33-Gardyne-St-Bronte-14.jpg"); /* The least supported option. */
  background-size: cover;
  background-position: center;
  opacity: 0.1;
}
.carousel__slide:nth-of-type(2),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(2) {
  background: -webkit-linear-gradient(rgba(246, 242, 236, 0.4), rgba(246, 242, 236, 0.4)), url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/10/marrickville.jpg");
  background: linear-gradient(rgba(246, 242, 236, 0.4), rgba(246, 242, 236, 0.4)), url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/10/marrickville.jpg"); /* The least supported option. */
  background-size: cover;
  background-position: center;
  opacity: 0.1;
}
.carousel__slide:nth-of-type(3),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(3) {
  background: -webkit-linear-gradient(rgba(246, 242, 236, 0.4), rgba(246, 242, 236, 0.4)), url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/10/immaculateholiday.jpg");
  background: linear-gradient(rgba(246, 242, 236, 0.4), rgba(246, 242, 236, 0.4)), url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/10/immaculateholiday.jpg"); /* The least supported option. */
  background-size: cover;
  background-position: center;
  opacity: 0.4;
}


/* Signup*/
.signup { 
    grid-area: signup; 
    background-size: cover;
    padding: 40px;
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
@media (max-width: 420px) {
  /*Hero-xs*/
  .grid-container{
    margin: 0;
    padding: 0;
    max-width: 100vw;
    grid-template-areas:
    "Hero"
    "Subhero"
    "Body1img"
    "Body1"
    "Body2"
    "icongroup"
    "testimonials"
    "signup"
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
    margin-left: -8px;
  }
  .hero-buttons{
    flex-direction: column;
  }
  /*Subhero-xs*/
  .Subhero{
    grid-area: Subhero; 
    padding: 0px;
    max-width: 100vw;
    border: 5px solid rgba(1, 49, 16, 0.25);
    text-align: center;
    margin: 0;
  }
  .Subhero h2{
    font-size: 1rem;
    width: 80%; 
    margin: 0 auto;
    text-align: center;
  }
  .Subhero br{
    display: none; 
  }
  .Subhero #bar{
    margin: 0 auto;
  }
  .Subhero-wrapper {
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 0;
    margin: 15px -60px 10px -30px;
  }
  .Subhero-card{
    min-width: 70%;
    height: 50%;
    min-height: 300px;
    margin-left: -20px;
  }
  .Subhero-card .Subhero-info h1 {
    font-size: 1rem;
  }
  .Subhero-card .Subhero-info p {
    font-size: 0.75rem;
  }
  /* Body1-xs */
  .Body1{
    grid-area: Body1;
    padding: 40px;
    max-width: 100vw;
    text-align: center;
    margin-top: -20px;
  }
  .Body1 #bar2{
    margin: 0 auto; 
  }
  .Body1 h2{
    font-size: 2rem;
  }
  .Body1 ul{
    border-right: none;
    text-align: center;
    margin-left: -45px;
    padding-right: 0px;
    width: 60vw;
  }
  .Body1 li{
    font-size: .95rem;
    width: 80vw;
  }
  .Body1-buttons {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .Body1img { 
    grid-area: Body1img; 
    max-width: 100vw;
    border: 0px solid rgba(1, 49, 16, 0.25);
    background-color: rgba(1, 49, 16, 0.25);  
  }
  .Body1img img{
    width: 100%;
    offset-position: bottom 10px right 20px;
  }
  /* Body2-xs */
  .Body2{
    grid-area: Body2;
    padding: 40px;
    max-width: 100vw;
  }
  .Body2 h2{
    font-size: 1.6rem;
  }
  .weare-container {
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 250px;
    max-width: 100vw;
  }
  .card {
    max-width: 60vw;
  }
  .card:hover {
    margin-top: -160px;
    height: 10rem;
  }
  .card__header-icon {
    margin-top: -2.5rem;
  }
  .card__media p {
    font-size: 0.9rem;
  }
  .weare-container img{
    max-width: 60vw;
  }

  /* Benefits-xs */
  .icongroup { 
    grid-area: icongroup; 
    padding: 40px;
    max-width: 100%;
    text-align: center;
  }
  .icongroup h2{
    font-family: ivymode;
    color: #013110;
    font-size: 2rem;
  }
  .icongroup #bar2{
    margin: 0 auto;
  }
  .benefits-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 40px;
  }
  .benefits-content h4 {
    font-family: freight-sans-pro;
    color: #013110;
    font-size: 1rem;
    padding: 20px;
    font-weight: 600;
    }
  .benefits-content img{
    height: 100px;
    width: 100px;
    transition: all .2s ease-in-out;
  }
  .benefits-icon{
    max-width: 80%;
    margin: 10px;
  }
    .benefit-icon p{
      display: inline-block;
      font-size: 1.5rem;
      font-family: freight-sans-pro, sans-serif;
    }
    /* Testimonials -xs*/
  .testimonials{
    grid-area: testimonials;
    flex-direction: column;
    max-width: 100vw;
  }
  .testimonialTitle{
    max-width: 100vw;
  }
  .testimonialTitle h3{
    font-size: 1.7rem;
  }
  .testimonialTitle ul li p{
    font-size: 1rem;
  }
  .carousel {
    max-width: 80vw;
  }
  .carousel__slide {
    max-width: 90vw;
    max-height: 65vh;
  }
  .carousel__slide article {
    max-width: 50vw;
  }
.carousel__slide h3{
  padding: 10px 5px 0px 5px;
  font-size: 0.5rem;
  font-style: italic;
}
.carousel__slide h4{
padding: -25px 10px 0px 10px;
font-size: 0.3rem;
}
.carousel__slide p{
display: inline-block;
font-size: 0.25rem;
padding: 0px 2px 0px 2px;
color: #1f211d;;
font-family: freight-sans-pro, sans-serif;
text-align: center;
font-style: italic;
font-weight: 400;
}
.carousel__slide article figure {
  /* limit the width and height of the figure to show the image in a circle */
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* specify negative margin matching half the height of the element */
  margin-top: -60px;
  /* position relative for the pseudo element */
  position: relative;
  
}
.carousel__slide article figure:before {
  /* add a border around the figure matching the color of the background, faking the clip */
  content: "";
  border-radius: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-clip: padding-box; 
  box-shadow: 0 1px hsla(0, 0%, 0%, 0.1);
}
.carousel__slide article div h1{
  font-size: 0.75rem;
}
.carousel__slide article div p {
  font-size: 0.7rem;
}
  /* Signup -xs*/
  .signup{
    grid-area: signup;
    max-width: 100vw;
    margin-top: -20px;
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
@media (min-width: 421px) and (max-width: 767px) {
  .grid-container{
    margin: 0;
    padding: 0;
    max-width: 100vw;
    grid-template-areas:
    "Hero"
    "Subhero"
    "Body1"
    "Body1img"
    "Body2"
    "icongroup"
    "testimonials"
    "signup"
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
  /* Subhero -sm */
  .SubHero{
    grid-area: SubHero;
    max-width: 100vw;
  }
  .Subhero h2{
    font-size: 2rem;
    width: 85%; 
  }
  .Subhero br{
    display: none; 
  }
  .Subhero-wrapper {
    flex-direction: row;
    align-items: center;
    width: 90vw;
    margin: 15px 0px 5px 0px;;
  }
  .Subhero-card{
    min-width: 80%;
    min-height: 350px;
    max-height: 400px;
  }
  /* Body1 -sm */
  .Body1{
    grid-area: Body1;
    max-width: 100vw;
    margin-bottom: 100px;
  }
  .Body1 h2{
    font-size: 2rem;
  }
  .Body1 li{
    font-size: 1.2rem;
    width: 80vw;
    margin-left: -20px;
  }
  .Body1img{
    grid-area: Body1img;
    max-width: 100vw;
    border: 50px solid #a1ada0;
    background-color: #a1ada0;
  }
  .Body1img img{
    grid-area: Body1img;
    max-width: 100vw;
    border: none;
  }
  /* Body2 -sm */
  .Body2{
    grid-area: Body2;
    max-width: 100vw;
  }
  .Body2 h2{
    font-size: 2rem;
  }
  .weare-container {
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 150px;
    max-width: 100vw;
  }
  .card {
    max-width: 65vw;
  }
  .card:hover {
    margin-top: -160px;
    height: 10rem;
  }
  .card__header-icon {
    margin-top: -2.5rem;
  }
  .card__media p {
    font-size: 1rem;
  }
  .weare-container img{
    max-width: 65vw;
  }
  /* Benefits -sm */
  .icongroup{
    grid-area: icongroup;
    max-width: 100vw;
  }
  .icongroup h2 {
    font-size: 2rem;
  }
  /* Testimonials -sm */
  .testimonials{
    grid-area: testimonials;
    max-width: 100vw;
    flex-direction: column;
  }
  .testimonialTitle{
    max-width: 90vw;
  }
  .testimonialTitle h3{
    font-size: 1.7rem;
  }
  .testimonialTitle ul li p{
    font-size: 1rem;
  }
  .carousel {
    max-width: 85vw;
  }
  .carousel__slide article {
    max-width: 66vw;
  }
.carousel__slide h3{
  padding: 10px 5px 0px 5px;
  font-size: 0.5rem;
}
.carousel__slide h4{
padding: -25px 10px 0px 10px;
font-size: 0.3rem;
}
.carousel__slide p{
display: inline-block;
font-size: 0.4rem;
padding: 0px 2px 0px 2px;
color: #1f211d;;
font-family: freight-sans-pro, sans-serif;
text-align: center;
font-style: italic;
font-weight: 400;
}
.carousel__slide article figure {
  /* limit the width and height of the figure to show the image in a circle */
  width: 100px;
  height: 100px;
}
.carousel__slide article figure:before {
  /* add a border around the figure matching the color of the background, faking the clip */
  content: "";
  border-radius: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-clip: padding-box; 
  box-shadow: 0 1px hsla(0, 0%, 0%, 0.1);
}
.carousel__slide article div p {
  font-size: 0.85rem;
}
  /* Signup - sm */
  .signup{
    grid-area: signup;
    max-width: 100vw;
  }
}
/* Tablet- Portrait */
@media (min-width: 768px) and (max-width: 1023px) {
  .grid-container{
    margin: 0;
    padding: 0;
    max-width: 100vw;
    grid-template-areas:
    "Hero Hero Hero Hero Hero"
    "Subhero Subhero Subhero Subhero Subhero"
    "Body1img Body1img Body1 Body1 Body1"
    "Body2 Body2 Body2 Body2 Body2"
    "icongroup icongroup icongroup icongroup icongroup"
    "testimonials testimonials testimonials testimonials testimonials"
    "signup signup signup signup signup";
  }
  /* Hero -m */
  .Hero{
    grid-area: Hero;
    max-width: 100vw;
  }
  /* Subhero -m */
  .SubHero{
    grid-area: SubHero;
    max-width: 100vw;
  }
  .Subhero h2{
    font-size: 2rem;
    width: 85%; 
  }
  .Subhero br{
    display: none; 
  }
  .Subhero-wrapper {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
  }
  .Subhero-card{
    min-width: 40%;
    min-height: 350px;
    max-height: 400px;
  }
  .Subhero-card .Subhero-info h1 {
    font-size: 1.4rem;
    margin: 0px;
    font-family: ivymode, serif;
  }
  .Subhero-card .Subhero-info p {
    letter-spacing: 1px;
    font-size: 0.9rem;
    margin-top: 4px;
    font-family: freight-sans-pro, sans-serif;
  }
  /* Body1 -m */
  .Body1{
    grid-area: Body1;
    max-width: 50vw;
    margin-bottom: 100px;
    text-align: right;
  }
  .Body1 h2{
    font-size: 2rem;
  }
  .Body1 ul{
    z-index: 2;
    border-right: 2px solid #a1ada0;
    margin-right: 20px;
    padding-right: 10px;
    text-align: block;
  }
  .Body1 li{
    font-size: 1rem;
    width: 40vw;
    margin-left: 20px;
  }
  .Body1img{
    grid-area: Body1img;
    max-width: 100vw;
    margin-top: 100px;
    margin-left: 20px;
    border: none;
    background-color: transparent; 
  }
  .Body1img img{
    width: 120%;
    border: 50px solid #a1ada0;
    z-index: -1;
  }
  .Body1-buttons {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* Body2 -m */
  .Body2{
    grid-area: Body2;
    max-width: 100vw;
  }
  .Body2 h2{
    font-size: 2rem;
  }
  .weare-container {
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 150px;
    max-width: 100vw;
  }
  .card {
    max-width: 65vw;
  }
  .card:hover {
    margin-top: -160px;
    height: 10rem;
  }
  .card__header-icon {
    margin-top: -2.5rem;
  }
  .card__media p {
    font-size: 1rem;
  }
  .weare-container img{
    max-width: 65vw;
  }
  /* Benefits -m */
  .icongroup{
    grid-area: icongroup;
    max-width: 100vw;
  }
  .icongroup h2 {
    font-size: 2rem;
  }
  /* Testimonials -m */
  .testimonials{
    grid-area: testimonials;
    max-width: 100vw;
    flex-direction: column;
  }
  .testimonialTitle{
    max-width: 90vw;
  }
  .testimonialTitle h3{
    font-size: 1.7rem;
  }
  .testimonialTitle ul li p{
    font-size: 1rem;
  }
  .carousel {
    max-width: 85vw;
  }
  .carousel__slide article {
    max-width: 66vw;
  }
.carousel__slide h3{
  padding: 10px 5px 0px 5px;
  font-size: 0.5rem;
}
.carousel__slide h4{
padding: -25px 10px 0px 10px;
font-size: 0.3rem;
}
.carousel__slide p{
display: inline-block;
font-size: 0.4rem;
padding: 0px 2px 0px 2px;
color: #1f211d;;
font-family: freight-sans-pro, sans-serif;
text-align: center;
font-style: italic;
font-weight: 400;
}
.carousel__slide article figure {
  /* limit the width and height of the figure to show the image in a circle */
  width: 100px;
  height: 100px;
}
.carousel__slide article figure:before {
  /* add a border around the figure matching the color of the background, faking the clip */
  content: "";
  border-radius: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-clip: padding-box; 
  box-shadow: 0 1px hsla(0, 0%, 0%, 0.1);
}
.carousel__slide article div p {
  font-size: 0.85rem;
}
  /* Signup - m */
  .signup{
    grid-area: signup;
    max-width: 100vw;
  }
}

/* Tablet- Landscape and sm Laptop/Desktop */
@media (min-width: 1024px) {
  .grid-container{
    margin: 0;
    padding: 0;
    max-width: 100vw;
    grid-template-areas:
    "Hero Hero Hero Hero Hero"
    "Subhero Subhero Subhero Subhero Subhero"
    "Body1img Body1img Body1 Body1 Body1"
    "icongroup icongroup icongroup icongroup icongroup"
    "Body2 Body2 Body2 Body2 Body2"
    "testimonials testimonials testimonials testimonials testimonials"
    "signup signup signup signup signup";
  }
  /* Hero -lg */
  .Hero{
    grid-area: Hero;
    max-width: 100vw;
  }
  /* Subhero -lg */
  .SubHero{
    grid-area: SubHero;
    max-width: 100vw;
  }
  .Subhero h2{
    font-size: 2rem;
    width: 85%; 
  }
  .Subhero br{
    display: none; 
  }
  .Subhero-card {
    width: 20%;
    min-width: 220px;
    height: 290px;
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    background: white;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: 0.4s ease-out;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  }
  .Subhero-card .Subhero-info h3 {
    font-size: 1rem;
    margin-top: 20px;
  }
  .Subhero-card .Subhero-info p {
    letter-spacing: 0.95px;
    font-size: 0.9rem;
    margin-top: 4px;
    font-family: freight-sans-pro, sans-serif;
  }
  /* Body1 -lg */
  .Body1{
    grid-area: Body1;
    text-align: right;
  }
  /* Body2 -lg */
  .Body2{
    grid-area: Body2;
    max-width: 100vw;
  }
  .weare-container {
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: -80px;
    margin-bottom: 150px;
    max-width: 100vw;
  }
  .card {
    max-width: 30vw;
  }
  .card:hover {
    margin-top: -160px;
    height: 10rem;
  }
  .card__header-icon {
    margin-top: -2.5rem;
  }
  .card__media p {
    font-size: 1.1rem;
  }
  .weare-container img{
    max-width: 30vw;
  }
  /* Benefits -lg */
  .icongroup{
    grid-area: icongroup;
    max-width: 100vw;
  }
  .icongroup h2 {
    font-size: 2rem;
  }
  /* Testimonials -lg */
  .testimonialTitle{
    max-width: 90vw;
  }
  .testimonialTitle h3{
    font-size: 3rem;
  }
  .carousel {
    width: 50vw;
  }
  .carousel__slide article {
    width: 95%;
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