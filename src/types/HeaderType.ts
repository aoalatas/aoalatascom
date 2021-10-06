class HeaderType {
    constructor(blog:string, github: string, name: string, description: string ){
        this.blog = blog;
        this.github = github;
        this.name = name;
        this.description= description;
    }

    blog: string;
    github: string;
    name: string;
    description: string;
}

export default HeaderType;