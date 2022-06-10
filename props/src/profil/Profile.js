import React from 'react'
import { PropTypes } from "prop-types";
function Profile({nom,bio,profession,img}) {
  return (
    <div>
        <div ><img src={img} style={{
            margin: "90px auto 30px",
            width: "500px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "0"
          }}/></div>
        <h1  style={{
          textAlign: "center",
          maxWidth: "950px",
          margin: "0 auto",
          border: "3px solid rgb(136 129 129)",
          padding: "40px 25px",
          marginTop: "50px",
          color:'black',
        }}> Fullname:{nom}</h1>
        <h1 style={{
          textAlign: "center",
          maxWidth: "950px",
          margin: "0 auto",
          border: "3px solid rgb(136 129 129)",
          padding: "40px 25px",
          marginTop: "50px",
          color:'black',
        }}>Bio:{bio}</h1>
        <h1 style={{
        
          textAlign: "center",
          maxWidth: "950px",
          margin: "0 auto",
          border: "3px solid rgb(136 129 129)",
          padding: "40px 25px",
          marginTop: "50px",
          color:'black',
        }}>Profession:{profession}</h1>
       
    </div>
  )
}
Profile.defaultProps = {
  
   nom: "Rahul",
    bio: "deepblue",
    profession:"45",
    img:"not found"

}
Profile.propTypes = {
    nom: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    img: PropTypes.string,
  };
export default Profile