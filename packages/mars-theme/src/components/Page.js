import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
// import Testimonials from "./testimonials/Testimonials.js";
import FeaturedMedia from "./featured-media";
import FadeIn from 'react-fade-in';

const homeHero = "https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/hero/home-hero.gif";

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
  return data.isReady ?  (
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
    .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    width: 100vw;
    overflow: hidden;
    background: #C33764;  /* fallback colour. Make sure this is just one solid colour. */
    background: -webkit-linear-gradient(rgba(255, 255, 255, 0.3), rgba(21, 50, 17, 0.3)), url(${homeHero});
    background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(21, 50, 17, 0.3)), url(${homeHero}); /* The least supported option. */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    }
    img {
      object-fit: cover;
    }
    .hero-header-text{
      font-family: ivymode, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.95em;
      display: flex;
      flex-direction: column;
      margin: 10px;
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
          }
          h4{
            font-size: 1.5rem;
            color: #013110;
            padding: 10px;
            font-family: ivymode;
          }
      }
      .sub-content{
      background-color: #f6f2ec;
      display: flex;
      flex-direction: row;
        .sub-text{
          display: inline-block;
          padding: 25px;
          width: 85%;
          h3{
            color: #013110;
            font-family: ivymode;
            font-size: 1rem;
          }
          img {
            width: 100%;
            max-height: 280px;

            height: auto;
          }
          p{
            font-size: 1rem;
            padding: 10px;
            margin-top: 10px;
            font-family: freight-sans-pro;
            font-weight: 500;
            color: #013110;
          }
        }
      }
    } 
    .body1{
    background-color: #013110;
      .body1-content{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        color: #f6f2ec; 
        .body1-img{
          min-height: 700px;
          width: 55%;
          background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/grteam.jpg");
          background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/grteam.jpg"); /* The least supported option. */
          background-repeat: no-repeat;
          background-size: cover;
          background-position:45% 75%;
        }
        }
        .body1-text{
          width: 45%;
          margin-left: 10px;
          padding-right: 20px;
          h2{
          font-size: 2rem;
          color: #013110;
          font-family: ivymode;
          letter-spacing: 2px;
          }
          h4{
          font-size: 1rem;
          color: #013110;
          font-family: ivymode;
          letter-spacing: 2px;
          }
          p{
            color: #013110;
          }
          .body1-points{
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            h3{
              color: #ccb25c;
              width: 100%;
              font-size: 2rem;
              font-family: ivymode;
              letter-spacing: 2px;
            }
            p{
              color: #f6f2ec;
              font-size: 1rem;
              font-family: freight-sans-pro;
            }
              .body1-point{
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 12px;
              font-family: ivymode;
              font-weight: 400;
              margin-left: -10px;
              img{
                width: 90px;
                height: 90px;
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
        font-family: freight-sans-pro;
        color: #013110;
        padding: 20px;
        img{
          height: 100px;
          width: 100px;
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
        font-size: 2rem;
        font-family: ivymode;
        background-color: #013110;
        color: #ccb25c;
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
      h3{
        width: 90%;
        color: #013110;
        font-family: ivymode;
      }
        p {
          width: 90%;
          color: #013110;
          font-family: freight-sans-pro;
        }
      }
    }
  }
  .signup{
    background-color: #013110;
    padding: 40px;
    .signup-container{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      .signup-text{
        font-size: 1rem;
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
`
/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
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
  @media (max-width: 1080px) {
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
          }
          h4{
            font-size: 1.5rem;
            color: #013110;
            padding: 10px;
          }
      }
      .sub-content{
      background-color: #f6f2ec;
      display: flex;
      flex-direction: column;
        .sub-text{
          h3{
            color: #013110;
          }
          img {
            display: inline-block;
            min-height: 80%;
            overflow: hidden;
          }
          p{
            font-size: 1rem;
            padding: 10px;
            margin-top: -40px;
          }
        }
      }
    } 
    .body1{
    background-color: #013110;
      .body1-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #f6f2ec; 
        .body1-img{
          min-height: 650px;
          width: 100%;
          background-position: 20% 40%;
        } 
        }
        .body1-text{
          width: 85%;
          margin-left: 10px;
          padding-right: 20px;
          h2{
          font-size: 2rem;
          color: #013110;
          }
          h4{
          font-size: 1rem;
          color: #013110;
          }
          p{
            color: #013110;
          }
          .body1-points{
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            h3{
              color: #ccb25c;
              width: 100%;
              font-size: 2rem;
            }
            p{
              color: #f6f2ec;
              font-size: 1rem;
            }
              .body1-point{
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 12px;
              margin-left: -10px;
              img{
                width: 90px;
                height: 90px;
              }
          }
        }
      }
    }
  }


  @media screen and (max-width: 750px) {
    .hero {
      height: 60vh;
    }
    img {
      object-fit: cover;
    }
    .hero-header{
      font-size: 1.2rem;
    }
    .hero-buttons{
      display: flex;
      align-items: center;
      flex-direction: column;
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
          }
          h4{
            font-size: 1.5rem;
            color: #013110;
            padding: 10px;
          }
      }
      .sub-content{
      background-color: #f6f2ec;
      display: flex;
      flex-direction: column;
        .sub-text{
          display: flex;
          flex-direction: column;
          padding: 25px;
          width: 85%;
          h3{
            color: #013110;
          }
          img {
            max-width: 100%;
            height: auto;
            overflow: hidden;
          }
          p{
            font-size: 1rem;
            padding: 10px;
            margin-top: 10px;
          }
        }
      }
    } 
    .body1{
    background-color: #013110;
      .body1-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #f6f2ec; 
        .body1-img{
          min-height: 350px;
          width: 100%;
        } 
        }
        .body1-text{
          width: 85%;
          margin-left: 10px;
          padding-right: 20px;
          h2{
          font-size: 2rem;
          color: #013110;
          }
          h4{
          font-size: 1rem;
          color: #013110;
          }
          p{
            color: #013110;
          }
          .body1-points{
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            h3{
              color: #ccb25c;
              width: 100%;
              font-size: 2rem;
            }
            p{
              color: #f6f2ec;
              font-size: 1rem;
            }
              .body1-point{
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 12px;
              margin-left: -10px;
              img{
                width: 90px;
                height: 90px;
              }
          }
        }
      }
    }

        
        .benefits{
        display: none;
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
          color: #013110;
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
      padding: 40px;
      .signup-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        .signup-text{
          font-size: 1rem;
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