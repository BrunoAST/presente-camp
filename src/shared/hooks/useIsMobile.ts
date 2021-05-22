import {useEffect, useState} from 'react';

const useIsMobile = (breakPoint: number = 959) => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= breakPoint);

    useEffect(() => {
        function onWindowResize(event: UIEvent): void {
            const width = (event.target as Window).innerWidth <= breakPoint;
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
