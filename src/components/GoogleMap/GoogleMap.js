import React from "react"

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97205.8612868606!2d-123.43117463608769!3d48.45166201494196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1625494978207!5m2!1suk!2sua"
      width={750}
      height={440}
      style={{border: 0, marginRight: '30px'}}
      allowFullScreen=""
      loading="lazy"
      title="location of forum"
    />
  )
}

export default GoogleMap