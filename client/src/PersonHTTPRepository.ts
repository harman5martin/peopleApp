import {Person} from "./App";

export interface PersonRepository {
    getPeople: () => Promise<Person[]>;
}

class PersonHTTPRepository implements PersonRepository {
    private static jsonToPersonInterface(personData: any): Person {
        return {
            name:personData.name,
            id:personData.id
        };
    }

    public async getPeople() {
        const results = await fetch(`/api/getPeople`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            credentials: "same-origin"
        });

        const resultsJson = await results.json();
        return resultsJson.map(PersonHTTPRepository.jsonToPersonInterface)
    }

    public async deletePeople(id:number) {
        await fetch(`/api/deletePerson?id=${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            credentials: "same-origin"
        });
    }
}


export default PersonHTTPRepository;