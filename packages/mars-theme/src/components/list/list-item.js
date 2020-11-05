import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import Image from "@frontity/components/image";
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const data = state.source.get(state.router.link);
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const isProperty = data.isPropertyArchive;

  console.log(isProperty)
  let readMoreLabel = 'Read more';
  if ( isProperty ) {
    readMoreLabel = 'More Details';
  }
  
  return (
    <>
      {isProperty && (
        <Article>
        <Link className="article-title" link={item.link}>
           
        {state.theme.featured.showOnList && (
          <FeaturedMedia id={item.featured_media} />
        )}
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link> 
        {/* If the post has an excerpt (short summary text), we render it */}
        {item.excerpt && (
          <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
        )}
        <Link className="redmore-btn" link={item.link}>{ readMoreLabel }...</Link>
        </Article>
      )}
      {!isProperty && (
        <Article>
        <Link className="article-title" link={item.link}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>  
        {state.theme.featured.showOnList && (
          <FeaturedMedia id={item.featured_media} />
        )}

        <div className="bio-info">
          {/* If the post has an author, we render a clickable author text. */}
          {author && (
            <StyledLink link={author.link}>
              <Image src={author.avatar_urls['48']} alt={author.name} />
              <AuthorName>
                <b>{author.name}</b>
              </AuthorName>
            </StyledLink>
          )}
          <PublishDate>
            {" "}
            {date.toDateString()}
          </PublishDate>
        </div>

        

        {/* If the post has an excerpt (short summary text), we render it */}
        {item.excerpt && (
          <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
        )}
        <Link className="redmore-btn" link={item.link}>{ readMoreLabel }...</Link>
        </Article>
      )}
      
    </>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);
const Article = styled.article`
  background-color: #013110;
  color: #f6f2ec;
  border: 3px solid #ccb25c;
  border-radius: 15px;
  max-width:771px;
  padding: 20px;
  margin:0 auto;
  position: relative;
  margin-bottom:3.5rem;
  -webkit-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
  -moz-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
  box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
  
  .bio-info {
    color: #ccb25c;
    margin-bottom:1rem;
    img {
      border-radius:50%;
      margin-right:0.5rem;
    }
  }
  .article-title {  
    color:#ccb25c;
    font-weight: 400;
    transition: all .3s ease;  
    &:hover {
      h1 {
        color:#ccb25c;
        font-weight: 800;
      }
    }
  }
  .redmore-btn {
    color: #ccb25c;
    font-weight: 400;
    transition: all .3s ease;
    &:hover {
      color:#ccb25c;
      font-weight: 800;
    }
  }
  /**Job articles**/
  &.job-article {
    max-width: 100%;
    margin: 0;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    .job-box {
      padding: 2rem;
      background: var(--white);
      box-shadow: 0px 2px 16px -9px rgba(0,0,0,0.5);
      border: 1px solid #ececec;
      border-radius:5px;
      transition: all .3s ease;
      display: flex;
      flex-grow: 1;      
      flex-direction: column;
      .job-title {
        text-decoration:none;
        h4 {
          transition: all .3s ease;
          font-family: ivymode, sans-serif;
        }        
        &:hover {
          h4 {
            color:var(--brand);
          }          
        }
      }
      .brand-btnhollow {        
        margin: auto auto 0 0;
        color:var(--brand);
        transition: all .3s ease;
        svg {
          fill:var(--black);
          transition: all .3s ease;
        }
        &:hover {
          color:var(--black);
          svg {
            fill:var(--brand);
          }
        }
      }
      .awsm-job-specification-wrapper {
        margin-bottom:0.5rem;
        .awsm-job-specification-job-category {
          .awsm-job-specification-term{
            &:before {
              content:'';
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'%3E%3Cpath d='M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z'/%3E%3C/svg%3E");
              width:14px;
              height:14px;
              position: relative;
              display: inline-block;
              margin-right: 0.5rem;
            }
          }
          margin-bottom:0.2rem;
        }
        .awsm-job-specification-job-location {
          .awsm-job-specification-term{
            &:before {
              content:'';
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z'/%3E%3C/svg%3E");
              width:14px;
              height:14px;
              position: relative;
              display: inline-block;
              margin-right: 0.5rem;
            }
          }
        }
      }
      &:hover {
        box-shadow: 0 5px 20px 0 rgba(0,0,0,.23);
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom:1.5rem;
  color: #ccb25c;
  box-sizing: border-box;
  transition: all .3s ease;
  font-family: ivymode, sans-serif;
`;

const AuthorName = styled.span`
  color: #ccb25c;
  font-size: 1rem;
  margin-right:1rem;
  font-family: ivymode, sans-serif;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
  font-family: ivymode, sans-serif;
`;

const PublishDate = styled.span`
  color: #ccb25c;
  font-size: 0.875rem;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
`;