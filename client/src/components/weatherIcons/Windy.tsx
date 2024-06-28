import {ReactComponent as Icon} from '../../assets/windy.svg'

const Windy = ({width=50, height=50}: {width?: number, height?: number}) => {
  return (
    <Icon width={`${width}px`} height={`${height}px`} />
  )
}
export default Windy
