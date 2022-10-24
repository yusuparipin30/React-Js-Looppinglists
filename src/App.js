//MEMBUAT LOOPING LISTS (berfungsi untuk merubah variable) dan jangan lupa mengimport di react library
import { useState } from "react"
// //LOOPING , apabila kita ingin mengoutput lists data dari database bisa menggunakan fungsi map pada javascrippt
// //contoh membuat state baru yaitu products dan state nya adalah setProducts, data terdapat array object yaitu
function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ]);
 
  //Kita dapat mengoutput list data pada react dengan memanfaatkan fungsi map pada javascript.
  //"penting" di sini kita akan melooping menggunakan lits ul
  // dan bisa menggunakan dinamic value {products.map} dan mengambil setiap item dari productnya
 // selanjutnya membuat erofunction menggunakan looping jsx syntax menggunakan-
// tag lists dan bisa mengeksekusi productnya=> (<li key={product.id}>{ product.title} - { product.price}</li>)
 //setiap looping membutuhkan uniq KEY
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={ product.id }> { product.title } - { product.price } </li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;