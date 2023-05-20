export interface BodyService  {
    name: string;
    description: string;
    duration: string;
    expiration: string;
    video?: string;
    img?: string;
    available: boolean;
    capacity: number;
    document?: string;
    creatorId: number;
    leadersIds?: string //number[];
    organizationId: number;
}