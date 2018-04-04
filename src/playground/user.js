const getName = (name) => name ? <h1>{name}</h1> : 'Anonymous';
const getAge = (age) => age >= 18 ? <p>Age: {user.age}</p> : undefined;
const getLocation = (location) => location ? <p>Location: {location}</p> : undefined;

const user = {
    name: 'Aaron Sisler',
    age: '32',
    location: 'Durham, NC',
};

const challengeTemplate = (
    <div>
        {getName(user.name)}
        {getAge(user.age)}
        {getLocation(user.location)}
    </div>
);

const challengeRoot = document.getElementById('challenge');

ReactDOM.render(challengeTemplate, challengeRoot);