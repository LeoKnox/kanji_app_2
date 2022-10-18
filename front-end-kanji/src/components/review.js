import { useParams } from 'react-router-dom';

const review = ({match}) => {
    const grades = match.params;

    console.log("****"+grades);

    return (
        <h3>now review {grades}</h3>
    )
}

export default review;