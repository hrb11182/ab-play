const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5b58ce35b445952f6728c2402a3e64d8',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;