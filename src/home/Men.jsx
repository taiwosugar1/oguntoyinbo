import React, { useState } from 'react';
import './Men.css';
import Categories from '../category/Categories';
import Details from '../dropdown/Details';
import Sustainability from '../dropdown/Sustainability';
import CareGuild from '../dropdown/Care-guild';
import ShippingReturn from '../dropdown/Shipping-return'
import Country from '../country/Country';



const Men = () => {
  const [data, setData] = useState([]);
  
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  // Show only the first image as the default
  useState(() => {
    filterResult('men1');
  }, []);

  return (
    <>
     
      <div className='men'>
        <div className="men-shoes">
          {/* Clicking on each image will change the category */}
          <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" onClick={() => filterResult('men1')} />
         
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7H_15n0KOit04rq1lvMrla8DgSzoaprxpF0b6guY3VuxcWLNDyZA5ZHwnLIiQ3aHkcc&usqp=CAU" alt="" className="shoes" onClick={() => filterResult('men2')} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsnLOM6_cp26CSda782E75847TWygd8ujKe5bw8_PEATKfSfzTbQ0WoxKD5dOIDyzO0c&usqp=CAU" alt="" className="shoes" onClick={() => filterResult('men3')} />
          <img src="https://images.pexels.com/photos/4241704/pexels-photo-4241704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" onClick={() => filterResult('men4')} />
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" onClick={() => filterResult('men5')} />
          <img src="https://media.istockphoto.com/id/1391533360/photo/red-sneakers-shoes.jpg?s=612x612&w=0&k=20&c=FkMZ0ys9M6bpUIRmcwbVsd49F4D6cOvSw8XlokskU48=" alt="" className="shoes" onClick={() => filterResult('men6')} />
         
        </div>
        <div className='single-men'>
          {data.map((values) => {
            const { id, image } = values;
            return (
              <div className='product' key={id}>
                <img src={image} alt="" />
              </div>
            );
          })}
          <div className="men-details">
            <div className="men-details-ul">
              <a href="/">Home</a>/
              <a href="/all">Men's Shoes</a>/
              <a href="/shoe">Everyday's Sneakers</a>/
            </div>
            <h1>Men's Tree Runner Go</h1>
            <p>$120  <i> FREE SHIPPING</i></p>
            <p>CLASSICS: Natural Black (Blizzard Sole)</p>
            <div className='round'>
              <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => filterResult('men-white')} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8W12GtTk4PR8EVMhXvs7y1JrnhcF40aCWj8lx5NZUQ&s" alt="" onClick={() => filterResult('men-grey')} />
              <img src="https://i.pinimg.com/236x/09/1d/41/091d41197581931797db31c84a92e136--nike-womens-shoes-nike-shoes-cheap.jpg" alt="" onClick={() => filterResult('men-blue')} />
              <img src="https://i.pinimg.com/736x/cd/16/fb/cd16fb7bde7c4086f2978e4396a4fd16.jpg" alt="" onClick={() => filterResult('men-orange')} />
            </div>
            <p>LIMITED EDITION:</p>
            <img src="https://lh3.googleusercontent.com/proxy/uC_i1eO5LE4si6L5QSuy4oCVukuH7idkJoEyo-hglpTXtTR-QftM5yZXCpL5DCeQwsgVnrjsDL3W0OKlYVnurvJ23aD8PGn94HtiNT07DYehsnAXHZwPHA" alt="" className='men-round' onClick={() => filterResult('men-blue')} />

            <p>SALE:</p>
            <div className='round'>
              <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => filterResult('men-white')} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8W12GtTk4PR8EVMhXvs7y1JrnhcF40aCWj8lx5NZUQ&s" alt="" onClick={() => filterResult('men-grey')} />
              <img src="https://i.pinimg.com/236x/09/1d/41/091d41197581931797db31c84a92e136--nike-womens-shoes-nike-shoes-cheap.jpg" alt="" onClick={() => filterResult('men-blue')} />
              <img src="https://i.pinimg.com/736x/cd/16/fb/cd16fb7bde7c4086f2978e4396a4fd16.jpg" alt="" onClick={() => filterResult('men-orange')} />
              <img src="https://i.pinimg.com/236x/09/1d/41/091d41197581931797db31c84a92e136--nike-womens-shoes-nike-shoes-cheap.jpg" alt="" onClick={() => filterResult('men-blue')} />
              <img src="https://i.pinimg.com/736x/cd/16/fb/cd16fb7bde7c4086f2978e4396a4fd16.jpg" alt="" onClick={() => filterResult('men-orange')} />
            </div>
            <p>SELECT SIZE:</p>
            <div className='round'>
                 <div className="size"><p>8</p></div>
                 <div className="size"><p>9</p></div>
                 <div className="size"><p>10</p></div>
                 <div className="size"><p>11</p></div>
                 <div className="size"><p>12</p></div>
                 <div className="size"><p>13</p></div>
                 <div className="size"><p>14</p></div>
            </div>
            <div className="cart">
              <p>This style is available in whole sizes only. In between sizes? We recommend you <br /> size up.See but <a href="/aboutme">See Size Chart</a></p>

            </div>
            <button className='cart-button'>ADD TO CART $78 <span>$98</span></button>
            <div className="cart2">
            <p>or 4 interest-free payments of $19.50 with <a href="http://www.instagram.com/multibrandprints">multibrand</a>@+</p>
            <Country/>
            </div>
         
          </div>
        </div>
      </div>
      <div className="Tree-Runner-Highlights">
        <h2>Tree Runner Highlights</h2>
        <hr />
        <p>Lightweight, breathable eucalyptus fiber provides next-level comfort</p>
        <hr />
        <p>Cushioned midsole gives wear-all-day support</p>
        <hr />
        <p>Machine-washable materials keep shoes looking like new</p>
      </div>
      <div className="Tree-Runner">
       
        <hr />
        <p><Details/></p>
        <hr />
        <p><Sustainability/></p>
        <hr />
        <p>< CareGuild/></p>
          <hr />
          <p><ShippingReturn/></p>
          <hr />
      </div>
    </>
  )
}

export default Men;