"use client"

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-rust'

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  )
}

