import { Outlet } from 'react-router-dom';

const Index = () => {
    return (
        <>
        <h1>Index</h1>
        <div id="horz-list">
            <ul>
                <li>one</li>
                <li>two</li>
            </ul>
        </div>
        <Outlet />
        </>
    )
}

export default Index;