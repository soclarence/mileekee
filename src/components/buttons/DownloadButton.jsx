import Download from "../../assets/download.svg"

export default function DownloadButton() {
  return (
    <button className="text-white cursor-pointer bg-[#6B6C86] flex items-center justify-center w-56 h-14 space-x-3 rounded-md font-medium">
      <img src={Download} alt="" />
      <p>Download app</p>
    </button>
  )
}
