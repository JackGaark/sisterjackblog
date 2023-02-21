import { useEffect, useRef } from 'react'

const BALLS_NUM = 12

export default function App() {
  const cursorsWrapperRef = useRef(null)
  const aimRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!cursorsWrapperRef.current) return
    const { current: cursorsWrapperEl } = cursorsWrapperRef

    const balls = cursorsWrapperEl.querySelectorAll('div')

    balls.forEach((ball, index) => {
      let currentX = 0
      let currentY = 0

      let speed = 0.3 - index * 0.015

      const animate = function () {
        currentX += (aimRef.current.x - currentX) * speed
        currentY += (aimRef.current.y - currentY) * speed

        ball.style.left = currentX + 'px'
        ball.style.top = currentY + 'px'

        requestAnimationFrame(animate)
      }

      animate()
    })
  }, [])

  return (
    <div
      className="App"
      style={{
        width: '100vw',
        height: '100vh',
      }}
      onMouseMove={(e) => {
        aimRef.current.x = e.pageX
        aimRef.current.y = e.pageY
      }}
    >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="cursors" ref={cursorsWrapperRef}>
        {Array.from(new Array(BALLS_NUM), (_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  )
}
