
Visualize the state tree in your mind. Focus on the state and solutions:

1. First, check if the state is valid.
2. If it is valid, push it to the solutions array.
3. If it is not a valid state, generate a new state, call the function recursively and backtrack state.

```javascript
solutions =  []
function pattern(state){
    if (valid(state)) {
        // store in solutions array
    }

    for ( /.../) {
        let tmp = state // old state
        newState == "modified state"
        pattern(newState)
        newState == tmp // backtrack
    }
    return solutions
}
```