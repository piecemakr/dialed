'use client'

import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  dx: number
  dy: number
  size: number
  color: string
}

export function Dots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number | null>(null)
  const blurRef = useRef(100)

  const createTextPoints = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.save()
    const fontSize = Math.min(width * 0.05)
    ctx.font = `bold ${fontSize}px sans-serif`
    ctx.fillStyle = '#000000'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    
    const text = 'DIALED'
    ctx.fillText(text, width / 2, height / 2)

    const imageData = ctx.getImageData(0, 0, width, height)
    const pixels = imageData.data
    const points: { x: number; y: number }[] = []
    
    const density = 1 // Increased density for more particles
    for (let y = 0; y < height; y += density) {
      for (let x = 0; x < width; x += density) {
        const index = (y * width + x) * 4
        if (pixels[index + 3] > 128) {
          points.push({ x, y })
        }
      }
    }
    
    ctx.restore()
    return points
  }, [])

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const points = createTextPoints(ctx, canvas.width, canvas.height)
    particlesRef.current = points.map((point) => {
      const greyValue = Math.floor(Math.random() * 200 + 55) // Random grey between 55 and 255
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: point.x,
        targetY: point.y,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        size: 1,
        color: `rgb(${greyValue},${greyValue},${greyValue})`
      }
    })
  }, [createTextPoints])

  const animate = useCallback((isFloating: boolean) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Create an offscreen canvas for drawing
    const offscreenCanvas = new OffscreenCanvas(canvas.width, canvas.height)
    const offscreenCtx = offscreenCanvas.getContext('2d')
    if (!offscreenCtx) return

    particlesRef.current.forEach((particle) => {
      if (isFloating) {
        // Random floating behavior
        particle.x += particle.dx
        particle.y += particle.dy

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.dx *= -1
        if (particle.y <= 0 || particle.y >= canvas.height) particle.dy *= -1
      } else {
        // Move towards target
        const dx = particle.targetX - particle.x
        const dy = particle.targetY - particle.y
        particle.dx = dx * 0.02
        particle.dy = dy * 0.02

        // Mouse repulsion (reduced effect)
        const mouseX = mouseRef.current.x
        const mouseY = mouseRef.current.y
        const distX = mouseX - particle.x
        const distY = mouseY - particle.y
        const distance = Math.sqrt(distX * distX + distY * distY)
        
        if (distance < 50) {
          const angle = Math.atan2(distY, distX)
          const force = (50 - distance) * 0.5
          particle.dx -= Math.cos(angle) * force
          particle.dy -= Math.sin(angle) * force
        }

        // Update position
        particle.x += particle.dx
        particle.y += particle.dy
      }

      // Draw particle on offscreen canvas
      offscreenCtx.fillStyle = particle.color
      offscreenCtx.beginPath()
      offscreenCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      offscreenCtx.fill()
    })

    // Apply blur to the entire offscreen canvas
    ctx.filter = `blur(${blurRef.current}px)`
    ctx.drawImage(offscreenCanvas, 0, 0)
    ctx.filter = 'none'

    animationFrameRef.current = requestAnimationFrame(() => animate(isFloating))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    setCanvasSize()

    // Start with random floating animation
    animate(true)

    const timer = setTimeout(() => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      animate(false)

      gsap.to(particlesRef.current, {
        duration: 2,
        x: (i) => particlesRef.current[i].targetX,
        y: (i) => particlesRef.current[i].targetY,
        color: '#111111', // Fade to the final color
        ease: 'power4.inOut',
        onUpdate: () => {
          particlesRef.current.forEach((particle, index) => {
            const progress = gsap.getProperty(particlesRef.current[index], 'progress')
            if (typeof progress === 'number') {
              const r = Math.round(17 + (parseInt(particle.color.slice(4, -1).split(',')[0]) - 17) * (1 - progress))
              particle.color = `rgb(${r},${r},${r})`
            }
          })
        }
      })

      // Animate blur separately
      gsap.to(blurRef, {
        current: 0,
        duration: 1.5,
        ease: 'power4.inOut'
      })
    })

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    window.addEventListener('resize', setCanvasSize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', setCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [initParticles, animate])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}

