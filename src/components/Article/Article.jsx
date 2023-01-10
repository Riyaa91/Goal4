import './Article.scss';
import React from 'react'
import box1 from '../../assets/img3.png';
import box2 from '../../assets/img4.png';
import box3 from '../../assets/img5.png';
import tube from '../../assets/img7.png';



const Article = () => {
  return (
    <div className="article-container">
        <div className="article-heading">
            <div className="article-head-1">
                <p>ARTICLES</p>
            </div>
            <div className="article-head-2">
                <p>Find more related articles</p>
            </div>
        </div>
        <div className="article-content">
            <div className="a-content-1">
                <div className="a-img">
                    <img src={box1} alt="" />
                </div>
                <div className="a-min">
                    <p>3 MIN READ</p>
                </div>
                <div className="a-para">
                    <p>1,000 Humanoid Robot Ordered By SELF Labs  </p>
                </div>
                <div className="a-under">
                    <p>Read story</p>
                    <p></p>
                </div>
            </div>
            <div className="a-content-2">
                <div className="a-img">
                        <img src={box2} alt="" />
                    </div>
                    <div className="a-min">
                        <p>3 MIN READ</p>
                    </div>
                    <div className="a-para">
                        <p>The Future Of Gaming</p>
                    </div>
                    <div className="a-under">
                        <p>Read story</p>
                        <p></p>
                    </div>
                </div>
            <div className="a-content-3">
                <div className="a-img">
                        <img src={box3} alt="" />
                    </div>
                    <div className="a-para">
                        <p>Mint Your Memory As An NFT</p>
                    </div>
                    <div className="a-under">
                        <p>Read story</p>
                        <p></p>
                    </div>
                </div>
        </div>
        <div className="article-img-tube">
            <img src={tube} alt="" />
        </div>
    </div>
  )
}

export default Article

