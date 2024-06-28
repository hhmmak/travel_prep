import {ReactComponent as Icon} from '../../assets/clear-sky-day.svg'

const ClearSkyDay = ({width=50, height=50}: {width?: number, height?: number}) => {
  return (
    <Icon width={`${width}px`} height={`${height}px`} />
  )
}
export default ClearSkyDay
