export interface IPersonalInfo {
    name: string
    location: string
    email: string
    phone: string
    linkedin: string
}

export interface IContainer {
    title: string
    sections: ISection[]
}
export interface ISection {
    duration: string
    title: string
    location: string
    position: string
    responsibilities: string[]
}

export interface IAwards {
    title: string
    sections: {
        duration: string
        description: string
    }[]
}

export interface ISkills {
    title: string
    sections: {
        option: string
        skills: string[]
    }[]
}

export interface ICVData {
    personalInfo: IPersonalInfo
    experience: IContainer[]
    awards: IAwards
    skills: ISkills
}