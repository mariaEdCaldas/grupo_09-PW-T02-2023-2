import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={19.5} stroke="#fff" />
    <path fill="#fff" d="m30 20.5-14.25 7.361V13.14L30 20.5Z" />
  </svg>
)
export { SvgComponent as OutlinedPlay }
