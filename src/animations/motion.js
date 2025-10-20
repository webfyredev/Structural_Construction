import { delay, scale } from "framer-motion";

export const cardHover = {
    whileHover : {scale : 1.05},
}
export const scrollLeft = {
    initial : {opacity:0, x:-30},
    whileInView : {opacity:1, x:0},
    transition : {duration : 1},
    exit : {opacity : 0, x :-30},
}
export const scrollRight = {
    initial : {opacity:0, x:30},
    whileInView : {opacity:1, x:0},
    transition : {duration : 1},
    exit : {opacity : 0, x :30},
}
export const scrollUp = {
    initial : {opacity:0, y:30},
    whileInView : {opacity:1, y:0},
    transition : {duration : 1},
    exit : {opacity : 0, y:30},
}
export const scrollUpNext = {
    initial : {opacity:0, y:30},
    whileInView : {opacity:1, y:0},
    transition : {duration : 1, delay : 0.5},
    exit : {opacity : 0, y:30},
}
export const cardTaps = {
    whileTap : {scale : 0.95}
}
export const cardZoomIn = {
    whileHover : {scale : 0.95}
}