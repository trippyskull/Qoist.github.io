import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './pages/Home';

function App() {

  const [sortedDayta, setsortedDayta] = useState([]);
  const [sortByTitle, setsortByTitle] = useState([])
  const [headers2, setHeaders2] = useState([])
  const [loading, setLoading] = useState(true);

  async function GetSortedData() {
    let response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
    if (response.data) {
      
      const sortedData = response.data.tickets.sort((a, b) => b.priority - a.priority);
      setsortedDayta(sortedData)
      const sortTitle = response.data.tickets.sort((a,b)=> a.title - b.title)
      setsortByTitle(sortTitle)
    }
  }


  useEffect(() => {
    GetSortedData()
  }, [])

console.log(sortedDayta,"appppp");
console.log(sortByTitle,"fghjkl");
  return (
//     <div style={{ display: "flex" }}>
//       {
// data?.users?.map((headerItem, index) => {
//   return (
//     <div>
//       <h1>{headerItem.name} (header)</h1>
//       <div>
//         {
//           data?.tickets.map(dataItem => {
//             if (dataItem.userId === headerItem.id)
//               return (
//                 <>
//                   <h1>{dataItem.status}</h1>
//                 </>
//               )
//           })
//         }
//       </div>
//     </div>
//   )
// })
// }
//     </div>
<div>
  <Home sortByTitle={sortByTitle} sortedDayta={sortedDayta}/>
</div>
  );
}

export default App;
