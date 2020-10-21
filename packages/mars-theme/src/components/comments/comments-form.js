import React from "react";
import { connect, styled } from "frontity";
import Loading from "../loading";

const CommentsForm = ({ actions, state, postId }) => {
    
    const form = state.comments.forms[postId];
    return(
        <FormContainer>
           <div id="bar"></div>
        <h2>Add A Comment</h2>
        <Form
            onSubmit={(e) =>{
                e.preventDefault();
                actions.comments.submit(postId);
            }}
        >
            {form?.isSubmitting && <Loading />}
            <label>
                Name:&nbsp;&nbsp;
                <input
                    name="author_name"
                    onChange={(e) => 
                        actions.comments.updateFields(postId, {
                            authorName: e.target.value,
                        })
                    }
                    value={state.comments.forms[postId]?.fields?.authorName || ""}
                />
                {form?.errors?.authorName}
            </label>

            <label>
                Email:&nbsp;&nbsp;
                <input
                    name="author_email"
                    onChange={(e) => 
                        actions.comments.updateFields(postId, {
                            authorEmail: e.target.value,
                        })
                    }
                    value={state.comments.forms[postId]?.fields?.authorEmail || ""}
                />
                {form?.errors?.authorEmail}
            </label>

            <label>
                Comment:&nbsp;&nbsp;
                <input
                    name="content"
                    onChange={(e) => 
                        actions.comments.updateFields(postId, {
                            content: e.target.value,
                        })
                    }
                    value={state.comments.forms[postId]?.fields?.content || ""}
                />
                {form?.errors?.content}
            </label>

            {form?.errorMessage && <div>Error: {form?.errorMesage} </div>}
            

            <div className="errorMsg">
            {form?.isSubmitted && "The comment was submitted successfully!"}
            </div>
            <input className="button btn-gold-dark" type="submit" />
        </Form>
        <div id="bar"></div>
        </FormContainer>
    )
};

export default connect(CommentsForm);

const FormContainer = styled.div`
background-color: #f6f2ec;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
    h2{
        color: #153211;
    }
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border: 0.25px solid gray;
background-color: #153211;
border-radius: 15px;
padding: 50px;
margin-bottom: 20px;
width: 80%;
-webkit-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
-moz-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);

/* Input fields styles */
label{
    padding: 5px;
    margin: 5px;
    color: #ccb25c;
    font-weight: 600;
    width: 50%;
}
input,
textarea,
select {
  display: block;
  padding: 20px 12px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #f6f2ec;
  background-clip: padding-box;
  border: 1px solid gray;
  border-radius: 4px;
  outline-color: transparent;
  transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 8px 0 4px 0;
  -webkit-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
  -moz-box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);
  box-shadow: 19px 17px 12px -14px rgba(0,0,0,0.47);

  &:focus {
    outline-color: #153211;
  }
}

input[type="submit"] {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  padding: 12px 36px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  width: 50%;
  color: #ccb25c;
  background-color: #153211;
  border: 1px solid #ccb25c;
  outline-color: #ccb25c;
  transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
    .errorMsg{
        color: #f6f2ec;
    }
`