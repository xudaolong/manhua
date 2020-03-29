module.exports.html = (data) => {
    return `
<!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<h2>漫画更新</h2>
    <table>
    <tr>
        ${['漫画名称', '更新日期', '描述', '链接'].map(o => `<th>${o}</th>`).join('\n')}
    </tr>
    ${data.map(o => {
        return `<tr>
            <td>${o.name}</td>
            <td>${o.updated}</td>
            <td>${o.desc}</td>
            <td><a href="${o.link}" target="view_window">点击</a></td>
        </tr>`
    }).join('\n')}
    </table>
</body>
</html>`
};
