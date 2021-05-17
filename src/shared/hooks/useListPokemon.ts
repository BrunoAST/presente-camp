import { useEffect } from 'react';

import ListHttpService from 'shared/services/ListHttpService';

const useListPokemon = (baseApiUrl: any) => {
    useEffect(() => {
        function listPokemon() {
            ListHttpService.listPokemonByType(baseApiUrl)
                .then(res => {
                });
        }

        listPokemon();

        return () => { }
    }, [baseApiUrl]);

    return {  }
}

export default useListPokemon;
