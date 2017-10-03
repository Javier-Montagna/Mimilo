// module imports
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

// user define services
import { UserService } from "./user.service";

@NgModule({
    declarations: [
    ],
    imports: [
        SharedModule
    ],
    providers: [
        UserService
    ],
    exports: [
    ]
})

export class UserModule { }