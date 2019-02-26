import React, { Component } from 'react';


function SavedList (props) {

  function navToHome(e) {
    e.preventDefault();
    props.history.push('/');
  }

  
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        { props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div onClick={navToHome} className="home-button">Home</div>
      </div>
    );
  }

  export default SavedList;
