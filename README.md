# universal-list
## an app written in react-native for my personal project at devmtn's first phx cohort 

## problem:
Have you ever written out a shopping list on one of the many available shopping list apps, only to forget to double check it when you actually arrive at the store? Didn't you add milk to the shopping list and forget to tell your roommate about it before she went grocery shopping that one time? How are you supposed to share a shopping list across a household while also remembering to check it when you arrive at Costco? 

## solution:
This app allows you to tag items on a shopping list with a favorite store and, using a location-based API, push notifications to your home screen when you arrive so you don't forget to check items off of your list as you go along. 

## features:
- available on iOS 
- add, remove, and edit items on your shopping list
- save your shopping list to your account so you can check it out again later
- view nearby stores and favorite up to 3 to receive notifications for

## future features:
- support for android
- invite other users to your household so they can share a shopping list with you
- remove users from your household when they move out
- view your anticipated cart total before you even get to the store
- a pantry list: 
    - track items you don't need to update as often (spices, flours, canned goods)
    - edit and view each pantry item's expiration date
- categories for list items, 'view by' category option 

## My HTTP requests

URL | HTTP Verb | REQ | RES
--- | --------- | --- | ----
/api/items | GET | empty | Return all items
/api/items | POST | JSON string | New item added to list
/api/items/:id | GET | empty | Return a single item
/api/items/:id | PUT | JSON string | Update an existing item
/api/items/:id | DELETE | empty | Delete an item from the list

![gif](./assets/screenshots/auth-flow.gif)