import AddressType from './AddressType'
import SocialType from './SocialType'

class MainDataType {
    constructor(){

    }

    name:string;
    description:string;
    image:string;
    bio:string;
    contactmessage:string;
    email:string;
    phone:string;
    github:string;
    blog:string;
    address:AddressType;
    website: string;
    resumedownload:string;
    social: SocialType[];
}

export default MainDataType;