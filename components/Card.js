import styled from "@emotion/styled";

const Card = ({ movie }) => {
  const { API_URL } = process.env;
  return (
    <CardStyled>
      <div className="poster">
        <img width="400" src={API_URL + movie.poster.url} alt={movie.title} />
      </div>
      <div className="body">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 400px;
  overflow: hidden;
  border: 1px solid #cccccc;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 50px;

  .body {
    padding: 20px;
    h3 {
      margin-bottom: 20px;
    }
    p {
      color: #666666;
      line-height: 1.5;
    }
  }
`;

export default Card;
