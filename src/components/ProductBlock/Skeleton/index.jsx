import React from "react";
import ContentLoader from "react-content-loader";
import './skeleton-product.scss'

const Skeleton = (props) => (
   <ContentLoader
      speed={2}
      className="skeleton-product"
      viewBox="0 0 100vw 528"
      backgroundColor="#cfcfcf"
      foregroundColor="#e3e3e3"
      {...props}
   >
      <rect x="0" y="0" rx="15" ry="15" width="100%" height="100%" />
   </ContentLoader>
)

export default Skeleton;