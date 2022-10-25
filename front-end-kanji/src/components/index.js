import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from "./footer.js";
import Test from './test.js';

const Index = () => {
    //const numbers = [1, 2, 3, 4];
    const [numbers, setNumbers] = useState([]);
    const [grades, setGrades] = useState([]);
    const navigate = useNavigate();

    function SetGrade(e) {
        let gradeArray = grades;
        let nums = "";
        e.target.checked ? gradeArray[e.target.value] = true : gradeArray[e.target.value] = false;
        setGrades(gradeArray);
        gradeArray.map((v, i) =>v ? nums += i+1 : null);
        if (nums === "") {
            nums = "1";
        }
        navigate(`/index/review/${nums}`);
    }

    function UpdateComponent(e) {
        //e.preventDefault();
        //setGrades([true])
        //return (<Test peas={grades} />);
    }

    // FUTURE change axios call to return array not array of objects
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/g/') 
            .then(function (response) {
                let beginGrades = [];
                response.data.map((i) => beginGrades.push(i.grade));
                setNumbers(beginGrades);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <>
        <div id="horz-list">
            <ul>
                {numbers.map((number, index) => (
                    <li>
                        <input type="checkbox" value={index} onClick={SetGrade} />
                        {number}
                    </li>
                ))}
            </ul>
        </div>
        <h1 id="kanjiTitle">Kanji Trainer</h1>
        <Outlet />
        <Footer />
        </>
    )
}

export default Index;