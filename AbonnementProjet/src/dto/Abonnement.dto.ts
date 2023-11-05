import { IsNotEmpty, IsEmail } from "class-validator";

export class AbonnementDto{
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    duree: string;
    @IsNotEmpty()
    prix:number;
}