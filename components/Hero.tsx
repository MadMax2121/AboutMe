{/*trfce for instant start*/}
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import React from 'react'

type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: ["Hi, My name is Max Moskalenko",
         "This is my website", "Enjoy!"
        ,"You're still here?"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
    <div>
        <p>{text}</p>
    </div>
  )
}

export default Hero