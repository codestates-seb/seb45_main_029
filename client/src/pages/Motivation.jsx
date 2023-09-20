
import {Motivation , MotivationSection , MotivationPages} from "../style/Motivation"
import MotivationNav from "../components/MotivationNav";
import MotivationForm from "../components/MotivationForm"
import MotivationList from "../components/MotivationList"

const MotivationPage = () => {
  return(
    <Motivation>
      <section className="content_pd container_wt">
        <MotivationNav/>
        <MotivationSection>
          <h2>나의 <span>다짐</span></h2>
          <MotivationPages>
            <MotivationList />
            <MotivationForm />
          </MotivationPages>
        </MotivationSection>
      </section>
    </Motivation>
  )
}

export default MotivationPage;