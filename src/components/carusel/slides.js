import { SlideEl } from "./SlideEl"
import Image from "next/image"

export const slides = [
  <SlideEl key="slide1" />,
  <Image
    key="slide2"
    src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    width={500}
    height={500}
    alt="qwe"
  />,
  <Image
    key="slide3"
    src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    width={500}
    height={500}
    alt="qwe"
  />,
];