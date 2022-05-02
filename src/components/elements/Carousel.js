import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import Slider from "react-slick";
import { styled } from "@mui/material/styles";

const CenteredSlider = styled(Slider)`
    & .slick-track .slick-slide {
        transition: transform 300ms ease 100ms;
    }

    & .slick-track .slick-slide:hover {
        transform: scale(1.1) !important;
        transition: transform 300ms ease 100ms;
    }

    & .slick-track:hover .slick-slide {
        transform: translateX(-5%);
        transition: transform 300ms ease 100ms;
    }

    & .slick-track .slick-slide:hover ~ .slick-slide {
        transform: translateX(5%);
        transition: transform 300ms ease 100ms;
    }
`;

const Carousel = ({ children }) => {
    const settings = {
        dots: true,
        className: styles.centerBlock,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "60px",
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return <CenteredSlider {...settings}>{children}</CenteredSlider>;
};

export { Carousel };
