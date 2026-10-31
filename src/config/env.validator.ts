import {plainToInstance} from "class-transformer"
import {IsIn,IsInt,IsUrl,Max,Min,validateSync} from "class-validator"


export class EnvironmentVariables {
    @IsIn(['development','test','production'])
    NODE_ENV!:string;

    @IsInt()
    @Min(1)
    @Max(65535)
    PORT!:number;

    @IsUrl({require_tld:false})
    FRONTEND_URL!:string;
}

export function validateEnv(confifg:Record<string,unknown>){
    const validated = plainToInstance(EnvironmentVariables,confifg,{
        enableImplicitConversion:true
    })

    const errors = validateSync(validated)
    if(errors.length > 0){
        throw new Error(errors.toString())
    }

    return validated
}