import { CommonProps } from "../../types/CommonProps"

import './SessionContainer.css'

const Container = ({children}: CommonProps) => {

  return (
    <div className="sessionContainer">
      {children}
    </div>
  )
}
export default Container