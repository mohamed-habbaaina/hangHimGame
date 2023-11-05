export default function HangmanDrawing() {
  const HEAD = (
    <div
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '10px solid black',
        position: 'absolute',
        top: '50px',
        right: '-30px',
      }}
    ></div>
  );

  const BODY = (
    <div
      style={{
        width: '10px',
        height: '100px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '120px',
        right: 0,
      }}
    ></div>
  );

  const RIGHT_ARM = (
    <div
      style={{
        width: '100px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '135px',
        right: '-90PX',
        rotate: '30deg',
        transformOrigin: 'left bottom',
      }}
    ></div>
  );
  const Left_ARM = (
    <div
      style={{
        width: '100px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '135px',
        right: 0,
        rotate: '-30deg',
        transformOrigin: 'right bottom',
      }}
    ></div>
  );

  const RIGHT_FOOT = (
    <div
      style={{
        width: '120px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '210px',
        right: '-110PX',
        rotate: '60deg',
        transformOrigin: 'left bottom',
      }}
    ></div>
  );

  const LEFT_FOOT = (
    <div
      style={{
        width: '120px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '210px',
        right: 0,
        rotate: '-60deg',
        transformOrigin: 'right bottom',
      }}
    ></div>
  );

  return (
    <>
      <div style={{ position: 'relative' }}>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {Left_ARM}
        {RIGHT_FOOT}
        {LEFT_FOOT}
        <div
          style={{
            height: '50px',
            width: '10px',
            backgroundColor: 'black',
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        ></div>

        <div
          style={{
            height: '10px',
            width: '200px',
            backgroundColor: 'black',
            marginLeft: '120px',
          }}
        ></div>
        <div
          style={{
            height: '420px',
            width: '10px',
            backgroundColor: 'black',
            marginLeft: '120px',
          }}
        ></div>
        <div
          style={{ height: '10px', width: '240px', backgroundColor: 'black' }}
        ></div>
      </div>
    </>
  );
}
