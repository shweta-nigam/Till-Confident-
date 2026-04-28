export class ApiResponse <T> {
    constructor (
        public message: string =  "Success",
        public data: T | null = null,
        public success = true
    ) {}

   static ok<T> (res : any,message : string, data : T | null = null) {
 return res.status(200).json(new ApiResponse(message, data));
   }

   static created <T> (res:any, message: string, data: T | null = null) {
    return res.status(201).json(new ApiResponse(message, data))
   }

   static noContent(res: any){
    return res.status(204).send()
   }

}