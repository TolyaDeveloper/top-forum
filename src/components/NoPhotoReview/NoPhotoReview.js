import React from "react"
import {StaticImage} from "gatsby-plugin-image"

const NoPhotoReview = () => {
  return (
    <StaticImage
      src="../../images/icons/no-review-photo.png"
      alt="no person review photo"
      width={121}
      height={121}
    />
  )
}

export default NoPhotoReview