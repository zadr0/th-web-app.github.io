import { useParams } from "react-router"
import Nav from "react-bootstrap/Nav";

namespace components {
    export function Main() {
        return (
            <div className="border">
                <h1 className="font-bold ">Simulator svo</h1>
            </div>
        )
    }
    export function Second() {
        const { id } = useParams<{ id: string }>();
        return (<div className="text-lg font bold text-gray-900">
            Welcome to second: {id}
        </div>)
    };

    export function Navbar() {
        return (
            <>
                <Nav variant="pills" defaultActiveKey="/">

                    <Nav.Item>
                        <Nav.Link href="/info">Information</Nav.Link>
                    </Nav.Item>

                </Nav>
            </>)
    }
}

export default components;