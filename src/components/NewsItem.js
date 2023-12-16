import React from 'react';

const NewsItem = props => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  const timeLapsed = () => {
    // Target time in UTC format
    const targetTime = new Date(date);

    // Current time
    const currentTime = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentTime - targetTime;

    // Calculate the time spent in seconds, minutes, hours, and days
    const seconds = Math.abs(Math.floor(timeDifference / 1000));
    const minutes = Math.abs(Math.floor(timeDifference / (1000 * 60)));
    const hours = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60)));
    const days = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));

    let timeDenomination = ['d', 'h', 'min', 'sec'];
    let timeCategory = [days, hours, minutes, seconds];
    let i = 0;
    for (i = 0; i < 4; i++) {
      if (timeCategory[i] > 0) {
        break;
      }
    }
    return timeCategory[i] + timeDenomination[i] + ' ago';
  };

  const currentDateTime = new Date(date).toLocaleString(
    'en-IN',
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  return (
    <div>
      <div className="card mx-1 my-2">
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
          }}
        >
          <span className=" badge rounded-pill bg-info">
            <small>{source}</small>
          </span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : 'Unknown'} - {currentDateTime}.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
