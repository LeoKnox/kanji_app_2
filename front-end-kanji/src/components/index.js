import { Outlet } from 'react-router-dom';

const Index = () => {
    return (
        <>
        <h1>Index</h1>
        <ul id="horz-list">
            <li>one</li>
            <li>two</li>
        </ul>
        <Outlet />
        </>
    )
}

export default Index;