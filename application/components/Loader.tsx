import { ColorRing } from "react-loader-spinner";


export default function Loader() {
    return (
        <div className="min-h-dvh w-dvw grid items-center justify-center">
            <div className="w-full h-full my-auto">
                <ColorRing 
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e6e6fa', '#da70d6', '#5d3fd3', '#cf9fff', '#bf40bf']}
                />
            </div>
        </div>
    )
}