import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

// it('description of the test', () => {
// 1. start data
// 2. action
// 3. expectation (func expect(start data).toBe(expacting data))
// })
let state = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likes: '12', dislikes: '3' },
        { id: 2, message: "Hi, it's my first post", likes: '16', dislikes: '5' },
        { id: 3, message: 'Goole, nice item to find something', likes: '6', dislikes: '1' },
        { id: 4, message: 'Hello world!', likes: '20', dislikes: '0' },
    ],
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('some new post for testing');

    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(5);
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator('new CORRECT message here');

    let newState = profileReducer(state, action);

    expect(newState.postsData[4].message).toBe('new CORRECT message here');
})

it('length of message should decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(3);
})