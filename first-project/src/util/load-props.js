export const loadPosts = async () => {
  const postRepsonse = fetch('https://jsonplaceholder.typicode.com/todos');
  const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postRepsonse, photoResponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  //tecnica chamada de ziper
  const photoAndPost = postsJson.map((item, id) => {
    return { ...item, photoUrl: photosJson[id].url };
  });

  return photoAndPost;
};
