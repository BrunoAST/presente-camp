import React, {CSSProperties} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import banner1 from 'assets/Banner/Banner1.svg';
import banner2 from 'assets/Banner/Banner2.svg';
import banner3 from 'assets/Banner/Banner3.svg';
import useIsMobile from 'shared/hooks/useIsMobile';

const CustomCarousel: React.FC = () => {
    const {isMobile} = useIsMobile(1100);

    const arrowStyles: CSSProperties = {
        position: 'absolute',
        background: 'transparent',
        border: 'none',
        color: '#fff',
        zIndex: 2,
        top: isMobile ? 'calc(75% - 15px)' : 'calc(80% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };

    const indicatorStyles: CSSProperties = {
        background: 'rgba(1, 1, 1, .2)',
        width: isMobile ? 12 : 8,
        height: isMobile ? 12 : 8,
        borderRadius: isMobile ? '6px' : '4px',
        display: 'inline-block',
        margin: '0 8px',
    };

    const images = [banner1, banner2, banner3];

    const createCarouselItemImage = (index: number, options = {}) => (
        <div key={index}>
            {!isMobile && <img width="100%" height="100%" src={images[index]} alt="Imagem"/>}
            {isMobile && <img width="100vw" src={images[index]} alt="Imagem"/>}
        </div>
    );

    const baseChildren = <div>{[0, 1, 2].map(createCarouselItemImage)}</div>;

    return (
        <Carousel
            autoPlay={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button type="button" onClick={onClickHandler} title={label} style={{...arrowStyles, left: isMobile ? 20 : 60}}>
                        {!isMobile && <FontAwesomeIcon size="4x" icon={faChevronLeft}/>}
                        {isMobile && <FontAwesomeIcon size="3x" icon={faChevronLeft}/>}
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button type="button" onClick={onClickHandler} title={label} style={{...arrowStyles, right: isMobile ? 20 : 60}}>
                        {!isMobile && <FontAwesomeIcon size="4x" icon={faChevronRight}/>}
                        {isMobile && <FontAwesomeIcon size="3x" icon={faChevronRight}/>}
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
