import {useEffect, useState} from 'react';
import {getSvg, ICON_TYPE} from "../util/Icon";
import Header from "./Header";

const Blog = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=gustavogomez')
      .then(response => response.json())
      .then(articles => {
        setArticles(articles)
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <Header/>
      <div className={'blogs-container'}>
        {
          articles.map(article => {
            return (
              <div className={'article-container'}>
                <div className={'article-item'}
                     onClick={() => window.open(article.canonical_url, '_blank')}>
                  <p className={'title'}>{article.title}</p>
                  <div className={'article-footer'}>
                    <pre>Gustavo Gomez </pre>
                    {getSvg(ICON_TYPE.DOT, "dot-icon")}

                    <pre> {article.readable_publish_date}  </pre>
                    <div className={'extra-info'}>
                      {getSvg(ICON_TYPE.LIKE, "article-icon")}
                      <pre>{article.positive_reactions_count}  </pre>

                      {getSvg(ICON_TYPE.COMMENT, "article-icon")}
                      <pre>{article.comments_count}</pre>
                    </div>
                  </div>
                </div>
              </div>)
          })
        }
      </div>
    </>
  );
}

export default Blog
