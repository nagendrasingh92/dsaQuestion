import { questionData } from '../../constant/constant';

import AccordionComp from '../../components/AccordionComp';
import './index.scss';

const DsaQuestion = () => {
    return (
        <div className='dsaQuestionWrap'>
            {questionData?.map((item, index) => (
                <div key={index} className='questionWrap'>
                    <div>
                        {item.id}
                    </div>
                    <AccordionComp question={item.question} solution={item.solution}/>
                </div>
            ))
            }


        </div>
    )
}

export default DsaQuestion;