import React, { useEffect } from 'react'
import Prism from 'prismjs'
import { Flex } from '@chakra-ui/layout'

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div className="Code">
      <Flex
        alignItems="center"
        height="100vh"
        wrap="wrap"
        justifyContent={{ base: 'center', md: 'center' }}
      >
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </Flex>
    </div>
  )
}
