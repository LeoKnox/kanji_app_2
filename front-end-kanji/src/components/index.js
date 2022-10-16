import { Outlet } from 'react-router-dom';

const Index = () => {
    const numbers = [1, 2, 3, 4];

    return (
        <>
        <h1>Index</h1>
        <div id="horz-list">
            <ul>
                {numbers.map((number) => (
                    <li>
                        <input type="checkbox" />
                        {number}
                    </li>
                ))}
            </ul>
        </div>
        <Outlet />
        </>
    )
}

export default Index;