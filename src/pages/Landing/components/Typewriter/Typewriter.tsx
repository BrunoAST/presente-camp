import React, {memo, useCallback, useEffect, useRef} from 'react';
import style from './typewriter.module.css';

const Typewriter = () => {
    const index = useRef<number>(0);
    const titles = useRef<string[]>([
        'Você sabe como construir um protótipo de alta fidelidade?',
        'Você sabe como criar uma aplicação web?',
        'Você sabe como criar aplicativos para iOS?',
        'Você sabe como criar aplicativos para Android?',
        'Você sabe como criar aplicações Backend escaláveis?',
        'Você sabe como gerir um time de desenvolvimento?',
    ]);
    const timerOutWords = useRef<any>();
    const timerNextTitle = useRef<any>();

    const typeWriter = useCallback(
        () => {
            const titleElement = document.querySelector('h1') as HTMLHeadingElement;
            if (!titleElement) return;
            const words = titles.current[index.current].split('');
            titleElement.innerText = '';

            const delay = words.map((_, index: number) => index * 75)[words.length - 1];

            words.forEach((word: string, i: number) => {
                timerOutWords.current = setTimeout(() => {
                    titleElement.innerHTML += word;
                }, i * 75);
            });

            index.current++;

            if (index.current + 1 === titles.current.length) index.current = 0;

            timerNextTitle.current = setTimeout(() => typeWriter(), delay + 5000);
        }, []
    );

    useEffect(() => {
        typeWriter();

        return () => {
            clearTimeout(timerOutWords.current);
            clearTimeout(timerNextTitle.current);
        }
    }, [timerOutWords, timerNextTitle, typeWriter]);

    return (
        <div style={{position: 'relative'}}>
            <h1 className={`${style.typeWriterTitle}`}>Você sabe como construir um protótipo de alta fidelidade?</h1>
        </div>
    );
}

export default memo(Typewriter);
