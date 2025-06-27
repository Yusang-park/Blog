import React from "react"

type Props = {
  className?: string
  children?: any
}

export const Emoji = ({ className, children }: Props) => {
  return (
    <span 
      className={className} 
      style={{
        fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Android Emoji", "EmojiSymbols", "EmojiOne Mozilla", "Twemoji Mozilla", "Segoe UI Symbol", "Arial Unicode MS", sans-serif'
      }}
    >
      {children}
    </span>
  )
}
