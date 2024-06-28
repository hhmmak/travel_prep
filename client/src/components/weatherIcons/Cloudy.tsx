import {ReactComponent as Icon} from '../../assets/cloudy.svg'

const Cloudy = ({width=50, height=50}: {width?: number, height?: number}) => {
  return (
    <Icon width={`${width}px`} height={`${height}px`} />
  )
}
export default Cloudy
