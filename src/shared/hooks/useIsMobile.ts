import {useEffect, useState} from 'react';
import {mobile} from '../constants/mobile';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= mobile);

    useEffect(() => {
        function onWindowResize(event: UIEvent): void {
            const width = (event.target as Window).innerWidth <= mobile;
            width ? setIsMobile(true) : setIsMobile(false);
        }

        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    return {isMobile}
}

export default useIsMobile;
