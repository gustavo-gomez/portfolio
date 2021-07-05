import {useEffect, useState} from 'react';
import '../scss/components/blog.scss';
import {LANGUAGES_TEXT} from '../util/Languages'
import {selectedLanguage, currentDarkMode} from '../slices/generalSettingsSlice'
import {useSelector} from 'react-redux';
import photo from '../images/photo.jpg'
import Icon, {getSvg, ICON_TYPE} from "../util/Icon";
import Header from "./Header";

const Blog = () => {

  const [articles, setArticles] = useState([{
    "type_of": "article",
    "id": 719214,
    "title": "Manage Dark Mode in ReactJs, With Listener to Detect Dark-Mode in the Browser",
    "description": "Nowadays most web/mobile applications have a dark mode presentation. That's why today I will explain...",
    "readable_publish_date": "Jun 6",
    "slug": "manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "path": "/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "comments_count": 1,
    "public_reactions_count": 6,
    "collection_id": null,
    "published_timestamp": "2021-06-06T17:59:02Z",
    "positive_reactions_count": 6,
    "cover_image": null,
    "social_image": "https://dev.to/social_previews/article/719214.png",
    "canonical_url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "created_at": "2021-06-05T20:33:26Z",
    "edited_at": null,
    "crossposted_at": null,
    "published_at": "2021-06-06T17:59:02Z",
    "last_comment_at": "2021-06-18T05:04:04Z",
    "reading_time_minutes": 7,
    "tag_list": ["react"],
    "tags": "react",
    "user": {
      "name": "Gustavo Gomez",
      "username": "gustavogomez",
      "twitter_username": null,
      "github_username": "gustavo-gomez",
      "website_url": null,
      "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--Av4GElem--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg",
      "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--f7cOtUZs--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg"
    }
  }, {
    "type_of": "article",
    "id": 719214,
    "title": "Manage Dark Mode in ReactJs, With Listener to Detect Dark-Mode in the Browser",
    "description": "Nowadays most web/mobile applications have a dark mode presentation. That's why today I will explain...",
    "readable_publish_date": "Jun 6",
    "slug": "manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "path": "/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "comments_count": 1,
    "public_reactions_count": 6,
    "collection_id": null,
    "published_timestamp": "2021-06-06T17:59:02Z",
    "positive_reactions_count": 6,
    "cover_image": null,
    "social_image": "https://dev.to/social_previews/article/719214.png",
    "canonical_url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "created_at": "2021-06-05T20:33:26Z",
    "edited_at": null,
    "crossposted_at": null,
    "published_at": "2021-06-06T17:59:02Z",
    "last_comment_at": "2021-06-18T05:04:04Z",
    "reading_time_minutes": 7,
    "tag_list": ["react"],
    "tags": "react",
    "user": {
      "name": "Gustavo Gomez",
      "username": "gustavogomez",
      "twitter_username": null,
      "github_username": "gustavo-gomez",
      "website_url": null,
      "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--Av4GElem--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg",
      "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--f7cOtUZs--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg"
    }
  }, {
    "type_of": "article",
    "id": 719214,
    "title": "Manage Dark Mode in ReactJs, With Listener to Detect Dark-Mode in the Browser",
    "description": "Nowadays most web/mobile applications have a dark mode presentation. That's why today I will explain...",
    "readable_publish_date": "Jun 6",
    "slug": "manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "path": "/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "comments_count": 1,
    "public_reactions_count": 6,
    "collection_id": null,
    "published_timestamp": "2021-06-06T17:59:02Z",
    "positive_reactions_count": 6,
    "cover_image": null,
    "social_image": "https://dev.to/social_previews/article/719214.png",
    "canonical_url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "created_at": "2021-06-05T20:33:26Z",
    "edited_at": null,
    "crossposted_at": null,
    "published_at": "2021-06-06T17:59:02Z",
    "last_comment_at": "2021-06-18T05:04:04Z",
    "reading_time_minutes": 7,
    "tag_list": ["react"],
    "tags": "react",
    "user": {
      "name": "Gustavo Gomez",
      "username": "gustavogomez",
      "twitter_username": null,
      "github_username": "gustavo-gomez",
      "website_url": null,
      "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--Av4GElem--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg",
      "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--f7cOtUZs--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg"
    }
  }, {
    "type_of": "article",
    "id": 719214,
    "title": "Manage Dark Mode in ReactJs, With Listener to Detect Dark-Mode in the Browser",
    "description": "Nowadays most web/mobile applications have a dark mode presentation. That's why today I will explain...",
    "readable_publish_date": "Jun 6",
    "slug": "manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "path": "/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "comments_count": 1,
    "public_reactions_count": 6,
    "collection_id": null,
    "published_timestamp": "2021-06-06T17:59:02Z",
    "positive_reactions_count": 6,
    "cover_image": null,
    "social_image": "https://dev.to/social_previews/article/719214.png",
    "canonical_url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "created_at": "2021-06-05T20:33:26Z",
    "edited_at": null,
    "crossposted_at": null,
    "published_at": "2021-06-06T17:59:02Z",
    "last_comment_at": "2021-06-18T05:04:04Z",
    "reading_time_minutes": 7,
    "tag_list": ["react"],
    "tags": "react",
    "user": {
      "name": "Gustavo Gomez",
      "username": "gustavogomez",
      "twitter_username": null,
      "github_username": "gustavo-gomez",
      "website_url": null,
      "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--Av4GElem--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg",
      "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--f7cOtUZs--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg"
    }
  }, {
    "type_of": "article",
    "id": 719214,
    "title": "Manage Dark Mode in ReactJs, With Listener to Detect Dark-Mode in the Browser",
    "description": "Nowadays most web/mobile applications have a dark mode presentation. That's why today I will explain...",
    "readable_publish_date": "Jun 6",
    "slug": "manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "path": "/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "comments_count": 1,
    "public_reactions_count": 6,
    "collection_id": null,
    "published_timestamp": "2021-06-06T17:59:02Z",
    "positive_reactions_count": 6,
    "cover_image": null,
    "social_image": "https://dev.to/social_previews/article/719214.png",
    "canonical_url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "created_at": "2021-06-05T20:33:26Z",
    "edited_at": null,
    "crossposted_at": null,
    "published_at": "2021-06-06T17:59:02Z",
    "last_comment_at": "2021-06-18T05:04:04Z",
    "reading_time_minutes": 7,
    "tag_list": ["react"],
    "tags": "react",
    "user": {
      "name": "Gustavo Gomez",
      "username": "gustavogomez",
      "twitter_username": null,
      "github_username": "gustavo-gomez",
      "website_url": null,
      "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--Av4GElem--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg",
      "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--f7cOtUZs--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg"
    }
  }, {
    "type_of": "article",
    "id": 719214,
    "title": "Manage Dark Mode in ReactJs, With Listener to Detect Dark-Mode in the Browser",
    "description": "Nowadays most web/mobile applications have a dark mode presentation. That's why today I will explain...",
    "readable_publish_date": "Jun 6",
    "slug": "manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "path": "/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "comments_count": 1,
    "public_reactions_count": 6,
    "collection_id": null,
    "published_timestamp": "2021-06-06T17:59:02Z",
    "positive_reactions_count": 6,
    "cover_image": null,
    "social_image": "https://dev.to/social_previews/article/719214.png",
    "canonical_url": "https://dev.to/gustavogomez/manage-dark-mode-in-reactjs-with-listener-to-detect-dark-mode-in-the-browser-3120",
    "created_at": "2021-06-05T20:33:26Z",
    "edited_at": null,
    "crossposted_at": null,
    "published_at": "2021-06-06T17:59:02Z",
    "last_comment_at": "2021-06-18T05:04:04Z",
    "reading_time_minutes": 7,
    "tag_list": ["react"],
    "tags": "react",
    "user": {
      "name": "Gustavo Gomez",
      "username": "gustavogomez",
      "twitter_username": null,
      "github_username": "gustavo-gomez",
      "website_url": null,
      "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--Av4GElem--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg",
      "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--f7cOtUZs--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/623072/a841947d-e80e-4537-b1e6-fa88e8ded9a1.jpeg"
    }
  }]);
  const language = useSelector(selectedLanguage);
  const themeColor = useSelector(currentDarkMode);
  const isDarkMode = themeColor === 'dark'

  useEffect(() => {
    // fetch('https://dev.to/api/articles?username=gustavogomez')
    //   .then(response => response.json())
    //   .then(articles => {
    //     setArticles(articles)
    //   })
    //   .catch(error => console.log('error', error));
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
