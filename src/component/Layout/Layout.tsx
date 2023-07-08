import { FC } from 'react';
import { title } from '../../config/constants';

import Header from '../Header/Header';
import MetaHead from '../MetaHead/MetaHead';
import {routes} from "../../constants/routes";
import {useLocation} from "react-router-dom";

type LayoutProps = {
  children?: React.ReactNode
}
const Layout: FC<LayoutProps> = ({ children }) => {
    const location = useLocation()

    return (
        <>
            <MetaHead title={title}  />
            <div className="bg-contentPage h-hero xxs:p-5 lg:p-0">{children}</div>
        </>
    )
}

export default Layout;
