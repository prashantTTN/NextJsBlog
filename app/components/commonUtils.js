export const fetchData = async(url = '') =>{
    console.log('in fetchData===', url);
    const res = await fetch('https://dummyapi.online/api/blogposts');
    const resData = await res.json();
    return resData
}