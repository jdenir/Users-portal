import { User } from 'src/app/model/user'
export class Document {
    id: number;
    docName: string;
    author: string;
    creationDate: Date;
    authorization: number;
    file: File;
    users : User[];
}