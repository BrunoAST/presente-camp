import { useEffect, useState } from 'react';

import ListHttpService from 'shared/services/ListHttpService';

const useGetPokemonByUrl = (url: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        function getPokemonByUrl() {
            ListHttpService.getPokemonByUrl(url)
                .then(res => {
                    // setPokemonInformations({ name: '', id: -1, sprites: { front_default: '' } });
                    // setPokemonInformations(res.data);
                })
                .finally(() => setIsLoading(false));
        }

        getPokemonByUrl();

        return () => { }
    }, [url]);

    return { isLoading }
}

export default useGetPokemonByUrl;
