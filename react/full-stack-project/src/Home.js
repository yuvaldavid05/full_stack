import { useEffect, useState } from "react"

export default function Home() {
    const [grades, setGrades] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        fetch("http://localhost:4000/grades")
            .then(res => res.json())
            .then(data => setGrades(data));
    }, [])

    return (
        <h3>ברוכים הבאים</h3>

    )
}