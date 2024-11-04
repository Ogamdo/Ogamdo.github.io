Title:UnityUI
Date: 2024-11-05 01:30
Category: Unity


---

### Order of Drawing Canvas and Elements

All UI elements must be positioned as children of a Canvas, and the Canvas is a game object that contains the Canvas component. So, when a Canvas is displayed in the game, how is it shown? The UI elements that are children of that Canvas are drawn in the same order as they appear in the hierarchy. The one at the top is drawn first, followed by the one below it, and so on.

## Resolution

By default, the UI is based on pixel resolution. Since the 3D world in the Scene view uses meters as units, the UI cannot use the Transform component like the objects in the Scene view. Instead, the Rect Transform component should be used.

## Relation to Singleton

UI elements are often related to various aspects such as score, lives, and enemies. Objects that have a specific purpose and should only exist once in the scene should be created as singletons for easier maintenance. 

---