// Q.1 - For the given JSON iterate over all for loops (for, for in, for of, forEach)

var json = [
  {
    id: '1',
    msg: 'First One',
    dateTime: '26-05-2022 23:35',
    email: 'first1@gmail.com',
  },
  {
    id: '2',
    msg: 'Second One',
    dateTime: '26-05-2022 23:45',
    fromWho: 'second1@gmail.com',
  },
];

for (var i = 0; i < json.length; i++) {
  console.log(json[i]);
}

for (let key in json) {
  console.log(json[key]);
}

for (let key of json) {
  console.log(key);
}

json.forEach((data) => console.log(data));

// Q.2 - Create your own resume data in JSON format

 [
  {
    'name': 'Shangeeth SS',
    'label': 'Full-Stack Developer',
    'email': 'shangeeth@gmail.com',
    'phone': 8878767666,
    'address': 'India',
    'skils': 'Coding',
    'languages': 'Tamil , English , Hindi',
    'interests': 'Games'
  }
];
