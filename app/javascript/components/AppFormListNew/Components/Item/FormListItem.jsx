import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Button from '../UI/Button';
import Card from '../UI/Card';





const FormListItem = (props) => {
  const [enteredComment, setEnteredComment] = useState('');
  const [enteredOption, setEnteredOption] = useState('');

    const AddUserHandler = (event) => {
      event.preventDefault();
      console.log(enteredComment,enteredOption);
    }
    const changeCommentHandler = (event) => {
      setEnteredComment(event.target.value);
    }

    const changeOptionHandler = (event) => {
      setEnteredOption(event.target.value);

    }
  return(
      <div>
        <Card>
            <form onSubmit={AddUserHandler}>
              <label id="comment">Comment:</label>
              <input id="comment-input" onChange={changeCommentHandler} type="text"/>
              <label id="label-select">Example select</label>
                  <select className="form-control" id="exampleFormControlSelect1" onChange={changeOptionHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
              <button id="button-add-movie-js" type="submit">Add a movie</ button>
            </form>
        </Card>
      </div>

    );

};

export default FormListItem;
