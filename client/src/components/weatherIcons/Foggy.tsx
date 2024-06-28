import {ReactComponent as Icon} from '../../assets/foggy.svg'

const Foggy = ({width=50, height=50}: {width?: number, height?: number}) => {
  return (
    <Icon width={`${width}px`} height={`${height}px`} />
  )
}
export default Foggy
