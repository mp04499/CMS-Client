/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from "react";
import {ArticleContext} from "../contexts/ArticleContext";
import ArticleList from "./ArticleList";
import "../../css/Article.css";

const ArticleTile = () => {

  const {showNews, setShowNews} = useContext(ArticleContext);

  return (
    <div className="tile is-child box Article">
      <div className="title">
        <nav className={"level"}>
          <div className={"level-left"}>
            <div className={"level-item"}>
              News
            </div>
          </div>
          <div className={"level-right"}>
            <div className={"level-item"}>
              <a
                className={!showNews ? "button is-primary is-outlined" : "button is-primary is-outlined is-loading"}
                onClick={() => setShowNews(!showNews)}
              >
                Refresh News
              </a>
            </div>
          </div>
        </nav>
      </div>
      {showNews === true
        ? <progress className="progress is-primary" max="100">15%</progress>
        : <ArticleList/>
      }
    </div>
  )
};

export default ArticleTile;
