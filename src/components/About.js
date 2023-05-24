import React from "react";

function About(props) {
  
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{props.bio}</p> */}
      {/* <p hidden>{props.bio}</p> */}
      {/* {(props.bio === '') ? null :(props.bio !== undefined) ? <p>{props.bio}</p>: null} this works  */}
      {(props.bio) === undefined? null : (props.bio === '') ? null : <p>{props.bio}</p>}

      {/* {(props.bio !== undefined) ? <p>{props.bio}</p>: null} no render if it doesnt exist */}
      {/* {props.bio ? <p hidden>{props.bio}</p>:<p>{props.bio}</p>} */}
      {/* {console.log(props.bio !== undefined)} */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
      {/* <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a> */}
    </div>
  );
}

function Links(props){
  return(
    <div id='links'>
      {console.log(props)}
    <a href={props.github}>{props.github}</a>
    <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  )
}


export default About;

