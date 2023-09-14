import PropTypes from 'prop-types';


export default function BodyAndJobList({ list, name, checkHandler, type }) {
  return (
    <ul>
      {list.map((elem, index) => {
        return (
          <li key={index} className={name == 'job' ? 'job-li' : 'body-li'}>
            {name === 'job' ? (
              <>
                <input
                  name={name}
                  type={type}
                  id={elem}
                  onChange={(e) => checkHandler(e, elem, name)}
                />
                <label htmlFor={elem}>{elem}</label>
              </>
            ) : (
              <>
                <label htmlFor={elem}>{elem}</label>
                <input
                  name={name}
                  type={type}
                  id={elem}
                  onChange={(e) => checkHandler(e, elem, name)}
                />
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

BodyAndJobList.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  checkHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
