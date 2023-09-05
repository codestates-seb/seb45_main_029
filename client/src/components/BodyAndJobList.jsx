import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionDesignJob = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
`;

const SectionDesignBody = styled.section`
  margin-right: 1rem;
`;

export default function BodyAndJobList({ list, name, checkHandler, type }) {
  return (
    <>
      {list.map((elem, index) => {
        return (
          <div key={index}>
            {name === 'job' ? (
              <SectionDesignJob>
                <input
                  name={name}
                  type={type}
                  id={elem}
                  onChange={(e) => checkHandler(e, elem, name)}
                />
                <label htmlFor={elem}>{elem}</label>
              </SectionDesignJob>
            ) : (
              <SectionDesignBody>
                <label htmlFor={elem}>{elem}</label>
                <input
                  name={name}
                  type={type}
                  id={elem}
                  onChange={(e) => checkHandler(e, elem, name)}
                />
              </SectionDesignBody>
            )}
          </div>
        );
      })}
    </>
  );
}

BodyAndJobList.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  checkHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
