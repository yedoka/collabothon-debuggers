import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function RouletteWidget() {
  const [betAmount, setBetAmount] = useState("")
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rotationRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)
  const spinTimeTotalRef = useRef(0)
  const spinAngleStartRef = useRef(0)

  const sectors = [
    { number: "0", color: "green" },
    { number: "32", color: "red" },
    { number: "15", color: "black" },
    { number: "19", color: "red" },
    { number: "4", color: "black" },
    { number: "21", color: "red" },
    { number: "2", color: "black" },
    { number: "25", color: "red" },
    { number: "17", color: "black" },
    { number: "34", color: "red" },
    { number: "6", color: "black" },
    { number: "27", color: "red" },
    { number: "13", color: "black" },
    { number: "36", color: "red" },
    { number: "11", color: "black" },
    { number: "30", color: "red" },
    { number: "8", color: "black" },
    { number: "23", color: "red" },
    { number: "10", color: "black" },
    { number: "5", color: "red" },
    { number: "24", color: "black" },
    { number: "16", color: "red" },
    { number: "33", color: "black" },
    { number: "1", color: "red" },
    { number: "20", color: "black" },
    { number: "14", color: "red" },
    { number: "31", color: "black" },
    { number: "9", color: "red" },
    { number: "22", color: "black" },
    { number: "18", color: "red" },
    { number: "29", color: "black" },
    { number: "7", color: "red" },
    { number: "28", color: "black" },
    { number: "12", color: "red" },
    { number: "35", color: "black" },
    { number: "3", color: "red" },
    { number: "26", color: "black" },
  ]

  const drawWheel = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const outerRadius = Math.min(centerX, centerY) - 10
        const arc = (2 * Math.PI) / sectors.length

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < sectors.length; i++) {
          const angle = rotationRef.current + i * arc
          ctx.beginPath()
          ctx.fillStyle = sectors[i].color
          ctx.moveTo(centerX, centerY)
          ctx.arc(centerX, centerY, outerRadius, angle, angle + arc)
          ctx.fill()

          // Рисуем номера
          ctx.save()
          ctx.translate(
            centerX + Math.cos(angle + arc / 2) * (outerRadius - 30),
            centerY + Math.sin(angle + arc / 2) * (outerRadius - 30)
          )
          ctx.rotate(angle + arc / 2 + Math.PI / 2)
          ctx.fillStyle = "white"
          ctx.font = "bold 14px Arial"
          ctx.fillText(
            sectors[i].number,
            -ctx.measureText(sectors[i].number).width / 2,
            0
          )
          ctx.restore()
        }

        // Рисуем указатель
        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.moveTo(centerX - 10, centerY - (outerRadius + 20))
        ctx.lineTo(centerX + 10, centerY - (outerRadius + 20))
        ctx.lineTo(centerX, centerY - (outerRadius + 5))
        ctx.fill()
      }
    }
  }

  useEffect(() => {
    drawWheel()
  }, [])

  const spinWheel = () => {
    if (!betAmount) return
    setSpinning(true)
    setResult(null)
    startTimeRef.current = null
    rotationRef.current = 0
    spinAngleStartRef.current = Math.random() * 10 + 10
    spinTimeTotalRef.current = Math.random() * 3000 + 4000 // Время вращения от 4 до 7 секунд

    requestAnimationFrame(rotateWheel)
  }

  const rotateWheel = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp
    const spinTime = timestamp - startTimeRef.current
    const spinTotalTime = spinTimeTotalRef.current

    if (spinTime < spinTotalTime) {
      const spinAngle =
        spinAngleStartRef.current * (1 - spinTime / spinTotalTime)
      rotationRef.current += (spinAngle * Math.PI) / 180

      drawWheel()
      requestAnimationFrame(rotateWheel)
    } else {
      // Останавливаем вращение
      const degrees = (rotationRef.current * 180) / Math.PI + 90
      const arcd = 360 / sectors.length
      const index =
        sectors.length - 1 - Math.floor(((degrees % 360) / arcd) % sectors.length)
      setResult(sectors[index].number)
      setSpinning(false)
      drawWheel()
    }
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <Card className="p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Сделайте вашу ставку</h2>
        <Input
          type="number"
          placeholder="Введите сумму ставки"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
          className="mb-4"
        />
        <Button
          onClick={spinWheel}
          disabled={spinning || !betAmount}
          className="w-full"
        >
          {spinning ? "Крутится..." : "Крутить рулетку"}
        </Button>
      </Card>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border border-gray-300"
      />
      {result !== null && !spinning && (
        <div className="text-lg font-semibold">
          Шарик остановился на номере {result}!
        </div>
      )}
    </div>
  )
}
