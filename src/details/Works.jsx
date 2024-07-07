import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Works.css"


export const Works = () => {
  const [data, setData]=useState(Categories)
  const filterResult=(catItem)=>{
     const result=Categories.filter((curData)=>{
      return curData.category===catItem;
     });
     setData(result)
  }
  return (
   <div className='work-container'>   
    <nav className='nav'>
    <h3><span style={{color:'royalblue'}}>W</span>orks</h3> 
    <ul>
      <li style={{color:"royablue", fontWeight:"600"}}onClick={()=>setData(Categories)}>All</li>
      <li onClick={()=>filterResult('web')}> Web development</li>
      <li onClick={()=>filterResult('print')}>Printing Production</li>
    </ul>
</nav>
<hr />

<div className="work-done-box">


{data.map((values)=>{
          const {id, name, image, weblink, profession}=values;

        
          return(
              <>
               <div className='.work-done-box' key={id}>

                  <div className="work-done">
                    <div className="work" key={id}><Link to={weblink}><img src={image} alt="" /></Link>
                    <h3>{name}</h3>
                    <p>{profession}</p>
                  </div>
             </div>
           </div>
              </>
          )
      })}


</div>
</div>
  )
}

export const Categories = [
  {
    id: 1,
    name: "E-commerce Sell App",
    image: 'image/web7-image.png',
    profession: "E-commerce App",
    category: "web",
    weblink:"https://product-kappa-beryl.vercel.app/"
  },
  
  {
  id: 2,
  name: "E-commerce Web Development",
  image: 'image/web1-image.png',
  profession: "Web development",
  category: "web",
  weblink:"https://new-ecommerce-sooty.vercel.app//"
},
{
  id: 3,
  name: "Social Media Application",
  image: 'image/web2-image.png',
  profession: "Web development",
  category: "web",
 weblink:"https://my-react-beta.vercel.app/"
},
{
  id: 4,
  name: "Professional Website",
  image: 'image/web3-image.png',
  profession: "Web development",
  category: "web",
  weblink:"https://my-css-layout-project.vercel.app/"
},
{
  id: 5,
  name: "Company Website",
  image: 'image/web4-image.png',
  profession: "Web development",
  category: "web",
  weblink:"https://multibrand-digital.vercel.app/"
},
{
  id: 6,
  name: "Music Web Application",
  image: 'image/web5-image.png',
  profession: "Web Aoolications",
  category: "web",
  weblink:"https://music-eight-rose.vercel.app/"
},

{
  id: 7,
  name: "Company / Product Branding",
  image: 'image/metaphor.png',
  profession: "Signage Branding",
  category: "print",
  weblink:"https://www.instagram.com/p/Cw9kaeiMzha/"
},
{
  id: 8,
  name: "Company Branding / Decoration",
  image: 'image/signage.png',
  profession: "Company Branding",
  category: "print",
  weblink:"https://www.instagram.com/p/CwnJNQesPXT/"
},
{
  id: 9,
  name: "Book Printing / Publication",
  image: 'image/book2.png',
  profession: "Book Publication",
  category: "print",
  weblink:"https://www.instagram.com/p/CwcWf6bAeEw/"
},
{
  id: 10,
  name: "Product Branding Box",
  image: 'image/pizza.png',
  profession: "Box Printing / Branding",
  category: "print",
  weblink:"https://www.instagram.com/p/C06cDWxM0IY/"
},
{
  id: 11,
  name: "Carrier Bag Production",
  image: 'image/bag-image.png',
  profession: "Bag Printing ",
  category: "print",
  weblink:"https://www.instagram.com/p/C7Yjbb2MDr0/"
},
{
  id: 12,
  name: "Diary Publication",
  image: 'image/book-image.png',
  profession: "Printing Production",
  category: "print",
  weblink:"https://www.instagram.com/p/Clbw6WfsYJ9/"
},
{
  id: 13,
  name: "Immigration Website",
  image: 'image/web8-image.png',
  profession: " Personal Website",
  category: "web",
  weblink:"https://diamond-visa.vercel.app/"
},
// {
//   id: 11,
//   name: "Music Web Application",
//   image: 'image/web5-image.png',
//   profession: "Web Aoolications",
//   category: "web",
//   weblink:"https://music-eight-rose.vercel.app/"
// },
]
