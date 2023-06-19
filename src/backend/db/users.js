/** @format */
import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		fullName: "Aasim Dongarkar",
		username: "aasimd01",
		password: "aasimd123",
		bio: "Hey there, Aasim here. I'm aspired to be a Webdeveloper at NeoGcamp.",
		website: "https://github.com/aasimd",
		profileAvatar:
			"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bookmarks: [],
		following: [
			{
				_id: uuid(),
				fullName: "John Doe",
				username: "johndoe",
				profileAvatar: "https://picsum.photos/70/70"
			}
			// {
			// 	_id: uuid(),
			// 	username: "moonknight",
			// 	fullName: "Saad Mukadam",
			// 	profileAvatar:
			// 		"https://assets-prd.ignimgs.com/2022/03/17/whythemcusmoonknightisverydifferentfromthecomics36190303moonknightthumb-1642630606707-1647532268585.jpg"
			// }
		],
		followers: [
			{
				_id: uuid(),
				fullName: "John Doe",
				username: "johndoe",
				profileAvatar: "https://picsum.photos/70/70"
			},
			{
				_id: uuid(),
				username: "moonknight",
				fullName: "Saad Mukadam",
				profileAvatar:
					"https://assets-prd.ignimgs.com/2022/03/17/whythemcusmoonknightisverydifferentfromthecomics36190303moonknightthumb-1642630606707-1647532268585.jpg"
			},
			{
				_id: uuid(),
				fullName: "Faiz Hodekar",
				username: "faizzz01",
				profileAvatar:
					"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg"
			}
		]
	},
	{
		_id: uuid(),
		fullName: "John Doe",
		username: "johndoe",
		password: "123john",
		bio: "Hey there, John here",
		website: "https://www.johndoe.com",
		profileAvatar: "https://picsum.photos/70/70",
		createdAt: "2022-05-05",
		updatedAt: formatDate(),
		bookmarks: [],
		following: [
			{
				_id: uuid(),
				fullName: "Aasim Dongarkar",
				username: "aasimd01",
				profileAvatar:
					"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg"
			},
			{
				_id: uuid(),
				username: "moonknight",
				fullName: "Saad Mukadam",
				profileAvatar:
					"https://assets-prd.ignimgs.com/2022/03/17/whythemcusmoonknightisverydifferentfromthecomics36190303moonknightthumb-1642630606707-1647532268585.jpg"
			}
		],
		followers: [
			{
				_id: uuid(),
				fullName: "Faiz Hodekar",
				username: "faizzz01",
				profileAvatar:
					"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg"
			},
			{
				_id: uuid(),
				fullName: "Aasim Dongarkar",
				username: "aasimd01",
				profileAvatar:
					"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg"
			}
		]
	},
	{
		_id: uuid(),
		fullName: "Faiz Hodekar",
		username: "faizzz01",
		profileAvatar:
			"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg",
		password: "faiz123",
		bio: "Hey there, Faiz here. I like Cars.",
		website: "https://www.instagram.com/faiz_hodekar_/",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bookmarks: [],
		following: [
			{
				_id: uuid(),
				fullName: "Aasim Dongarkar",
				username: "aasimd01",
				profileAvatar:
					"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg"
			},
			{
				_id: uuid(),
				fullName: "John Doe",
				username: "johndoe",
				profileAvatar: "https://picsum.photos/70/70"
			}
		],
		followers: [
			{
				_id: uuid(),
				username: "moonknight",
				fullName: "Saad Mukadam",
				profileAvatar:
					"https://assets-prd.ignimgs.com/2022/03/17/whythemcusmoonknightisverydifferentfromthecomics36190303moonknightthumb-1642630606707-1647532268585.jpg"
			}
		]
	},
	{
		_id: uuid(),
		username: "moonknight",
		fullName: "Saad Mukadam",
		password: "moon123",
		bio: "Hello People, Saaaad here! I like to capture beautiful moments through light.",
		website: "https://www.instagram.com/saad_009__/",
		profileAvatar:
			"https://assets-prd.ignimgs.com/2022/03/17/whythemcusmoonknightisverydifferentfromthecomics36190303moonknightthumb-1642630606707-1647532268585.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bookmarks: [],
		following: [
			{
				_id: uuid(),
				fullName: "Aasim Dongarkar",
				username: "aasimd01",
				profileAvatar:
					"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg"
			},
			{
				_id: uuid(),
				fullName: "Faiz Hodekar",
				username: "faizzz01",
				profileAvatar:
					"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg"
			}
		],
		followers: [
			{
				_id: uuid(),
				fullName: "John Doe",
				username: "johndoe",
				profileAvatar: "https://picsum.photos/70/70"
			},
			{
				_id: uuid(),
				fullName: "Faiz Hodekar",
				username: "faizzz01",
				profileAvatar:
					"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg"
			}
		]
	}
];
