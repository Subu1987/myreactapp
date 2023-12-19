import {useParams} from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from './App';

function Demo(props){

    let data = useContext(DataContext);

    let param = useParams();

    console.log(data);

    return(

        <div>
            <h1>{data.name}</h1>
            <button onClick={()=>{
                data.setName("Subu");
            }}>
                click
            </button>
        </div>

    )

}

export default Demo;