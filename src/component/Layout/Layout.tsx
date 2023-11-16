import { FC } from 'react';
import { title } from '../../config/constants';

import Header from '../Header/Header';
import MetaHead from '../MetaHead/MetaHead';
import {routes} from "../../constants/routes";
import {useLocation} from "react-router-dom";

import './Layout.scss'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const location = useLocation()

    return (
        <div className='Layout'>
            <MetaHead title={title}  />
            {children}
        </div>
    )
}

export default Layout;
