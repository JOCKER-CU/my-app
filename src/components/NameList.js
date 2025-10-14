function NameList() {
    const persons = [
        {
            id: 1,
            name: 'John',
            age: 20,
            skills: ['React', 'Node', 'MongoDB']
        },
        {
            id: 2,
            name: 'Jane',
            age: 21,
            skills: ['React', 'Node', 'MongoDB']
        },
        {
            id: 3,
            name: 'Jim',
            age: 22,
            skills: ['React', 'Node', 'MongoDB']
        }
    ];

    const personsList = persons.map((person) => (
        <h2 key={person.id}>{person.name}: {person.age} : {person.skills}</h2>
    ));
    return (
        <div>
            <h1>Person List</h1>
            {personsList}
        </div>
    );
}

export default NameList;