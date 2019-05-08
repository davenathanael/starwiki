import axios from 'axios';

const fetchData = async (url) => {
    const res = await axios.get(url);
    return res.data;
}

export default fetchData;