

/*

TASKS
------
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably */
import { users } from "./data.js";
export function getActiveUsers(active) {
    return users.filter(userObj => userObj.active );
}

export function getActiveUserNames() {
    return users.filter(user => user.active).map(user => user.name) ;
}


export function AdminExists(admin) {
    return users.some(userObj => userObj.role === "admin");
}

export function getUserByID(id) {

    return users.find(userObj => userObj.id === id);
}

export function DeactivateUser(userid) {
    return users.map(user => user.id == userid ? {...user ,active : false} : user )
    
}
