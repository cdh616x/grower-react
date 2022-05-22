import ComputerLogos from "./computerLogos"
import MobileLogos from "./mobileLogos"

export default function SizeSelector (props) {
    const size = props.screenWidth
    console.log("size", size);

    return (
        <>

        {size > 600 ? <ComputerLogos /> : <MobileLogos /> }
        
        </>
    )
}