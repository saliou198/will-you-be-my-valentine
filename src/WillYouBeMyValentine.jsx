import React, { useState } from 'react';

function YesOrNo() {
  const [scale, setScale] = useState(1);
  const [text, setText] = useState('<3');
  const [move, setMove] = useState(0);
  
  const messages = [
    'are you sure ?',
    'you might break my heart',
    'you will make me cry',
    'Please say yes',
    'I will be very happy',
    'Press yes',
  ];
  
  const random = Math.floor(Math.random() * messages.length);

  function handleClick(event) {
    const name = event.target.name;
    if (name === 'no') {
      setScale((prev) => prev + 0.35);
      setText(messages[random]);
      setMove((prev) => prev+20);
    }
  }

  return (
    <section className="valentine-card">
      <p className="title">Will you be my Valentine?</p>
      <p className="subtitle">{text}</p>

      <div className="button-area">
        <button
          id="yesButton"
          className="Button"
          name="yes"
          onClick={handleClick}
          style={{ transform: `scale(${scale})` }}
        >
          <a href="/ILoveYou.html">Yes</a>
        </button>

        <button
          className="Button"
          id="noButton"
          onClick={handleClick}
          name="no"
          style={{ transform: `translate(${move}px, 0)` }}
        >
          No
        </button>
      </div>
    </section>
  );
}

export default YesOrNo;
