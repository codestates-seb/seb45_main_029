import {
  Motivation,
  MotivationSection,
  MotivationPages,
} from '../style/Motivation';
import MotivationNav from '../components/MotivationNav';
import MotivationForm from '../components/MotivationForm';
import MotivationList from '../components/MotivationList';
import { useState } from 'react';

const MotivationPage = () => {
  const [isPost, setIsPost] = useState(false);
  return (
    <Motivation>
      <section className='content_pd container_wt'>
        <MotivationNav />
        <MotivationSection>
          <h2>
            나의 <span>다짐</span>
          </h2>
          <MotivationPages>
            <MotivationList isPost={isPost} />
            <MotivationForm isPost={isPost} setIsPost={setIsPost} />
          </MotivationPages>
        </MotivationSection>
      </section>
    </Motivation>
  );
};

export default MotivationPage;
