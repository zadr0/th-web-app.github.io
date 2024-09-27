import { useParams } from "react-router"
import Nav from "react-bootstrap/Nav";
import "../index.css"


namespace components {
    export function Main() {
        return (
            <div className="text-lg font-medium">
                WEQ GAY
            </div>
        )
    }
    export function Second() {
        const { id } = useParams<{ id: string }>();
        return (<div className="text-lg font-medium">
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

