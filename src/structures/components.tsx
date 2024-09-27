import { useParams } from "react-router"

namespace components {
    export function Main() {
        return (
            <div className="border">
                <h1 className="font-bold ">Simulator svo</h1>
            </div>
        )
    }
    export function Second() {
        const { id } = useParams<{id: string}>();
        return (<div>
            Welcome to second: { id }
        </div>)
    };
}

export default components;