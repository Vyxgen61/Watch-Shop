import React, { useEffect, useState } from 'react';
import "../../App.css";
import "./style.css";

News.propTypes = {
    
};

function News(props) {
    const [newsList ,setNewsList] = useState([])
    const getNewsList = () => {
        fetch('https://radiant-stream-23882.herokuapp.com/api/v1/posts')
        .then(response => response.json())
        .then(result => setNewsList(result.data));
    }
    useEffect(() => {
        getNewsList()
    },[])

    return (
        <div className = "section_wrap">
        <div className ="section_title">
            <div className ="seperate"></div>
            <h3 className ="name">BÀI VIẾT MỚI</h3>
        </div>
        <div className ="list_wrap">
          {newsList.map((news) => (
             <div className="news" key={news._id}>
                <img src={`https://radiant-stream-23882.herokuapp.com/img/post/${news.logo}`} className='news_img' alt={news.logo} />
                <span className='news_title'>{news.title}</span>
                <span className='news_desc'>{news.contentSub}</span>
            </div>
          ))}
        </div>
    </div>
    );
}

export default News;