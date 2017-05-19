import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const AUTH = 'Client-ID 68115450b21d29f712e08ebf8c6389f38f4e6f223d97157f77e5076dc64e483f';

export default () => {
  return axios({
    method: 'get',
    url: `${API_URL}/photos/random`,
    headers: {
      Authorization: AUTH
    },
    params: {
      featured: true,
      query: 'girl',
      count: 30
    }
  }).then(response => Promise.resolve({
    photos: response.data,
    photo: response.data[0],
    limit: response.headers['x-ratelimit-limit'] * 1,
    remaining: response.headers['x-ratelimit-remaining'] * 1
  }));
}

// export default () => {
//   return Promise.resolve({
//     photo: {
//       "id": "uS2AiyPQVHM",
//       "created_at": "2015-11-09T17:45:53-05:00",
//       "updated_at": "2017-05-16T05:22:55-04:00",
//       "width": 5760,
//       "height": 3840,
//       "color": "#596965",
//       "slug": null,
//       "downloads": 3710,
//       "likes": 41,
//       "views": 344083,
//       "liked_by_user": false,
//       "exif": {
//         "make": "Canon",
//         "model": "Canon EOS 5D Mark III",
//         "exposure_time": "1/4000",
//         "aperture": "5.0",
//         "focal_length": "35",
//         "iso": 160
//       },
//       "location": {
//         "title": "San Pedro de Atacama, Chile",
//         "name": "San Pedro de Atacama",
//         "city": "San Pedro de Atacama",
//         "country": "Chile",
//         "position": {
//           "latitude": -22.9087073,
//           "longitude": -68.1997156
//         }
//       },
//       "current_user_collections": [],
//       "urls": {
//         "raw": "https://images.unsplash.com/photo-1447109048072-e9278d5fd94c",
//         "full": "https://images.unsplash.com/photo-1447109048072-e9278d5fd94c?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=411efe056074fb0c2cdcef080d8ce0f6",
//         "regular": "https://images.unsplash.com/photo-1447109048072-e9278d5fd94c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f3513a62a04f661259d21c1fc75bfc1e",
//         "small": "https://images.unsplash.com/photo-1447109048072-e9278d5fd94c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=b2c4dd930ed5d5eade8239111b652a67",
//         "thumb": "https://images.unsplash.com/photo-1447109048072-e9278d5fd94c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=d17f1a8177b3cfcf5299783bcffa135a"
//       },
//       "categories": [
//         {
//           "id": 4,
//           "title": "Nature",
//           "photo_count": 54184,
//           "links": {
//             "self": "https://api.unsplash.com/categories/4",
//             "photos": "https://api.unsplash.com/categories/4/photos"
//           }
//         }
//       ],
//       "links": {
//         "self": "https://api.unsplash.com/photos/uS2AiyPQVHM",
//         "html": "http://unsplash.com/photos/uS2AiyPQVHM",
//         "download": "http://unsplash.com/photos/uS2AiyPQVHM/download",
//         "download_location": "https://api.unsplash.com/photos/uS2AiyPQVHM/download"
//       },
//       "user": {
//         "id": "Org6rBPeeAQ",
//         "updated_at": "2017-05-19T06:15:44-04:00",
//         "username": "pagsa_",
//         "name": "Pablo Garcia Saldaña",
//         "first_name": "Pablo",
//         "last_name": "Garcia Saldaña",
//         "portfolio_url": "http://www.garciasaldana.com",
//         "bio": "Self taught cinematographer and landscape photographer. \r\nFound love in photography thanks to the revolution of DSLR´s.\r\nCurrently in Mexico city where I work as a freelance filmmaker, \r\nfeel free to contact me.",
//         "location": "Mexico,City",
//         "total_likes": 62,
//         "total_photos": 77,
//         "total_collections": 1,
//         "profile_image": {
//           "small": "https://images.unsplash.com/profile-1463699072698-7e90bcd253f6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55bcfd54d3c4194e10b4b4605554ecbe",
//           "medium": "https://images.unsplash.com/profile-1463699072698-7e90bcd253f6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=ef196da84273dd247a483dfe32ed5507",
//           "large": "https://images.unsplash.com/profile-1463699072698-7e90bcd253f6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=b6e6e6925b91cb6c8059dde0e9b3341f"
//         },
//         "links": {
//           "self": "https://api.unsplash.com/users/pagsa_",
//           "html": "http://unsplash.com/@pagsa_",
//           "photos": "https://api.unsplash.com/users/pagsa_/photos",
//           "likes": "https://api.unsplash.com/users/pagsa_/likes",
//           "portfolio": "https://api.unsplash.com/users/pagsa_/portfolio",
//           "following": "https://api.unsplash.com/users/pagsa_/following",
//           "followers": "https://api.unsplash.com/users/pagsa_/followers"
//         }
//       }
//     },
//     limit: 40, remaining: 30
//   });
// }
