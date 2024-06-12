
       fetch('https://jsonplaceholder.typicode.com/comments')
.then((data)=>{return data.json();})
.then((objectData)=>{console.log(objectData[0].title);
    let tableData="";
     objectData.map((values)=>{
        tableData+=`  <tr>
        <th scope="row">${values.id}</th>
        <td>${values.name}</td>
        <td>${values.email}</td>
        <td> ${values.body}></td>
      </tr>
      `;
    })
    document.getElementById("table_body").
    innerHTML=tableData
})
.catch((err)=>{
    console.log(err);
})
