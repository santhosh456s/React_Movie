import React from "react"

export default function movie(props){
const {title,ondelete,id} = props;

return(
  <>
  
<div className="containr">
  <div className="title">{title.name}</div>
  <div className="title">{props.rating}</div>
  <div >{props.actor}</div>
  
   <button>Likes </button>
  <button onClick={() =>ondelete(id)}>Delete</button>
  <button>wathlist</button>
</div> 
</>
  

);

}