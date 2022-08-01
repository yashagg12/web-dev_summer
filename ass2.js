// QUESTION-1

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 4000);
})

// QUESTION-2

const Promise_p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 4000);
}).then(data=>console.log(data));

// QUESTION-3

const promiseShort=Promise.resolve("success").then(console.log);

// QUESTION-4
const fetchUsers=async()=>{
	try {
		const res=await fetch("https://jsonplaceholder.typicode.com/users/");
		const data=await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}

// QUESTION-5
const urls = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholder.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/albums",
	];
	
	const getData = async () => {
		const PromisedData = await Promise.all(urls.map(url =>fetch(url)));
	   const [users, posts, albums]= await Promise.all(PromisedData.map(res => res.json()));
		console.log("users", users);
		console.log("posts", posts);
		console.log("albums", albums);
	
	return [users, posts, albums];
	}

// QUESTION-6
const templateFetch = async (url) => {
	try {  const response = await fetch(url);
	   const data = await response.json();
	   return data;
	 }
   
	 catch(e){
	   console.log('oooooops',e.message);
	 }
   }
   const URLs = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholdeTYPO.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/albums",
	];
	
	const Promises=URLs.map(async(url)=>await templateFetch(url));
	Promise.all(Promises).then(console.log);
