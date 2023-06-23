import { Helmet } from "react-helmet";

import Favicon from '../../images/favicon.png'

type HTMLHeadProps = {
  title: string;
}

const MetaHead: React.FC<HTMLHeadProps> = ({ title}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="shortcut icon" href={Favicon} />
    </Helmet>
  );
};

export default MetaHead;
