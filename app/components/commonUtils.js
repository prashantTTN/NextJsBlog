export const fetchData = async(url = '') =>{
    console.log('in fetchData===', url);
    const res = await fetch(url);
    const resData = await res.json();
    return resData
}