import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useListFilter = (pokemonBase?: any) => {
    const { filter } = useParams();
    const [isFiltered, setIsFiltered] = useState<boolean>();

    useEffect(() => {
        const filterList = () => {
            if (!filter || !filter?.trim()) {
                setIsFiltered(false);
                return;
            }

            // const res = pokemonBase?.filter(item => item.pokemon.name.trim().toLowerCase().includes(filter.trim().toLowerCase()));
            setIsFiltered(true);
        }

        filterList();
    }, [filter, pokemonBase]);

    return { isFiltered }
}

export default useListFilter;
