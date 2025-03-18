import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/logo.svg"
        alt="Sonoplastia logo"
        {...props}
        width={110}
        height={50}
        priority
    />
)
export default Brand