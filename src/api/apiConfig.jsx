const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '314e936506f8656b9d3f49968a249901',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;