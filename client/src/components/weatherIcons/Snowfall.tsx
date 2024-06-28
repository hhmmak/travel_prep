import {ReactComponent as Icon} from '../../assets/snowfall.svg'

const Snowfall = ({width=50, height=50}: {width?: number, height?: number}) => {
  return (
    <Icon width={`${width}px`} height={`${height}px`} />
  )
}
export default Snowfall
