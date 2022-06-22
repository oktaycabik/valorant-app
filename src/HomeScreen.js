import { Request } from "./request";
const request = new Request("http://localhost:5000/api/post");

export const HomeScreen = {
  render: async () => {
    const posts = await request.get();

    return posts.map(
      (post) => `
         <div class="col-2">
         <div class="card">
         <a href="/#/post/${post?._id}">sadsad</a>
            <div class="card-title">${post?.content}</div>
         </div>
        </div> 
        `
    ).join('\n');
  },
};
