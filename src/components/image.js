/*import React from 'react'

const Image = ({ image }) => {
  const element = Object.keys(image).includes("fluid") ? (
    <picture>
      <source srcSet={image.fluid.srcSetWebp} type="image/webp" />
      <source srcSet={image.fluid.srcSet} type="image/png" />
      <img src={image.fluid.src} title={image.title} alt={image.description} />
    </picture>
  ) : (
    <picture>
      <source srcSet={image.fixed.srcSetWebp} type="image/webp" />
      <source srcSet={image.fixed.srcSet} type="image/png" />
      <img src={image.fixed.src} title={image.title} alt={image.description} />
    </picture>
  )

  return element
}

export default Image
*/
