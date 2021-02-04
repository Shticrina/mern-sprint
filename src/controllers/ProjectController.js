import axios from 'axios';

const fetchProjects = () => {
	axios.get('/api/projects/all')
	.then((response) => {
		const data = response.data;
		console.log('ok');
		console.log(data);
	})
	.catch((err) => {
		console.log('Houston, we have an error! ' + err);
	});
};

export default fetchProjects;