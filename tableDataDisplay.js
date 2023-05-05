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

