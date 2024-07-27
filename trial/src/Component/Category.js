// src/components/Category.js
import React, { useEffect, useState } from 'react';
import './Category.css';


const Category = () => {
  const [count , setCount] = useState(0)
  const [counts , setCounts] = useState(0)
  const [time , settime] = useState(0)
  const [times , settimes] = useState(0)

  function handleClick(){   
      setCount(count + 3)
  }
  useEffect(()=>{
      if(count < 321){
      setTimeout(()=>setCount(count + 1), 5)
      }
  })
  useEffect(()=>{
      if(counts <35){
      setTimeout(()=>setCounts(counts + 1), 5)
      }
  })
  useEffect(()=>{
    if(time <1400){
    setTimeout(()=>settime(time + 1), 1)
    }
})
useEffect(()=>{
  if(times <15){
  setTimeout(()=>settimes(times + 1), 5)
  }
})
  

  return (
    <>
    <div className='classes'>
    <section className='card'> 
 <button className='button1' onClick={handleClick} ><h2 className='h2'>
 {count}<br /><span className='spans'>Amazing Courses</span></h2></button>
 <button className='button1' onClick={handleClick}><h2 className='h2'>
 {counts}<br /><span className='spans'>Talented Instractors</span></h2></button>
   <button className='button1' onClick={handleClick}><h2 className='h2'>
   {time}<br /><span className='spans'>Skilled student</span></h2></button>
   <button className='button1' onClick={handleClick}><h2 className='h2'>
   {times}<br /><span className='spans'>Category</span></h2></button>
   </section>

   <div className='category'>
      <p>what's new</p>
      <h1>Every Single Update From<br />
      Our Blog Page  </h1>
    </div>
    <section className="popular-courses">

    <div class="card2">
 <div class="image">
 <img src='https://demo.themeies.com/elearning-react/static/media/1.1b88ef39.jpg' alt='' />

 </div>
 <div className='card3'>
  <div class="content">
  <span className='lorem'>Creative | 02-7-2024</span><br/><br/>

      <span class="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span><br/><br/>
          <p className='lorem'>Creative | 02-7-2024</p>

      </div>
  </div>
</div>
<div class="card2">
 <div class="image">
 <img src='https://demo.themeies.com/elearning-react/static/media/2.d2a95dab.jpg' alt='' />

 </div>
 <div className='card3'>
  <div class="content">
  <span className="lorem">Creative | 02-7-2024</span><br/><br/>
      <span class="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span><br/><br/>
      <p className='lorem'>Creative | 02-7-2024</p><br/>

      </div>
  </div>
</div>
<div class="card2">
 <div class="image">
  <img src='https://demo.themeies.com/elearning-react/static/media/3.7891d519.jpg' alt='' />
 </div>
 <div className='card3'>
  <div class="content">
    <span className='lorem'>Creative | 02-7-2024</span><br/><br/>
      <span class="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span><br/><br/>
    <p className='lorem'>Creative | 02-7-2024</p><br/>
      </div>
  </div>
</div>
</section>
 </div>
 <div className='src'>
  <div className='card'></div>
 </div>
 <header className="header">
 <div className='class'>
 <section className='card'> 
  <h1>Newsletter Subscription<br/><span className='span'>Get Updated With Latest News</span></h1>
  <div class="input-containers">
  <input type="email" placeholder="Email" />
  <button class="button">Subscribe</button>
</div>
</section>
</div>
</header>
 </>
  );
};

export default Category;
