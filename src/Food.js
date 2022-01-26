import { useParams } from 'react-router-dom';


function Food() {
    let name = useParams().name;
    const url = `https://source.unsplash.com/1600x900/?${name}`;
    return (
        <div>
            <h1>This is : {name}</h1>
            <img style={{ width: '50%' }} src={url} alt={name} />
        </div>
    )
}

export default Food;