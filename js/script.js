import { Slide, SlideNav } from "./slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();

slide.changeSlide(4);

slide.activeNextSlide();
slide.addArrow(".prev", ".next");
slide.addControl(".custom-control");

console.log(slide);
