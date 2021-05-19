import React, {useEffect} from 'react';
import style from './typewriter.module.css';

const Typewriter = () => {
    let index = 0;
    const titles = [
        'Você sabe como construir um protótipo de alta fidelidade?',
        'Você sabe como criar uma aplicação web?',
        'Você sabe como criar aplicativos para iOS?',
        'Você sabe como criar aplicativos para Android?',
        'Você sabe como criar aplicações Backend escaláveis?',
        'Você sabe como gerir um time de desenvolvimento?',
    ];

    useEffect(() => {
        typeWriter();
    }, []);

    function typeWriter(): void {
        const titleElement = document.querySelector('h1') as HTMLHeadingElement;
        const words = titles[index].split('');
        titleElement.innerText = '';

        const delay = words.map((_, index: number) => index * 75)[words.length - 1];

        words.forEach((word: string, i: number) => {
            setTimeout(() => {
                titleElement.innerHTML += word;
            }, i * 75);
        });

        index++;

        if (index + 1 === titles.length) index = 0;

        setTimeout(() => typeWriter(), delay + 5000);
    }

    return (
        <section>
            {/*<h1 className={style.typeWriterTitle}>Você sabe como construir um protótipo de alta fidelidade?</h1>*/}
            <h1 className={`container ${style.typeWriterTitle}`}/>
        </section>
    );
}

export default Typewriter;
