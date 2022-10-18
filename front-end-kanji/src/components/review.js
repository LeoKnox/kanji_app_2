import { useParams } from 'react-router-dom';

const Review = () => {
    const grades = useParams();

    console.log("****"+JSON.stringify(grades));

    return (
        <h3>now review {grades.id}</h3>
    )
}

export default Review;