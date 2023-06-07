import reactStringReplace from 'react-string-replace';
import axios from 'axios';
import {
  useContext, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import {
  LinkIds, Posts, InfoLeft, InfoRight, Articles,
  MetaDataInfos, MetaDataImage, PostContent,
} from './postContainerStyle.js';
import { UserContext } from '../../context/userContext.jsx';
import LikesContainer from './LikesContainer/LikesContainer.jsx';
import EditDescription from './EditDescription/EditDescription.jsx';
import OptionsContainer from './OptionsContainer/OptionsContainer.jsx';
import Comments from './Comments/Comments.jsx';
import CommentsContainer from './CommentsContainer/CommentsContainer.jsx';

export default function PostContainer({
  item, handleLinkClick, refresh, setRefresh,
}) {
  const {
    post_id: postId,
    url,
    description,
    name,
    photo,
    created_at: createdAt,
    userLikedPost,
    likeCount,
    likedUsers,
    user_id: userId,
    commentCount,
  } = item;

  const { userData } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem('linkr_token'));
  const [waiting, setWaiting] = useState(false);
  const [editDesc, setEditDesc] = useState(false);
  const [descState, setDescState] = useState(description);
  const [metaData, setMetaData] = useState(null);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonlink.io/api/extract?url=${url}`)
      .then((res) => {
        setMetaData({
          title: res.data.title,
          description: res.data.description,
          images: res.data.images[0],
          url,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <PostContent>
      <Posts data-test="post">
        <OptionsContainer
          userId={userId}
          waiting={waiting}
          setWaiting={setWaiting}
          postId={postId}
          refresh={refresh}
          setRefresh={setRefresh}
          editDesc={editDesc}
          setEditDesc={setEditDesc}
        />
        <InfoLeft>
          <Link to={`/user/${item.user_id}`}>
            <img alt={name} src={photo} />
          </Link>
          <LikesContainer
            likedUsers={likedUsers}
            likeCount={likeCount}
            userLikedPost={userLikedPost}
            postId={postId}
            waiting={waiting}
            setWaiting={setWaiting}
          />
          <Comments
            commentCount={commentCount}
            showComments={showComments}
            setShowComments={setShowComments}
          />
        </InfoLeft>
        <InfoRight>
          <div>
            <h2>
              <Link data-test="username" to={`/user/${item.user_id}`}>
                {name}
              </Link>
            </h2>
          </div>
          {
          !editDesc
            ? (
              <p>
                {reactStringReplace(descState, /(#\w+)/g, (match, i) => (
                  <LinkIds
                    to={`/hashtag/${match.slice(1)}`}
                    key={i}
                    onClick={() => handleLinkClick(match)}
                  >
                    <span>{match}</span>
                  </LinkIds>
                ))}
              </p>
            )
            : (
              <EditDescription
                value={descState}
                token={token}
                setEditDesc={setEditDesc}
                postId={postId}
                userData={userData}
                setDescState={setDescState}
              />
            )
        }
          <LinkIds to={url} target="_blank" data-test="link">
            <Articles>
              <MetaDataInfos>
                <h2>{metaData?.title}</h2>
                <p>{metaData?.description}</p>
                <p>{metaData?.url}</p>
              </MetaDataInfos>
              <MetaDataImage><img alt="a" src={metaData?.images} /></MetaDataImage>
            </Articles>
          </LinkIds>
        </InfoRight>
      </Posts>
      <CommentsContainer userId={userId} postId={postId} showComments={showComments} />
    </PostContent>
  );
}
