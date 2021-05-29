import React, {CSSProperties} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import banner from 'assets/Banner/Banner.png';
import useIsMobile from 'shared/hooks/useIsMobile';

const CustomCarousel: React.FC = () => {
    const {isMobile} = useIsMobile();

    const arrowStyles: CSSProperties = {
        position: 'absolute',
        background: 'transparent',
        border: 'none',
        color: '#fff',
        zIndex: 2,
        top: 'calc(85% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };

    const indicatorStyles: CSSProperties = {
        background: 'rgba(1, 1, 1, .2)',
        width: 8,
        height: 8,
        borderRadius: '4px',
        display: 'inline-block',
        margin: '0 8px',
    };

    const images = [
        banner
        // 'https://randomwordgenerator.com/img/picture-generator/52e7d3464a52a414f1dc8460962e33791c3ad6e04e50744172297cd6944bc2_640.jpg',
        // 'https://randomwordgenerator.com/img/picture-generator/texture-2613518_640.jpg',
        // 'https://randomwordgenerator.com/img/picture-generator/5ee0d7434c5ab10ff3d8992cc12c30771037dbf85254794e702672dd9e48_640.jpg'
    ]

    const createCarouselItemImage = (index: number, options = {}) => (
        <div key={index}>
            {!isMobile && <img height={400} width="100%" src={images[index]} alt="Imagem"/>}
            {isMobile && <img width="100vw" src={images[index]} alt="Imagem"/>}
        </div>
    );

    const baseChildren = <div>{[0].map(createCarouselItemImage)}</div>;

    return (
        <Carousel
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button type="button" onClick={onClickHandler} title={label} style={{...arrowStyles, left: 60}}>
                        <FontAwesomeIcon size="6x" icon={faChevronLeft} />
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button type="button" onClick={onClickHandler} title={label} style={{...arrowStyles, right: 60}}>
                        <FontAwesomeIcon size="6x" icon={faChevronRight} />
                    </button>
                )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            style={{...indicatorStyles, background: '#fff'}}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}
            showStatus={false}
            showThumbs={false}
        >
            {baseChildren.props.children}
        </Carousel>
    );
}

export default CustomCarousel;