import { useParams } from 'react-router-dom';

function Review() {
    const { grades } = useParams();

    console.log("****"+grades);

    return (
        <h3>now review {grades}</h3>
    )
}

export default Review;