import { CommonProps } from "../types/CommonProps"

const Container = ({children}: CommonProps) => {

  return (
    <div className=" w-11/12 my-4 mx-auto border p-4">
      {children}
    </div>
  )
}
export default Container