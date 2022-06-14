# Install and Run

:ice_cream: Synchronous app to see basic Redux in action

```
npm i
npm start
```

## Challenge 1

In this step you'll do a bit of refactoring. As you can see, the `App.js` file also holds the `IceCream` component. However, for better code organisation, we want to move the `IceCream` component in its own subdirectory inside the `component` directory.

### Steps

1. Inside the `components` directory, create a subdirectory for the `IceCream` component similar to the ones for the other components.
2. Dont forget to create its own styles file along with the component file!
Move all the style related to the `IceCream` component from the `App` component to the newly created folder.
3. Move all the redux selectors which are needed in the `IceCream` component from the `App` component to the `IceCream` component.

## Challenge 2

In this step you'll make it possible for your ice cream to have a wider range of expressions! The emojis to pick the moods are already displayed below the color menu, but the selection does not work yet.

### Steps

1. In the folder `features`, create the `moodsSlice.js` file modelled upon the existing color slice.
2. Move the moods data from the component to the slice to create the initial state.
3. Create actions to handle the `isSelected` flag correctly.
4. Connect your selectors to both components that need them so that the ice cream expression will reflect your mood selection.
   Remember to add a tick next to the selected menu item.
