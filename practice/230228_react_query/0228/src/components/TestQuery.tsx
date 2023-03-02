import { useQuery } from 'react-query';
import axios from 'axios';

type Iprops = {

}

export function TestQuery() {
    const {} = useQuery('', ()=>axios.get)
}