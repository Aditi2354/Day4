import useFetch from "./useFetch";

const Fetch =()=>{
const{data,loading,error}=useFetch('https://jsonplaceholder.typicode.com/posts')
if(loading) return <p>...loading</p>
if(error) return <p>Error: {error.message}</p>

return(
    <div>
        <h1>Posts</h1>
        <ul>
            {data.map(post =>(
                <li key={post.key}>{post.title}</li>
            ))}
        </ul>
    </div>
)
}

export default Fetch