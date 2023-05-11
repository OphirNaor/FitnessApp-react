import { Box } from '@mui/material';
import useSmoothHorizontalScroll from 'use-smooth-horizontal-scroll';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RIghtArrowIcon from '../assets/icons/right-arrow.png';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
    const { scrollContainerRef, handleScroll, scrollTo, isAtStart, isAtEnd } = useSmoothHorizontalScroll();

    return (
        <div>
            <button onClick={() => scrollTo(-100)} className="left-arrow" >
                <img src={LeftArrowIcon} alt="left-arrow" />
            </button>
            <div ref={scrollContainerRef} onScroll={handleScroll} style={{ display: 'flex', overflowX: 'scroll' }}>
                {data.map((item) => (
                    <Box
                        key={item.id || item}
                        title={item.id || item}
                        m='0 40px'
                    >
                        <BodyPart
                            item={item}
                            bodyPart={bodyPart}
                            setBodyPart={setBodyPart}
                        />
                    </Box>
                )
                )}
            </div>
            <button onClick={() => scrollTo(100)} className="right-arrow">
                <img src={RIghtArrowIcon} alt="right-arrow" />
            </button>
        </div>
    )
}

export default HorizontalScrollbar