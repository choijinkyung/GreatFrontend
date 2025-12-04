# Data Merging

**Difficulty:** Medium  
**Recommended Interview Time:** 20 minutes  

## Description

You are given a list of gym session records. Each record contains:

- **user**: The user ID  
- **duration**: The duration of the session (in minutes)  
- **equipment**: An array of equipment used during the session  
  - already sorted alphabetically  
  - equipment comes from a fixed set of 5 possible values  

Your task is to implement the function:

```js
//Input data
[
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];

//Output data
mergeData(sessions);
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];

```