import EducationType from './EducationType'
import WorkType from './WorkType'
import SkillType from './SkillType'

class ResumeDataType {
    constructor(){

    }

    skillmessage: string;
    education : EducationType[];
    work: WorkType[];
    skills: SkillType[];
}

export default ResumeDataType;