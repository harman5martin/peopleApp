import React, {useEffect, useState} from 'react';
import './App.css';
import PeopleTable from "./PeopleTable";
import PersonHTTPRepository from "./PersonHTTPRepository";

export interface Person {
    id: number;
    name: string;
}

function App() {

    const [shouldDisplay, setShouldDisplay] = useState<boolean>(false);
    const [people, setPeople] = useState<Person[]>([]);
    const [name, setName] = useState<string>("");
    const personHTTPRepository = new PersonHTTPRepository();
    useEffect(() => {
        personHTTPRepository.getPeople().then((people) => setPeople(people))
    }, [shouldDisplay, people])

    async function submit(name: string) {
        await fetch(`/api/addPerson?name=${name}`, {
            method: "POST",
            credentials: "same-origin"
        })
        setName("");
    }

    return (
        <>
            <div style={{backgroundColor: '#61fbee'}} className="App">
                <label>
                    name
                    <input
                        onKeyPress={(event) => event.key === "Enter" && submit(name)}
                        onChange={(e: any) => setName(e.target.value)}
                        type={"text"}
                        value={name}
                    />
                    <button
                        onClick={() => submit(name)}
                    >
                        submit
                    </button>
                </label>
                <h3>
                    <button
                        onClick={() => setShouldDisplay(!shouldDisplay)}
                    >
                        Display Everyone
                    </button>
                </h3>
            </div>
            <div>
                <PeopleTable people={people} shouldDisplay={shouldDisplay} repo={personHTTPRepository}/>
            </div>
        </>
    );
}

export default App;
