import React from "react";
import ContentLoader from "react-content-loader";
import './skeleton-product.scss'

const Skeleton = (props) => (
   <ContentLoader
      speed={2}
      className="skeleton-product"
      viewBox="0 0 320 528"
      preserveAspectRatio="none"
      backgroundColor="#cfcfcf"
      foregroundColor="#e3e3e3"
      {...props}
   >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
   </ContentLoader>
)

export default Skeleton;