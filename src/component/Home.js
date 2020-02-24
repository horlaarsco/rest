import React from "react";

function Home() {
  return (
    <div className='container'>
      <div className='row justify-content-between'>
        <div className='w-50 dada p-5'>
          <h1>My Name is Dare Sodiq Olaoluwa</h1>
          <p>
            I am a web developer based in Amsterdam. I create and host elegant,
            hand-coded websites and web applications for my clients. Interested?
          </p>
        </div>
        <div className='w-50 '>
          <img
            className='dadaimg'
            src='https://github.com/horlaarsco/rest/raw/master/public/dada.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
