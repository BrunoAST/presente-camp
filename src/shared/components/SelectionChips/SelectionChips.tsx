import React, {useState} from 'react';

import style from './selection-chips.module.css';
import ISelectionChips from './interface/selecion-chips.interface';

const SelectionChips: React.FC<ISelectionChips> = ({items, selected}) => {
    const [selectedItems] = useState<string[]>([]);

    function toggleSelection(index: number): void {
        const element = document.getElementById(`chip-${index}`) as HTMLElement;
        element.classList.toggle(style.selected);
    }

    return (
        <li className={style.chipContainer}>
            {
                items.map((item, index) =>
                    <div
                        onClick={() => {
                            const found = selectedItems.findIndex(chip => item === chip);
                            found > -1 ? selectedItems.splice(found, 1) : selectedItems.push(item);

                            selected(Array.from(new Set(selectedItems)));
                            toggleSelection(index);
                        }}
                        key={index}
                        id={`chip-${index}`}
                        className={`${style.chip} m-4`}
                    >
                        {item}
                    </div>
                )
            }
        </li>
    );
};

export default SelectionChips;
