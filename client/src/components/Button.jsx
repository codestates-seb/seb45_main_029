function Button({ size, color, onClick, children }) {
  const buttonStyle = getButtonStyle(size, color);

  return (
    <button onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
}

// 버튼 기본 스타일 정의
function getButtonStyle(size, color) {
  const sizeStyle = getSizeStyle(size);
  const colorStyle = getColorStyle(color);

  return {
    ...sizeStyle,
    ...colorStyle,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(90%)',
    },
  };
}

// 버튼 사이즈 정의
function getSizeStyle(size) {
  switch (size) {
    case 'large':
      return {
        width: '145px',
        height: '55px',
        fontSize: '20px',
      };
    case 'small':
      return {
        width: '100px',
        height: '45px',
        fontSize: '15px',
      };
    default:
      return {};
  }
}

// 버튼 색상 정의
function getColorStyle(color) {
  switch (color) {
    case 'white':
      return {
        border: '2px solid #000',
        backgroundColor: '#fff',
      };
    case '#FFFFFF':
      return {
        border: '2px solid #000',
        backgroundColor: '#D7B9FC',
        color: 'white',
      };
    default:
      return {};
  }
}

export default Button;
