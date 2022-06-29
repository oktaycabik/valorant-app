import { category } from "./category";



export const HeaderCompenent = {
  changeCategory:()=>{
   const button = document.getElementsByClassName("btn")
   return button
  }, 
  render: async () => {

    return `
    ${category
      .map(
        (cat) =>
          `
            <li class="nav-item active">
            <a href="/#/${cat.url}" class="btn btn-danger"
              >${cat.name} <span class="sr-only">(current)</span></a
            >
          </li>
            `
      )
      .join("\n")}
  
    
    `;
  },
};
