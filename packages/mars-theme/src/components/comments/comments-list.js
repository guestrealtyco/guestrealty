import React from "react";
import { connect, styled } from "frontity";

const CommentsList = ({ state, libraries, postId }) => {
    const data = state.source.get(`@comments/${postId}`);
    const Html2React = libraries.html2react.Component;

    return(
        <>
        <Container>
            {data.items.slice(0).reverse().map(({id}) => {
                return(
                    <>
                        <Comment>
                            <div>
                                {state.source.comment[id].author_name || "Anonymous"} commented:
                            </div>
                            <CommentContent>
                                <Html2React 
                                    html={state.source.comment[id].content.rendered}
                                />
                                <div className="timestamp">Posted On: {state.source.comment[id].date}</div>
                            </CommentContent>
                        </Comment>
                        <div id="bar"></div>
                    </>
                );
            })}
        </Container>
        </>
    );
};

export default connect(CommentsList);

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
max-width: 900px;
margin: 40px;
color: #153211;
    #bar{
      height: 5px;
      width: 40%;
      background-color: #DBC472;
    }
`

const Comment = styled.div`
border: 1px solid gray;
border-radius: 15px;
background-color: #153211;
color: #ccb25c;
width: 80%;
padding: 25px;
margin: 20px;
font-weight: 600;
-webkit-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
  -moz-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
  box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
`

const CommentContent = styled.div`
color: #f6f2ec;
font-weight: 400;
    .timestamp{
        font-weight: 200;
        font-style: italic;
    }
`
