import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import desktopNormalLogo from 'assets/Logo/Normal/Logo.svg';
import mobileNormalLogo from 'assets/Logo/Normal/LogoReduzida.svg';
import desktopContrastLogo from 'assets/Logo/Contrast/Logo.svg';
import mobileContrastLogo from 'assets/Logo/Contrast/LogoReduzida.svg';
import {BrowserRoutes} from '../../constants/browser-route.const';
import useIsMobile from '../../hooks/useIsMobile';
import ILogoMobileDesktop, {ELogoMobileDesktop} from './interface/logo-mobile-desktop.interface';

const LogoMobileDesktop: React.FC<ILogoMobileDesktop> = ({type }) => {
    const [logo, setLogo] = useState<{ desktop: string, mobile: string }>();
    const {isMobile} = useIsMobile();

    useEffect(() => {
        function defineLogoGroup(): void {
            if (type === ELogoMobileDesktop.CONTRAST) {
                setLogo({ desktop: desktopContrastLogo, mobile: mobileContrastLogo });
                return;
            }

            setLogo({ desktop: desktopNormalLogo, mobile: mobileNormalLogo });
        }

        defineLogoGroup();
    }, [type]);

    return (
        <Link to={BrowserRoutes.LANDING}>
            {!isMobile && <img src={logo?.desktop} alt="Logo"/>}
            {isMobile && <img src={logo?.mobile} alt="Logo"/>}
        </Link>
    );
};

export default LogoMobileDesktop;
