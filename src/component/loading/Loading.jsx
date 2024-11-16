import { ClimbingBoxLoader } from "react-spinners"


export const Loading = () => {
    return (
        <div className="min-w-full min-h-screen flex justify-center items-center  ">

            <ClimbingBoxLoader
                color="#000000"
                cssOverride={{}}
                speedMultiplier={1}
            />
        </div>
    )
}
