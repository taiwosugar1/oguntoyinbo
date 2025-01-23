import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Works.css"
import { FaLink } from 'react-icons/fa';


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
   <h3><span style={{color:'royalblue'}}>P</span>rojects Completed</h3>   
    <nav className='nav'>
    
    <ul>
      <li style={{color:"royablue", fontWeight:"600"}}onClick={()=>setData(Categories)}>All</li>
      <li onClick={()=>filterResult('web')}> Web development</li>
      <li onClick={()=>filterResult('print')}>Printing Production</li>
    </ul>
</nav>
<br />

<div className="work-done-box">
{data.map((values)=>{
          const {id, name, image, weblink, profession}=values;
        
          return(
              <>
              <Link to={weblink}>
                  <div className="work-done" key={id}>
                    <img src={image} alt="" />
                    <h3>{name}</h3>
                    <p>{profession}</p>
                    <Link to={weblink} className='view-web'>
                       View <FaLink />
                    </Link>
                  </div>
                  </Link>
          
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
    name: "https://multibrandprints.com.ng",
    image: 'image/web10.png',
    profession: "Printing Website",
    category: "web",
    weblink:"https://multibrandprints.com.ng/"
  },
  {
    id: 2,
    name: "https://diamondvisa.com",
    image: 'image/web8-image.png',
    profession: " Immigration Website",
    category: "web",
    weblink:"https://diamond-visa.vercel.app/"
  },
  {
    id: 3,
    name: "https://zeavix.com.",
    image: 'image/zeavix.png',
    profession: " Business Website",
    category: "web",
    weblink:"https://www.zeavix.com/"
  },

  {
    id: 4,
    name: "https://adcoreconsulting.com",
    image: 'image/adcore.png',
    profession: " Business Website",
    category: "web",
    weblink:"https://adcoreconsulting.vercel.app/"
  },

  {
    id: 5,
    name: "https://wellnessmartialart.com",
    image: 'image/web20.png',
    profession: "Web development",
    category: "web",
    weblink:"https://wellnessmartialart.vercel.app/"
  },

  {
    id: 6,
    name: "https://church.com.",
    image: 'image/church.png',
    profession: " Church Website",
    category: "web",
    weblink:"https://churchit.vercel.app//"
  },
 
  {
    id: 7,
    name: "https://tapecommunications.com",
    image: 'image/tape.png',
    profession: "Media Website",
    category: "web",
    weblink:"https://www.tapecommunications.com/"
  },
  {
    id: 8,
    name: "https://bsolusholaenergy.ng",
    image: 'image/web25.png',
    profession: "Eletrical Website",
    category: "web",
    weblink:"https://bsolusholaenergy.ng"
  },

  {
    id: 9,
    name: "https://printhub.com.ng",
    image: 'image/printhub.png',
    profession: " Business Website",
    category: "web",
    weblink:"https://printhub-omega.vercel.app/"
  },
  {
    id: 10,
    name: "https://linkyoutube.com",
    image: 'image/y.png',
    profession: " Youtube Video Saver Website",
    category: "web",
    weblink:"https://linkyoutube.vercel.app/"
  },

  {
    id: 17,
    name: "Music Web Application",
    image: 'image/web5-image.png',
    profession: "Web Applications",
    category: "web",
    weblink:"https://music-eight-rose.vercel.app/"
  },

  {
  id: 13,
  name: "E-commerce Web Development",
  image: 'image/web1-image.png',
  profession: "Web development",
  category: "web",
  weblink:"https://new-ecommerce-sooty.vercel.app//"
},
{
  id: 14,
  name: "Social Media Application",
  image: 'image/web2-image.png',
  profession: "Web development",
  category: "web",
 weblink:"https://myreact-social.vercel.app/"
},
{
  id: 15,
  name: "Professional Website",
  image: 'image/web3-image.png',
  profession: "Web development",
  category: "web",
  weblink:"https://my-css-layout-project.vercel.app/"
},

{
  id: 16,
  name: "E-commerce Sell App",
  image: 'image/web7-image.png',
  profession: "E-commerce App",
  category: "web",
  weblink:"https://product-kappa-beryl.vercel.app/"
},

// {
//   id: 7,
//   name: "Company / Product Branding",
//   image: 'image/metaphor.png',
//   profession: "Signage Branding",
//   category: "print",
//   weblink:"https://www.instagram.com/p/Cw9kaeiMzha/"
// },
// {
//   id: 8,
//   name: "Company Branding / Decoration",
//   image: 'image/signage.png',
//   profession: "Company Branding",
//   category: "print",
//   weblink:"https://www.instagram.com/p/CwnJNQesPXT/"
// },
// {
//   id: 9,
//   name: "Book Printing / Publication",
//   image: 'image/book2.png',
//   profession: "Book Publication",
//   category: "print",
//   weblink:"https://www.instagram.com/p/CwcWf6bAeEw/"
// },
// {
//   id: 10,
//   name: "Product Branding Box",
//   image: 'image/pizza.png',
//   profession: "Box Printing / Branding",
//   category: "print",
//   weblink:"https://www.instagram.com/p/C06cDWxM0IY/"
// },
// {
//   id: 11,
//   name: "Carrier Bag Production",
//   image: 'image/bag-image.png',
//   profession: "Bag Printing ",
//   category: "print",
//   weblink:"https://www.instagram.com/p/C7Yjbb2MDr0/"
// },
// {
//   id: 12,
//   name: "Diary Publication",
//   image: 'image/book-image.png',
//   profession: "Printing Production",
//   category: "print",
//   weblink:"https://www.instagram.com/p/Clbw6WfsYJ9/"
// },

// {
//   id: 11,
//   name: "Music Web Application",
//   image: 'image/web5-image.png',
//   profession: "Web Aoolications",
//   category: "web",
//   weblink:"https://music-eight-rose.vercel.app/"
// },
]
