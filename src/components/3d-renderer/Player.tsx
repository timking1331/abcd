import { ThreeElements } from "@react-three/fiber"
import { StoneColor } from "../../model/Game"
import Stone from "./Stone"

interface PlayerProps {
  name: string
  color: StoneColor
  stonesCount: number
  bankHandler: (color: 'black' | 'white') => void
  canMoveStones: boolean
}

function Player(props: ThreeElements['group'] & PlayerProps) {

  const stoneComponents = Array.from({ length: props.stonesCount }, (_, i) => {
    return <Stone
      key={i}
      onClick={() => props.bankHandler(props.color)}
      color={props.color}
      position={[-((props.stonesCount - 1) * 1.5) / 2 + i * 1.5, 0.25, 0]}
      isActive={props.canMoveStones}
    ></Stone>
  })

  return (
    <group {...props}>
      {stoneComponents}
    </group>
  )
}

export default Player