import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import Contact from "./Contact";

const Sub = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const sub = state.source[data.type][data.id];

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
      <Content>
        <Html2React html={sub.content.rendered} />
        <ContactContainer>
          <Contact/>
        </ContactContainer>
      </Content>
    </Container>
  ) : null;
};

export default connect(Sub);

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  margin: 0;
  background: #f6f2ec;
  
  .hero{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #153211;
    color: #ccb25c;
  }
  .hero-header-text{
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
  }
  .hero-img{
    height: 800px;
    width: 50%;
    overflow: hidden;
    background: #f6f2ec;  
    /* fallback colour. Make sure this is just one solid colour. */
    img{
      position: relative;
      margin-top: -25px;
      height: 850px;
      /* width: auto; */
    }
    /* background: -webkit-linear-gradient(rgba(255, 255, 255, 0.8), rgba(21, 50, 17, 0.8)), url("https://picsum.photos/1600/900");
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(21, 50, 17, 0.8)), url("https://picsum.photos/1600/900"); The least supported option. */
  }
  .hero-header{
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    line-height: 80px;
    /* identical to box height, or 143% */
    text-align: center;
    letter-spacing: -0.015em;
    color: #ccb25c;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .sub-hero{
    display: flex;
    flex-direction: column;
    background-color: #f6f2ec;
    .sub-header{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
      h2{
        color: #153211;
        font-size: 2.5rem;
      }
      h4{
        color: #153211;
      }
    }
  }
  .body1{
      background-color: #013110;
      .body1-content{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #c1ab22; 
        .body1-img{
          height: 900px;
          width: 50%;
          background: -webkit-linear-gradient(rgba(255, 255, 255, 0.8), rgba(21, 50, 17, 0.8)), url("https://picsum.photos/900/650");
          background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(21, 50, 17, 0.8)), url("https://picsum.photos/900/650"); /* The least supported option. */
        }
        }
        .body1-text{
          width: 50%;
          margin-left: 20px;
          padding-left: 20px;
          padding-right: 15px;
          h4{
          font-size: 1.5rem;
          color: #ccb25c;
          }
          p{
            color: #DBDBB6;
          }
          .body1-points{
            display: flex;
            flex-direction: column;
            padding: 20px;
            p{
              color: #DBDBB6;

            }
              .body1-point{
              display: flex;
              flex-direction: row;
              align-items: center;
              img{
                width: 90px;
                height: 90px;
              }
              .body1-subpoint{
                color: #DBDBB6;
            }
          }
        }
      }
    }
    .summary{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 20px;
      h3{
        color: #153211;
        font-size: 2rem;
      }
      .summary-points{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 90%;
        flex-wrap: wrap;
        h3{
          font-size: 1.5rem;
        }
        p{
          color: #153211;
        }
        .summary-point{
          display: flex;
          flex-direction: column;
          width: 45%;
        }
      }
    }
    .body2{
      background-color: #f6f2ec;
      .body2-content{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        color: #c1ab22; 
        .body2-img{
          height: 625px;
          width: 50%;
          background: -webkit-linear-gradient(rgba(255, 255, 255, 0.8), rgba(21, 50, 17, 0.8)), url("https://picsum.photos/900/650");
          background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(21, 50, 17, 0.8)), url("https://picsum.photos/900/650"); /* The least supported option. */
        }
        }
        .body2-text{
          width: 50%;
          margin-left: 20px;
          padding-left: 20px;
          h4{
          font-size: 1.5rem;
          color: #153211;
          }
          p{
            color: #153211;
          }
          .body2-points{
            display: flex;
            flex-direction: column;
            p{
              color: #153211;
            }
              .body2-point{
              display: flex;
              flex-direction: row;
              align-items: center;
              img{
                width: 90px;
                height: 90px;
              }
              .body2-subpoint{
                color: #DBDBB6;
            }
          }
        }
      }
    }
    .signup{
      display: flex;
      flex-direction: column;
      align-items: center;
      div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        h3{
          color: #153211;
          font-size: 2rem;
        }
        p{
          color: #153211;
        }
      }
  }
`

const ContactContainer = styled.div`
  background-color: #f6f2ec;
  width: 100%;
  padding: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
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
    color: #153211;
    background-color: #f6f2ec;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #153211;
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
    background-color: #153211;
    border: 1px solid #153211;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #153211;
    background-color: #f6f2ec;
  }

  /* WordPress Core Align Classes */
  @media (max-width: 750px) {
    .hero{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
    .hero-header-text{
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      font-size: 1rem;
    }
    .hero-img{
      display: none;
      img{
        display: none;
      }
    }
    .hero-header{
      font-size: 2rem;
      line-height: 50px;
    }
    .sub-hero{
      .sub-header{
          h2{
            font-size: 1.5rem;
          }
          h4{
            1
          }
      }
    }
    .body1{
      .body1-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .body1-img{
          display: none;     
        }
      }
      .body1-text{
        width: 1000%;
          h4{
          font-size: 1rem;
          }
          p{
            font-size: 0.75rem;
          }
          .body1-point{
            img{
              width: 10px;
              height: 10px;
            }
          }
        }
    }
    .summary{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      h3{
        color: #153211;
        font-size: 1.5rem;
      }
      .summary-points{
        display: flex;
        flex-direction: column;
        width: 80%;
        h3{
          font-size: 1.5rem;
          padding: 10px;
        }
        p{
          color: #153211;
        }
        .summary-point{
          display: flex;
          flex-direction: column;
          width: 100%;
        }
      }
    }
    .body2{
      .body2-content{
        display: none;
      }
    }
    .signup{
      padding: 25px;
      div{
        h3{
        font-size: 1.5rem;
        }
      }
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


