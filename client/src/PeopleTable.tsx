import React from "react";
import {Person} from "./App";
import PersonHTTPRepository from "./PersonHTTPRepository";

interface PeopleTableProps {
    people:Person[];
    shouldDisplay:boolean;
    repo:PersonHTTPRepository
}

function PeopleTable(props:PeopleTableProps) {
    return (
        <div>
            {props.shouldDisplay && props.people.map( p =>
                <>
                <h3 key={p.id}>

                    {p.name}  {"          "}
                    <button onClick={() => props.repo.deletePeople(p.id)}>
                        Delete
                    </button>
                </h3>
                </>
            )}
        </div>
    )
}

export default PeopleTable;

