import {useEffect, useState} from 'react';

const useGetRouteId = (path: string) => {
    const [id, setId] = useState('');

    useEffect(() => {
        function getId(): void {
            const pathSplit = path.split('/');
            const id = pathSplit[pathSplit.length - 1];
            setId(id);
        }

        getId();
    }, [path]);

    return {id};
};

export default useGetRouteId;
