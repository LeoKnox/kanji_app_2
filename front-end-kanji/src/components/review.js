import { useParams } from 'react-router-dom';

const review = () => {
    const { grades } = useParams();

    return (
        <h3>now review {grades}</h3>
    )
}

export default review;