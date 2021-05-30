import OGimage from '../../public/Wookieepedia-Star-Wars-Database-OG-Image.png';
import AppleTouchIcon from '../../public/apple-touch-icon.png';
import SVGMaskIcon from '../../public/safari-pinned-tab.svg';
import Fav32 from '../../public/favicon-32x32.png';
import Fav16 from '../../public/favicon-16x16.png';

const MetaDataTagsGlobal = () => {
  return (
    <>
      <meta property="og:image" content="../public/Wookieepedia-Star-Wars-Database-OG-Image.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png" />
      <link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5" />
    </>
  )
}

export default MetaDataTagsGlobal;
