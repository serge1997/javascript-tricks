import { Container } from "./container.js";
import { User } from "./user.js";
import { UserBuilder } from "./userBuilder.js";
import { ApiModule } from "./api.js";

var container = new Container();

container.bind("ApiModule", function() {
    return new ApiModule();
})
container.bind("User", () => {
    return new User();
})

var Api = container.resolve("ApiModule");
var userService = container.resolve("User");
export { Api, userService};
