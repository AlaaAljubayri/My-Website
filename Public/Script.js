// function FetchPage(page)
// {
//     fetch(`/${page}`);
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function()
//     {   if (xhr.readyState === XMLHttpRequest.DONE)
//         {   if(xhr.status===200)
//             {document.querySelector('*').innerHTML = xhr.responseText;}
//             else {console.log(`error ${xhr.status}`);}
//         }
//     };
//     xhr.open('GET',`/${page}`);
//     xhr.send();
// }