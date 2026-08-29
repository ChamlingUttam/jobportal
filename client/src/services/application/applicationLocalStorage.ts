// import type { Application } from "../../types";


// export const saveApplication = (applications:Application[])=>{
//     localStorage.setItem("Applications",JSON.stringify(applications))
// }

// export const getSavedApplication = ():Application[]=>{
//     const existApplication = localStorage.getItem("Applications")

//     if(!existApplication){
//         return []
//     }

//     return JSON.parse(existApplication)



// }


import type { Application } from "../../types";

const APPLICATIONS_KEY = "Applications";

export const saveApplication = (applications: Application[]) => {
  localStorage.setItem(
    APPLICATIONS_KEY,
    JSON.stringify(applications)
  );
};

export const getSavedApplication = (): Application[] => {
  const savedApplication = localStorage.getItem(
    APPLICATIONS_KEY
  );

  if (!savedApplication) {
    return [];
  }

  return JSON.parse(savedApplication);
};