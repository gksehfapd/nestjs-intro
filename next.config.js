/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			// return array , array는 object를 가지게 됨
			{
				source: '/contact', // user가 /contact로 이동하는 경우, / pattern matching도 사용 가능 (contact/:~~/*)
				destination: '/form', // user를 /form으로 보냄, 어떠한 페이지던 가능 / (form/:~~/*)
				permanent: false // 현재 redirection이 영구적인지 아닌지에 따라 브라우저나 검색엔진이 해당 정보를 기억하는 여부가 결정
			}
		]
	},
	async rewrites() {
		return [
			{
				source: '/api/movies', // source의 url을 destㅑnation의 url로 변경
				destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
			},
			{
				source: '/api/movies/:id',
				destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
			}
		]
	}
}

module.exports = nextConfig
