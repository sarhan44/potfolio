export interface ProfileData {
    name: string;
    title: string;
    location: {
        city: string;
        state: string;
        country: string;
    };
    followers: number;
    connections: number;
    experience: Experience[];
    education: Education[];
    skills: string[];
}

export interface Experience {
    company: string;
    logo?: string;
    role: string;
    type: string;
    startDate: string;
    endDate?: string;
    location: {
        city: string;
        state: string;
        country: string;
        type: string;
    };
    description: string;
    achievements: string[];
    skills: string[];
}

export interface Education {
    institution: string;
    logo?: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    skills: string[];
}