import React from 'react'

export default function About(props) {

let myStyle={
  color: props.mode==="dark"?"white":"black",
  backgroundColor: props.mode==="dark"?"#181631c2":"white",
  border:"1px solid",
  borderColor:props.mode==="dark"?"white":"black"
}
  return (
    <div className="container">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About Us</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       This is the about section.
      </div>
    </div>
  </div>
  </div>
</div>
  )
  }
