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
    <FadeIn
    transitionDuration = '1400'
    >
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
    </FadeIn>


  ) : null;
   
};
export default connect(Page);
const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "SourceSansPro", "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 100%;
  margin: 0;
    .directions{
      display: none;
    }
    #bar2{
      height: 5px;
      width: 25%;
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
      min-width: 100%;
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
  #myVideo {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      object-fit: contain;
      min-width: 100%;
      max-height: 25vh;
    }
  p {
    line-height: 1.6em;
  }
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
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
    display: block;
    margin: auto;
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
    color: #495057;
    background-color: #f6f2ec;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;
    &:focus {
      outline-color: #1f38c5;
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
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }
  /* WordPress Core Align Classes */
  @media (min-width: 1081px) {
    #myVideo {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 0;
      object-fit: cover;
      min-width: 100%;
      min-height: 100%;
    }
    .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100vw;
    overflow: hidden;
    overflow: clip;
    }
    .hero-header-text{
      font-family: ivymode, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.95em;
      display: flex;
      flex-direction: column;
      margin: 10px;
      background-color: transparent;
      z-index: 0;
    
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
    .sub-hero{
      background-color: #f6f2ec;
      display: flex;
      flex-direction: column;
      padding: 20px 20px 40px 20px;

      .sub-header{
        margin-left: 10px;
        h2{
          color: #013110;
          font-size: 2.5em;
          font-weight: 600;
          padding: 10px;
          font-family: ivymode;
          max-width: 75%;
        }
        h4{
          font-size: 1.5rem;
          color: #013110;
          padding: 10px;
          font-family: ivymode;
        }
      }
      .sub-content {
        padding: 2rem;
        ul{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          grid-gap: 2rem;
          margin:0;
          padding: 0;
          li{
            border-radius: .5rem;
            list-style-type:none;
            -webkit-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
            -moz-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
            box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
            transition: all .2s ease-in-out;
              &:hover{
                transform: scale(1.05);
              }
            figure{
              max-height: 220px;
              overflow: hidden;
              border-top-left-radius: .5rem;
              border-top-right-radius: .5rem;
              position: relative;
              img{
                width: 100%;
                transition: all .2s ease-in-out;
                &:hover{
                  transform: scale(1.05);
                }
              }
              figcaption {
                border: 2px solid #ccb25e;
                position: absolute;
                bottom: 0;
                background-color: rgba(1,49,16,.7);
                width: 100%;
                h3{
                  color: #f6f2ec;
                  text-align: center;
                  font-family: ivymode, serif;
                  padding: .75rem;
                  font-size: 1rem;
                  span {
                    position: absolute;
                    margin: 0 auto;
                    overflow: hidden;
                    transform: translateX(-100%);
                    transition: transform 275ms ease;
                    &::before {
                      display: inline-block;
                      content: attr(data-content);
                      //color to be filled
                      color: #ccb25c;
                      transform: translateX(100%);
                      transition: transform 275ms ease;
                      text-decoration: underline;
                    }
                  }
                  &:hover {
                    span {
                      transform: translateX(0);
                      &::before {
                        transform: translateX(0);
                      }
                    }
                  }
                }
              }
            }
            p{
              font-family: freight-sans-pro, sans-serif;
              font-size: 1rem;
              font-weight: 400;
              line-height: 1.5;
              padding: 1rem;
              margin: 1rem;
              color: #666666
            }
          }
        }    
      }
    }
    .body1{
      background-color: #f6f2ec;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      min-width: 100%;
      .body1-content{
        display: block;
        color: #f6f2ec; 
        max-width: 50%;
        min-height: 100%;
        .body1-img{
          min-height: 100%;
          img{
            height: 100%;
            transition: all .2s ease-in-out;
                &:hover{
                  transform: scale(1.05);
                }
          }
        }
      }
      .body1-text{
        display: flex;
        flex-direction: column;
          background-color: #013110;
          color: #f6f2ec;
          max-width: 50%;
          -webkit-backface-visibility: hidden; /* Safari */
          backface-visibility: hidden;
          min-height: 525px;
          padding: 40px;
          h3{
            font-family: ivymode, serif;
            text-align: left;
            font-size: 2.5rem;
            color: #ccb25c;
            margin-bottom: 0;
          }
          p{
            font-family: freight-sans-pro, sans-serif;
            font-size: 1rem;
          }
          .tabsContainer{
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            margin-top: 20px;
            .whytabs{
              display: flex;
              position: relative;
              width: 100%;
              h1, h3{
                text-transform: uppercase;
                font-weight: normal;
              }
              .tabs{
                  width: 100%;
                  display: inline-block;
                  margin: 0 auto;
                  position: relative;
              }

              .tabs .tab{
                  display: inline-block;
                  padding: 10px;
                  border-left: 2px solid #ccb25c;
                  border-right: 2px solid #ccb25c;
              }

              .tabs .tab>input[type="radio"] {
                  position: absolute;
                  display: none;
                  height: 30px;
                  width: 80%;
                  color: #013110;
                  background: #013110;
              }

              .tabs .tab>label {
                  display: block;
                  padding: 6px;
                  font-size: 1rem;
                  text-transform: uppercase;
                  cursor: pointer;
                  position: relative;
                  color: #f6f2ec;
                  background: #013110;
                  font-family: ivymode, serif;
              }

              .tabs .content {
                  z-index: 0;/* or display: none; */
                  overflow: hidden;
                  width: 80%;
                  padding: 10px;
                  position: absolute;
                  top: 35px;
                  left: 25px;
                  background: #013110, 0.7;
                  color: #f6f2ec;
                  font-family: freigh-sans-pro, sans-serif;
                  opacity:0;
                  transition: opacity 400ms ease-out;
              }

              .tabs>.tab>[id^="tab"]:checked + label {
                  top: 0;
                  background: #013110;
                  color: #ccb25c;
                  text-decoration: underline;
              }

              .tabs>.tab>[id^="tab"]:checked ~ [id^="tab-content"] {
                  z-index: 1;/* or display: block; */
                  opacity: 1;
                  transition: opacity 400ms ease-out;
              }
            }
          }
          
        }
    }
    .benefits{
    
      display: flex;
      flex-direction: column;
      background-color: #f6f2ec;
      padding: 20px;
    }
    .benefits-header{
    
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
        color: #013110;
        padding: 10px;
        font-family: ivymode;
      }
      .benefits-content{
      
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-around;
        p {font-family: freight-sans-pro;
        color: #013110;
        font-size: 1rem;
        padding: 20px;
        font-weight: 600;
        }
        img{
          height: 100px;
          width: 100px;
          transition: all .2s ease-in-out;
          &:hover{
            transform: scale(1.05);
          }
        }
      }
      .benefit-icon{
      
          display: flex;
          flex-direction: column;
          align-items: center;
          p{
            font-size: 1.5rem;
            font-family: freight-sans-pro, sans-serif;
          }
        }
    .testimonials{
    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 1%;
      .testimonialTitle{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1rem;
        font-family: ivymode;
        padding: 20px;
        color: #013110;
        p{
          font-size: 1.5rem;
          color: #ccb25c;
        }
      }
      .testimonialBox{
        display: flex;
        justify-content: space-evenly;
        .userComment{
          display: flex;
          flex-direction: column;
          flex-basis: 30%;
          align-items: flex-start;
          justify-content: baseline;
          background: #ccb25c; /* Old browsers */
          border-radius: 20px;
          background: -moz-linear-gradient(-45deg, #ccb25c 0%, #f6f2ec 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(-45deg, #ccb25c 0%,#f6f2ec 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(135deg, #ccb25c 0%,#f6f2ec 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ccb25c', endColorstr='#f6f2ec',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
          h3{
            width: 90%;
            color: #013110;
            font-family: ivymode;
            display: inline-block;
            text-align: center;
            margin-bottom: 0;
            }
          p {
            display: inline-block;
            text-align: center;
            width: 90%;
            color: #013110;
            font-family: freight-sans-pro;
            margin: 0;
            }
        }
      }
    }
  .signup{
  
    background-color: #013110;
      background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg");
      background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg"); /* The least supported option. */
      background-repeat: no-repeat;
      background-size: cover;
    padding: 40px;
    .signup-container{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      .signup-text{
        font-size: 2rem;
        color: #DBDBB6;
        font-family: ivymode, sans-serif;
        font-style: normal;
      }
      .signup-buttons{
        display: flex;
        flex-direction: row;
      }
    }
  }
  }

  @media (max-width: 1080px) {
    #myVideo {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 0;
      object-fit: cover;
      min-width: 100%;
      min-height: 100%;
    }
    iframe{
      height: 6750px;
    }
    .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100vw;
    overflow: hidden;
    overflow: clip;
    }
    .hero-header-text{
      font-family: ivymode, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.95em;
      display: flex;
      flex-direction: column;
      margin: 10px;
      background-color: transparent;
      z-index: 0;
    
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
    .sub-hero{
      background-color: #f6f2ec;
      display: flex;
      flex-direction: column;
      padding: 20px 20px 40px 20px;
      .sub-header{
        margin-left: 10px;
        h2{
          color: #013110;
          font-size: 1.5em;
          font-weight: 600;
          padding: 10px;
          font-family: ivymode;
          max-width: 80%;
        }
        h4{
          font-size: 1.5rem;
          color: #013110;
          padding: 10px;
          font-family: ivymode;
        }
      }
      .sub-content {
        padding: 2rem;
        ul{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          grid-gap: 2rem;
          margin:0;
          padding: 0;
          li{
            border-radius: .5rem;
            list-style-type:none;
            -webkit-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
            -moz-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
            box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
            transition: all .2s ease-in-out;
              &:hover{
                transform: scale(1.05);
              }
            figure{
              max-height: 220px;
              overflow: hidden;
              border-top-left-radius: .5rem;
              border-top-right-radius: .5rem;
              position: relative;
              img{
                width: 100%;
                transition: all .2s ease-in-out;
                &:hover{
                  transform: scale(1.05);
                }
              }
              figcaption {
                border: 2px solid #ccb25e;
                position: absolute;
                bottom: 0;
                background-color: rgba(1,49,16,.7);
                width: 100%;
                h3{
                  color: #f6f2ec;
                  text-align: center;
                  font-family: ivymode, serif;
                  padding: .75rem;
                  font-size: 1rem;
                  span {
                    position: absolute;
                    margin: 0 auto;
                    overflow: hidden;
                    transform: translateX(-100%);
                    transition: transform 275ms ease;
                    &::before {
                      display: inline-block;
                      content: attr(data-content);
                      //color to be filled
                      color: #ccb25c;
                      transform: translateX(100%);
                      transition: transform 275ms ease;
                      text-decoration: underline;
                    }
                  }
                  &:hover {
                    span {
                      transform: translateX(0);
                      &::before {
                        transform: translateX(0);
                      }
                    }
                  }
                }
              }
            }
            p{
              font-family: freight-sans-pro, sans-serif;
              font-size: 1rem;
              font-weight: 400;
              line-height: 1.5;
              padding: 1rem;
              margin: 1rem;
              color: #666666
            }
          }
        }    
      }
    }
    .body1{
      display: flex;
      flex-direction: column;
      width: 100%;
      .body1-content{
        display: block;
        color: #f6f2ec; 
        width: 100%;
        .body1-img{
          min-width: 100%;
          img{
            min-width: 100%;
            margin-bottom: -150px;
          }
          }
      }
      .body1-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: #013110;
        max-width: 100%;
        min-height: 600px;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        h3{
          font-size: 2rem;
          max-width: 80%;
          font-family: ivymode, sans-serif;
          color: #ccb25e;
        }
        p{
          max-width: 80%;
          font-size: 1rem;
          font-family: freight-sans-pro, serif;
          color: #f6f2ec;
        }
        .tabsContainer{
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            margin-top: 20px;
            .whytabs{
              display: flex;
              position: relative;
              width: 100%;
              h1, h3{
                text-transform: uppercase;
                font-weight: normal;
              }
              .tabs{
                  width: 100%;
                  display: inline-block;
                  margin: 0 auto;
                  position: relative;
              }

              .tabs .tab{
                  display: inline-block;
                  padding: 10px;
                  border-left: 2px solid #ccb25c;
                  border-right: 2px solid #ccb25c;
              }

              .tabs .tab>input[type="radio"] {
                  position: absolute;
                  display: none;
                  height: 30px;
                  width: 80%;
                  color: #013110;
                  background: #013110;
              }

              .tabs .tab>label {
                  display: block;
                  padding: 6px;
                  font-size: 1rem;
                  text-transform: uppercase;
                  cursor: pointer;
                  position: relative;
                  color: #f6f2ec;
                  background: #013110;
                  font-family: ivymode, serif;
              }

              .tabs .content {
                  z-index: 0;/* or display: none; */
                  overflow: hidden;
                  width: 80%;
                  padding: 10px;
                  position: absolute;
                  top: 35px;
                  left: 25px;
                  background: #013110, 0.7;
                  color: #f6f2ec;
                  font-family: freigh-sans-pro, sans-serif;
                  font-size: 1rem;
                  opacity:0;
                  transition: opacity 400ms ease-out;
              }

              .tabs>.tab>[id^="tab"]:checked + label {
                  top: 0;
                  background: #013110;
                  color: #ccb25c;
                  text-decoration: underline;
              }

              .tabs>.tab>[id^="tab"]:checked ~ [id^="tab-content"] {
                  z-index: 1;/* or display: block; */
                  opacity: 1;
                  transition: opacity 400ms ease-out;
              }
            }
          }
      }
    }
    .benefits{
      display: flex;
      flex-direction: column;
      background-color: #f6f2ec;
      padding: 20px;
    }
    .benefits-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1rem;
        color: #013110;
        padding: 10px;
        font-family: ivymode;
        margin-bottom: 10px;
      }
      .benefits-content{
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 2rem;
        p {font-family: freight-sans-pro;
        color: #013110;
        padding: 20px;
        font-weight: 600;
        }
        img{
          height: 100px;
          width: 100px;
          transition: all .2s ease-in-out;
          &:hover{
            transform: scale(1.05);
          }
        }
      }
      .benefit-icon{
          display: flex;
          flex-direction: column;
          align-items: center;   
          p{
            font-size: 1.2rem;
          }      
        }
      .testimonials{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1%;
        .testimonialTitle{
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 1rem;
          font-family: ivymode;
          color: #013110;
          padding: 10px;
          p{
            font-size: 1rem;
            color: #013110;
          }
        }
        .testimonialBox{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            color: #013110;
            padding: 10px;
            font-size: 1rem;
            border: 1px solid #ccb25c;

            .userComment{
              display: flex;
              flex-direction: column;
              width: 75%;
              align-items: center;
              justify-content: center;
              color: #013110;
              background: #ccb25c; /* Old browsers */
              background: -moz-linear-gradient(-45deg, #ccb25c 0%, #f6f2ec 100%); /* FF3.6-15 */
              background: -webkit-linear-gradient(-45deg, #ccb25c 0%,#f6f2ec 100%); /* Chrome10-25,Safari5.1-6 */
              background: linear-gradient(135deg, #ccb25c 0%,#f6f2ec 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ccb25c', endColorstr='#f6f2ec',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
              margin: 5px;
              border-radius: 20px;
              h3{
                color: #013110;
                font-family: ivymode, serif;
                display: flex;
                padding: 10px;
                margin: 0;
              }
              p {
                display: inline-block;
                width: 90%;
                color: #013110;
                font-family: freight-sans-pro, sans-serif;
                text-align: center;
                margin: 0;
              } 
          }
        }
      }
    .signup{
      background-color: #013110;
      background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg");
      background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg"); /* The least supported option. */
      background-repeat: no-repeat;
      background-size: cover;
      padding: 40px;
      display: flex;
      flex-direction: column;
      .signup-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        .signup-text{
          font-size: 1rem;
          color: #DBDBB6;
          font-family: ivymode, sans-serif;
          font-style: normal;
        }
        .signup-buttons{
          display: flex;
          flex-direction: column;
        }
      }
    }
    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="tel"],
    input[type="number"],
    input[type="date"],
    textarea,
    select {
      font-size: 0.75rem;
    }
  }
  @media screen and (max-width: 750px) {
    * {
    max-width: 100%;
  }
  #myVideo {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 0;
      object-fit: cover;
      min-width: 100%;
      min-height: 100%;
    }
    iframe{
      height: 6750px;
    }
    .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100vw;
    overflow: hidden;
    overflow: clip;
    }
    .hero-header-text{
      font-family: ivymode, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.95em;
      display: flex;
      flex-direction: column;
      margin: 10px;
      background-color: transparent;
      z-index: 0;
    
    }
    .hero-header{
      font-style: normal;
      padding: 20px;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 80px;
      /* identical to box height, or 143% */
      text-align: center;
      letter-spacing: -0.015em;
      color: #f6f2ec;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    }
    .sub-hero{
      background-color: #f6f2ec;
      display: flex;
      flex-direction: column;
      padding: 20px 20px 40px 20px;
      .sub-header{
        margin-left: 10px;
        h2{
          color: #013110;
          font-size: 1.5em;
          font-weight: 600;
          padding: 10px;
          font-family: ivymode;
          max-width: 80%;
        }
        h4{
          font-size: 1.5rem;
          color: #013110;
          padding: 10px;
          font-family: ivymode;
        }
      }
      .sub-content {
        padding: 2rem;
        ul{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          grid-gap: 2rem;
          margin:0;
          padding: 0;
          li{
            border-radius: .5rem;
            list-style-type:none;
            -webkit-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
            -moz-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
            box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
            transition: all .2s ease-in-out;
              &:hover{
                transform: scale(1.05);
              }
            figure{
              max-height: 220px;
              overflow: hidden;
              border-top-left-radius: .5rem;
              border-top-right-radius: .5rem;
              position: relative;
              img{
                width: 100%;
                transition: all .2s ease-in-out;
                &:hover{
                  transform: scale(1.05);
                }
              }
              figcaption {
                border: 2px solid #ccb25e;
                position: absolute;
                bottom: 0;
                background-color: rgba(1,49,16,.7);
                width: 100%;
                h3{
                  color: #f6f2ec;
                  text-align: center;
                  font-family: ivymode, serif;
                  padding: .75rem;
                  font-size: 1rem;
                  span {
                    position: absolute;
                    margin: 0 auto;
                    overflow: hidden;
                    transform: translateX(-100%);
                    transition: transform 275ms ease;
                    &::before {
                      display: inline-block;
                      content: attr(data-content);
                      //color to be filled
                      color: #ccb25c;
                      transform: translateX(100%);
                      transition: transform 275ms ease;
                      text-decoration: underline;
                    }
                  }
                  &:hover {
                    span {
                      transform: translateX(0);
                      &::before {
                        transform: translateX(0);
                      }
                    }
                  }
                }
              }
            }
            p{
              font-family: freight-sans-pro, sans-serif;
              font-size: 1rem;
              font-weight: 400;
              line-height: 1.5;
              padding: 1rem;
              margin: 1rem;
              color: #666666
            }
          }
        }    
      }
    }
    .body1{
      display: flex;
      flex-direction: column;
      width: 100%;
      .body1-content{
        display: block;
        color: #f6f2ec; 
        width: 100%;
        .body1-img{
          min-width: 100%;
          img{
            min-width: 100%;
            margin-bottom: -150px;
          }
          }
      }
      .body1-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #013110;
        max-width: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        h3{
          font-size: 2rem;
          max-width: 80%;
          font-family: ivymode, sans-serif;
          color: #ccb25e;
        }
        p{
          max-width: 80%;
          font-size: 0.95rem;
          font-family: freight-sans-pro, serif;
          color: #f6f2ec;
        }
        .tabsContainer{
          margin-top: -20px;
          display: flex;
          min-width: 100%;
          .whytabs{
            display: flex;
            flex-direction: row;
            .tabs{
                width: 100%;
                display: inline-block;
                margin-bottom: 50px;
                position: relative;
                font-size: 0.75rem;
            }

            .tabs .tab{
                display: inline-block;
                border-left: 2px solid #ccb25c;
                border-right: 2px solid #ccb25c;
                font-size: 0.75rem;
                padding: 0;
                margin: 0;
            }

            .tabs .tab>input[type="radio"] {
                position: absolute;
                display: none;
                height: 30px;
                width: 100%;
                color: #013110;
                background: #013110;
            }

            .tabs .tab>label {
                display: block;
                padding: 5px;
                margin: 0;
                text-transform: uppercase;
                font-size: 0.75rem;
                cursor: pointer;
                position: relative;
                color: #f6f2ec;
                background: #013110;
                font-family: ivymode, serif;
            }

            .tabs .content {
                z-index: 0;/* or display: none; */
                overflow: scroll;
                width: 100%;
                padding: 10px;
                position: absolute;
                top: 10px;
                left: 25px;
                background: #013110, 0.7;
                color: #f6f2ec;
                font-family: freigh-sans-pro, sans-serif;
                font-size: 0.75rem;
                opacity:0;
                transition: opacity 400ms ease-out;
            }
            .tabs>.tab>[id^="tab"]:checked + label {
                top: 0;
                background: #013110;
                color: #ccb25c;
                text-decoration: underline;
            }
            .tabs>.tab>[id^="tab"]:checked ~ [id^="tab-content"] {
                z-index: 1;/* or display: block; */
                opacity: 1;
                transition: opacity 400ms ease-out;
            }
          }
        }
      }
    }
    .benefits{
      display: flex;
      flex-direction: column;
      background-color: #f6f2ec;
      padding: 20px;
    }
    .benefits-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1rem;
        color: #013110;
        padding: 10px;
        font-family: ivymode;
        margin-bottom: 10px;
      }
      .benefits-content{
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 2rem;
        p {font-family: freight-sans-pro;
        color: #013110;
        padding: 20px;
        font-weight: 600;
        }
        img{
          height: 100px;
          width: 100px;
          transition: all .2s ease-in-out;
          &:hover{
            transform: scale(1.05);
          }
        }
      }
      .benefit-icon{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      .testimonials{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1%;
        .testimonialTitle{
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 1rem;
        font-family: ivymode;
          color: #013110;
          padding: 10px;
          p{
            font-size: 1rem;
            color: #013110;
          }
        }
        .testimonialBox{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            color: #013110;
            padding: 10px;
            font-size
            .userComment{
              display: flex;
              flex-direction: column;
              flex-basis: 30%;
              width: 75%;
              align-items: center;
              color: #013110;
              h3{
                color: #013110;
              }
              p {
                width: 90%;
                color: #013110;
              } 
          }
        }
      }
    .signup{
      background-color: #013110;
      background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg");
      background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg"); /* The least supported option. */
      background-repeat: no-repeat;
      background-size: cover;
      padding: 40px;
      display: flex;
      flex-direction: column;
      .signup-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        .signup-text{
          font-size: 1rem;
          color: #DBDBB6;
          font-family: ivymode, sans-serif;
          font-style: normal;
        }
        .signup-buttons{
          display: flex;
          flex-direction: column;
        }
      }
    }
    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="tel"],
    input[type="number"],
    input[type="date"],
    textarea,
    select {
      font-size: 0.75rem;
    }
  }
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