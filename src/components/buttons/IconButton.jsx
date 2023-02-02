import Arrow from "../../assets/arrow.svg"

export default function IconButton() {
  return (
    <button className="text-white cursor-pointer bg-mPurple flex items-center justify-center w-56 h-14 space-x-3 rounded-md font-medium">
        <p>Create Account</p>
        <img src={Arrow} alt="" />
    </button>
  )
}
