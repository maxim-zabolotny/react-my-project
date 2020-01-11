const FOLLOW = 'ADD-POST';
const UNFOLLOW = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Maxim', status: "boss", location: {city: "Dnipro", country: "Ukraine"}},
        {id: 2, followed: false, fullName: 'Maxim', status: "boss", location: {city: "Dnipro", country: "Ukraine"}},
        {id: 3, followed: true, fullName: 'Maxim', status: "boss", location: {city: "Dnipro", country: "Ukraine"}},
        {id: 4, followed: false, fullName: 'Maxim', status: "boss", location: {city: "Dnipro", country: "Ukraine"}},
    ],
    newPostText: 'it-kamasutra.com'
};

const usersReducer = (state = initialState, action) => {
    case FOLLOW:
        return {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (user.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }

    switch(action.type) {
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) =>
    ({type: UNFOLLOW, userId})

export default usersReducer;