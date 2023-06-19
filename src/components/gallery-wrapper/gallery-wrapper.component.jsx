import React from "react";
import GalleryCarousel from "../gallery/gallery.component";
import useMasornyImages from "../../hooks/useMasornyImages";

import "./gallery-wrapper.styles.scss";

const imagesSrc = [
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_20121127_151140.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_3423.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_3410.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_3331.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_3147.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_2897.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_0373-e1516708277720.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_0186.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/Copy-of-IMG_2938.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_3437.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_3664.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_3723.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_3766.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_3955-e1516708220554.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_4234.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_4421.jpg",
  "https://dusllc.com/wp-content/gallery/pipeline-pictures/IMG_3862.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20161217_144834.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20170315_154502.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20170315_154539.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20170412_103111.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20170417_133236.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20170601_184248.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20170601_202010.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20170811_101611.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20170811_160022.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20170905_161341.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20170926_092954.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20171025_091628.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20171101_124449.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20171115_151119.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20180130_111358.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20180130_141032.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20180222_140031.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/20180227_125157.jpg",
  "https://dusllc.com/wp-content/gallery/distribution/IMG_0580.JPG",
  "https://dusllc.com/wp-content/gallery/distribution/IMG_0581.JPG",
  "https://dusllc.com/wp-content/gallery/distribution/IMG_0582.JPG",
  "https://dusllc.com/wp-content/gallery/all-pictures/Atlanta-20110823-00319.jpg",
  "https://dusllc.com/wp-content/gallery/all-pictures/IMG_3442.jpg",
  "https://dusllc.com/wp-content/gallery/all-pictures/IMG_3874.jpg",
  "https://dusllc.com/wp-content/gallery/all-pictures/IMG_3864.jpg",
  "https://dusllc.com/wp-content/gallery/all-pictures/IMG_3879.jpg",
  "https://dusllc.com/wp-content/gallery/all-pictures/IMG_3876.jpg",
];

const GalleryWrapper = () => {
  const images = useMasornyImages({ imagesSrc });

  return (
    <div className="gallery-wrapper-component">
      <GalleryCarousel images={images} actualImages={imagesSrc} />
    </div>
  );
};

export default GalleryWrapper;
