"use client";
import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { styled } from "styled-components";
import { AnimeCallBack } from "animejs";

const Wrapper = styled.div`
  width: 300px;
  @media (min-width: 440px) {
    width: 500px;
  }
`;

export const Slot = () => {
  const textRef = useRef();
  const svgRef = useRef();

  //have to target DOM elements in useEffect
  //because only useEffect can catch elements after they appear
  //without targetting them here, only components from parrent components are able to be targeted, because only those are currently in the DOM
  useEffect(() => {
    //this point svg has already loaded when using useEffect
    const svg = document.querySelector("svg");
    const one: SVGTextElement | null = document.querySelector(".one");
    const two: SVGTextElement | null = document.querySelector(".two");
    const three: SVGTextElement | null = document.querySelector(".three");

    const animation = anime({
      targets: svg,
      scale: "1.2",
      autoplay: false,
      direction: "alternate",
      easing: "spring(1, 100, 10, 0)",
    });

    interface TextObj {
      num: number;
    }
    const textObj: TextObj = {
      num: 1,
    };

    let arrOne: string[] = [];
    let arrTwo: Array<string> = [];
    let arrThree: Array<string> = [];
    const emojiArr: string[] = ["🍒", "⭐", "🎉"];

    const animateText = anime({
      targets: textObj,
      num: 100,
      easing: "easeInOutCirc",
      duration: 10000,
      autoplay: false,
      update: function (anim: AnimeCallBack) {
        two!.innerHTML = emojiArr[arrOne[textObj.num]];
        three!.innerHTML = emojiArr[arrTwo[textObj.num]];
        one!.innerHTML = emojiArr[arrThree[textObj.num]];
      },
      begin: function () {
        for (let i = 0; i <= 100; i++) {
          arrOne.push(Math.floor(Math.random() * 3).toString());
          arrTwo.push(Math.floor(Math.random() * 3).toString());
          arrThree.push(Math.floor(Math.random() * 3).toString());
        }
      },
      complete: function () {
        arrOne = [];
        arrTwo = [];
        arrThree = [];
      },
      round: 1,
    });

    const handleClick = () => {
      animation.play();
      animateText.play();
    };

    svg!.addEventListener("click", handleClick);
  }, []);

  return (
    <Wrapper>
      <svg
        className="slots"
        width="100%"
        height="100%"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        aria-hidden="true"
      >
        <path
          className="hihi"
          d="M105.77 90.9l8.13-.05l.16-17.62l5.14.08s-.16 18.85-.16 20.15c0 1.31-.82 2.61-1.96 2.77c-1.14.16-10.12.16-10.12.16l-1.19-5.49z"
          fill="#9a9a9a"
        ></path>

        <path
          d="M109.29 67.63c-.12 3.96 2.25 7.82 7.56 7.77c5.31-.05 7.15-3.26 7.26-7.21c.1-3.56-2.15-7.97-7.51-7.82c-4.85.14-7.21 3.96-7.31 7.26z"
          fill="#db0d2b"
        ></path>

        <path
          d="M111.89 68.69c1.85.8 1.93-1.33 2.94-2.74c1.02-1.42 2.72-1.97 1.77-3.12c-.59-.71-2.53-1.38-4.43 1.08c-1.3 1.67-1.84 4.1-.28 4.78z"
          fill="#ffffff"
        ></path>

        <path
          d="M6.38 100.31s0-41.59.41-48.68c.41-7.09 6.68-26.32 30.27-34.09s45.77.89 54.53 8.46c16.09 13.91 15.82 26.86 15.82 26.86l.14 46.36s3.15 4.07 3.15 5.16c0 1.09-.02 3.56-.02 3.56l-107.58.28s-.1-2.9.44-4.13s2.84-3.78 2.84-3.78z"
          fill="#cacaca"
        ></path>

        <path
          d="M55.88 4.67c-4.87 0-7.98 3.23-8.95 5.66c-.84 2.12-.91 4.93-.91 4.93s2.57.54 10.04.54s9.44-.71 9.44-.71s.35-3.02-.79-5.1c-1.3-2.38-3.73-5.32-8.83-5.32z"
          fill="#db0a27"
        ></path>

        <path
          d="M47.85 12.81c1.28 1.54 3.93.67 6.31-1.23c1.97-1.58 4.17-4.56 3.01-5.56c-1.67-1.43-4.52-.47-7.03 1.48c-1.56 1.22-3.43 3.95-2.29 5.31z"
          fill="#ff4e23"
        ></path>

        <path
          d="M49.19 11.62c.79.63 1.89-.51 3.38-1.76c1.26-1.05 3.14-2.14 2.41-3.03c-.74-.9-2.71-.08-4.13 1.06c-1.26.99-2.89 2.75-1.66 3.73z"
          fill="#fffdfd"
        ></path>

        <path
          d="M3.35 105.01c-.49.86-.74 15.1.44 15.99c1.18.89 23.69.15 53.44.15s51.51-.15 52.55-1.48c1.49-1.92 1.42-14.76.97-15.5c-.86-1.44-27.77-.19-53.67-.04c-26.65.14-52.96-.48-53.73.88z"
          fill="#9a9a9a"
        ></path>

        <path
          d="M8.97 108.27c-1.04.44-1.18 8.59 0 8.88c1.44.36 33.92.09 47.54.09s47.35.5 48.68-.68c1.33-1.18 1.21-7.63.32-8.67c-.89-1.04-35.7-.21-48.73-.21s-45.68-.33-47.81.59z"
          fill="#858585"
        ></path>

        <path
          d="M11.64 51.42c-.3 1.04-.44 45.59 0 45.89c.44.3 90 .59 90.89-.3c.89-.89.3-44.85.15-45.74c-.15-.89-46.04-1.92-46.04-1.92l-45 2.07z"
          fill="#6f7178"
        ></path>

        <path
          d="M14.73 54.74c-.17.46.09 39.48.51 39.91c.43.43 84.02-.17 84.45-.51c.43-.34.34-39.35 0-39.65c-.34-.31-84.79-.23-84.96.25z"
          fill="#3a3839"
        ></path>

        <path
          d="M57.34 18.42c-20.06-.18-32.33 8.99-37.92 16.41s-8.65 14.27-7.79 16.59c.23.63 14.72.06 44.01.18s46.55.56 47.03-.33c.49-.89-1.51-10.96-12.4-20.33c-8.74-7.54-19.07-12.4-32.93-12.52z"
          fill="#ffdb8b"
        ></path>

        <path
          d="M14.88 48.54s9.93-27.86 41.53-27.59c34.61.3 41.63 27.39 41.63 27.39l-83.16.2z"
          fill="#ffaf29"
        ></path>

        <path
          d="M29.89 34.82c-5.97 5.42-8.58 11.02-8.58 11.02s22.26.46 22.32.12c.07-.43-13.74-11.14-13.74-11.14z"
          fill="#ffd61c"
        ></path>

        <path
          d="M43.69 26.61c-4.02 1.3-7.45 3.15-10.32 5.2c3.78 3.44 14.23 11.42 15.65 12.43c1.69 1.2 2.25 1.85 2.63 1.62c.31-.18-.53-1.76-.8-2.41c-.47-1.15-5.67-12.74-7.16-16.84z"
          fill="#ffd61c"
        ></path>

        <path
          d="M62.48 25.24c-2.06-.32-4.63-.62-6.91-.6c-2.78.02-4.67.3-7.07.78c0 0 7.88 19.49 8.05 19.96c.18.47.58.95.8 0c.21-.94 5.13-20.14 5.13-20.14z"
          fill="#ffd61c"
        ></path>

        <g fill="#ffd61c">
          <path d="M70.67 46.13c.14.31 21.56.13 21.56.13s-3.06-5.83-9.48-11.41c0-.01-12.34 10.69-12.08 11.28z"></path>

          <path d="M78.96 31.72c-3.26-2.28-7.13-4.32-11.67-5.64c-1.27 4.8-4.05 16.43-4.33 17.9c-.11.55-.5 1.72-.23 1.94c.28.23 1.29-.42 2.16-1.26c.99-.96 14.07-12.94 14.07-12.94z"></path>
        </g>

        <path
          d="M41.57 74.52c-.18-9.43 2.24-14.88 3.48-17.03l-21.64.03s-5.34 6.65-5.43 16.3c-.09 9.65 5.06 17.99 5.06 17.99l21.91-.09c-1.05-2.2-3.2-7.84-3.38-17.2z"
          fill="#ffffff"
        ></path>

        <g fill="#ffffff">
          <path d="M70.17 74.52c.3-8.71-1.83-14.6-2.95-17.06l-19.89.03c-1.22 2.91-3.4 9.21-3.22 16.87c.19 8.35 2.38 14.95 3.29 17.36l20.51-.08c.69-2.68 1.96-8.65 2.26-17.12z"></path>

          <text
            className="three"
            fill="black"
            x="45%"
            y="60%"
            dominant-baseline="middle"
            text-anchor="middle"
          >
            🍒
          </text>

          <path d="M91.71 57.43l-21.75.03c1.29 3.21 3.4 9.78 3 17.64c-.41 7.91-1.83 14.01-2.51 16.52l20.61-.09s5.25-6.37 5.72-16.3c.46-9.93-5.07-17.8-5.07-17.8z"></path>
          <text
            className="two"
            fill="black"
            x="23%"
            y="60%"
            dominant-baseline="middle"
            text-anchor="middle"
          >
            ⭐
          </text>
        </g>
        <text
          className="one"
          fill="black"
          x="66%"
          y="60%"
          dominant-baseline="middle"
          text-anchor="middle"
        >
          🎉
        </text>
        {/*<path d="M27.65 91.81l9.89-.05s-.76-2.78-4.52-2.68c-3.84.12-5.37 2.73-5.37 2.73z" fill="#fab037">

      </path>

      <path d="M54.08 91.7l7.58-.04s-.07-2.29-3.78-2.24c-3.2.04-3.67 2.02-3.8 2.28z" fill="#ffd429">

      </path>

      <path d="M78.53 91.6l8.77-.05s.45-2.5-1.81-2.7c-1.92-.17-2.39 1.62-2.39 1.62s-.42-1.29-2.09-1.32c-2.01-.04-2.57 2.15-2.48 2.45z" fill="#a75fb7">

      </path>
      */}

        {/*<path d="M76.73 57.45l11.51-.02s.07 3.58-4.42 3.67c-6.4.13-7.09-3.65-7.09-3.65z" fill="#febf21">

      </path>

      <path d="M53.31 57.47s-.73 2.47-.22 2.95c.6.55 8.66.66 9.22-.02c.56-.69-.14-2.94-.14-2.94l-8.86.01z" fill="#5b6467">

      </path>*/}

        {
          //<path d="M27.29 57.5l11.5-.02s.11 2.93-5.06 2.99c-5.86.08-6.44-2.97-6.44-2.97z" fill="#4e9226">
          //</path>
        }

        {
          //<path d="M51.64 66.61c-.43.03-1.07-1.79-1.84-1.62c-.77.17-1.84.38-1.62 5.34s.6 5.38 1.58 5.34c.98-.04 2.48-2.9 2.48-2.9s1.05-.45 1.78-.5c.73-.04 1.25.62 2.15.92c.9.3 2.18.34 2.18.34s-3.03 2.56-4.06 5.85s-1.07 6.53-.81 6.74c.26.21 8.07.3 8.37.09c.3-.21-.13-9.05 1.45-11.82c1.58-2.77 3.71-6.1 3.71-6.1s-.81-2.18-1.49-2.43c-.68-.26-2.13.81-3.93.73c-1.79-.09-3.89-1.87-4.95-2.18c-1.8-.53-3.72 2.11-5 2.2z" fill="#ff2b26">
          //</path>
        }

        {
          //<path d="M24.66 66.4c-.43.03-1.03-1.42-1.82-1.47c-.91-.06-1.58.08-1.64 5.03c-.05 4.86.62 5.86 1.6 5.82s2.47-3.08 2.47-3.08s.8-.5 1.55-.25c.69.23 1.23.68 2.28.83c.94.13 2 .29 2 .29s-2.75 2.47-3.78 5.75c-1.02 3.29-1.07 6.53-.81 6.74c.26.21 8.07.3 8.37.09c.3-.21.06-8.75 1.64-11.53s3.53-6.4 3.53-6.4s-.81-2.18-1.49-2.43c-.68-.26-2.46.59-4.25.5c-1.79-.09-3.74-1.73-4.84-1.89c-2.04-.3-3.53 1.92-4.81 2z" fill="#ff2b26">
          //</path>
        }

        {
          //<path d="M78.86 65.9c-.43.03-1.19-1.5-1.95-1.33c-.77.17-1.61.38-1.62 5.34c-.01 4.15.6 5.29 1.58 5.34c1.56.07 2.39-2.68 2.39-2.68s1.09-.39 1.81-.43c.73-.04 1.3.34 2.2.64c.9.3 2.01.42 2.01.42s-2.87 2.48-3.89 5.77s-1.07 6.53-.81 6.74c.26.21 8.07.3 8.37.09c.3-.21-.08-8.63 1.5-11.4s3.7-5.49 3.7-6.09c0-.6-1-2.84-1.69-3.1c-.68-.26-1.96.79-3.75.71c-1.79-.09-3.94-1.76-5-2.07c-1.8-.53-3.56 1.96-4.85 2.05z" fill="#ff2b26">
          //</path>
        }
      </svg>
    </Wrapper>
  );
};
