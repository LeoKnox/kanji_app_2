import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let selections = [];

const SelectGrade = () => {
    const [grades, setGrades] = useState([]);
    const [checked, setChecked] = useState(true);
    let navigate = useNavigate();

    function selected(e) {
        let link =""
        e.preventDefault();
        for(let i = 1; i < selections.length; i++) {
            if (selections[i] === true) {
                link += i;
            }
        }
        setChecked(true);
        navigate("/quiz/"+link);
    }

    function handleCheck(e) {
        setChecked(!checked);
        selections[e.target.value] = !selections[e.target.value];
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/g/') 
            .then(function (response) {
                setGrades(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <>
        <h1 className="answer">Choose grade</h1>
        <form onSubmit={selected} className="container">
        {grades.map((g, i) => (
            <>
            <label key={i} className="gradesList">{g.grade}:{selections}
                <input type="checkbox" onClick={handleCheck} checked={selections[i+1]} name="grade" value={g.grade} />
                <span className="checkmark"></span>
            </label>
            </>
        ))}
        <input className="selectGrade" type="submit" value="Submit" />
        </form>
        </>
    )
}

export default SelectGrade;