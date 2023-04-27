fetch('https://fakestoreapi.com/products/').then((data) => {
    return data.json();
}).then((ObjectData) => {
    let tableData = '';
    ObjectData.map((value) => {
        tableData += `<tr>
        <td>${value.title}</td>
        <td>${value.description}</td>
        <td>${value.price}</td>
        <td><img src='${value.image}'><img></td>
      </tr>`
    })
    document.getElementById('tBody').innerHTML = tableData
}
).catch((err) => {
    console.log(err)
})


<h1 class="text-center"> Data Table</h1>
<div class="container">
  <table class="table table-bordered">
    <thead class="table-dark">
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
        <th scope="col">Image</th>
      </tr>
    </thead>
    <tbody id="tBody">
  
      
    </tbody>
