/** @format */

import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		content: "As the sun bids farewell, painting the sky in a myriad of hues.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: []
		},
		username: "moonknight",
		fullName: "Saad Mukadam",
		profileAvatar:
			"https://assets-prd.ignimgs.com/2022/03/17/whythemcusmoonknightisverydifferentfromthecomics36190303moonknightthumb-1642630606707-1647532268585.jpg",
		postImage:
			"https://t4.ftcdn.net/jpg/01/04/78/75/240_F_104787586_63vz1PkylLEfSfZ08dqTnqJqlqdq0eXx.jpg",
		createdAt: "2022-05-01",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				comment: "Nice!",
				fullName: "Faiz Hodekar",
				username: "faizzz01",
				profileAvatar:
					"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			},
			{
				_id: uuid(),
				comment: "Wow!",
				fullName: "Aasim Dongarkar",
				username: "aasimd01",
				profileAvatar:
					"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			}
		]
	},
	{
		_id: uuid(),
		content: "Lost in the tranquility of endless sands and azure waters.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: []
		},
		profileAvatar:
			"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg",
		fullName: "Aasim Dongarkar",
		username: "aasimd01",
		createdAt: "2022-05-11",
		postImage:
			"https://w.forfun.com/fetch/71/71bbad60684ccd1ac7313016a82a0e0a.jpeg",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				comment: "Nice!",
				fullName: "Faiz Hodekar",
				username: "faizzz01",
				profileAvatar:
					"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg",
				createdAt: "2022-05-11",
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			},
			{
				_id: uuid(),
				comment: "Wow!",
				username: "moonknight",
				fullName: "Saad Mukadam",
				profileAvatar:
					"https://assets-prd.ignimgs.com/2022/03/17/whythemcusmoonknightisverydifferentfromthecomics36190303moonknightthumb-1642630606707-1647532268585.jpg",
				createdAt: "2022-05-12",
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			}
		]
	},
	{
		_id: uuid(),
		content:
			"Ordered Meghana's Special Chicken Biryani from Meghana's. Recommend 10/10. ✨  ",
		likes: {
			likeCount: 2,
			likedBy: [
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
			dislikedBy: []
		},
		fullName: "Faiz Hodekar",
		username: "faizzz01",
		profileAvatar:
			"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg",
		postImage: null,
		comments: [
			{
				_id: uuid(),
				comment: "Nice!",
				fullName: "Faiz Hodekar",
				username: "faizzz01",
				profileAvatar:
					"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			},
			{
				_id: uuid(),
				comment: "Wow!",
				fullName: "Aasim Dongarkar",
				username: "aasimd01",
				profileAvatar:
					"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			}
		],
		createdAt: "2022-04-20",
		updatedAt: formatDate()
	},
	{
		_id: uuid(),
		content:
			"Went out for dinner at Chili's Hyderabad. The taste reminds me of back home in Autralia.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: []
		},
		postImage: null,
		fullName: "Faiz Hodekar",
		username: "faizzz01",
		profileAvatar:
			"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg",
		createdAt: "2022-05-05",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				comment: "Nice!",
				fullName: "Faiz Hodekar",
				username: "faizzz01",
				profileAvatar:
					"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg",
				profileAvatar: "https://picsum.photos/id/1005/150",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			},
			{
				_id: uuid(),
				comment: "Wow!",
				fullName: "Aasim Dongarkar",
				username: "aasimd01",
				profileAvatar:
					"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			}
		]
	},
	{
		_id: uuid(),
		content:
			"Went out for dinner at Chili's Hyderabad. The taste reminds me of back home in Autralia.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: []
		},
		postImage: null,
		username: "johndoe",
		fullName: "John Doe",
		createdAt: "2022-05-11",
		profileAvatar: "https://picsum.photos/70/70",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				comment: "Nice!",
				fullName: "Faiz Hodekar",
				username: "faizzz01",
				profileAvatar:
					"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			},
			{
				_id: uuid(),
				comment: "Wow!",
				fullName: "Aasim Dongarkar",
				username: "aasimd01",
				profileAvatar:
					"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			}
		]
	},
	{
		_id: uuid(),
		content:
			"Nairobi is such a great city with so many people going about their business. One thing that you need to know while there are the places where to find great food/meals. Best recommendation is @al_yusra Restaurant located along Banda Street just next to Nation Centre. #Kenya",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: []
		},
		username: "johndoe",
		fullName: "John Doe",
		createdAt: "2022-05-09",
		profileAvatar: "https://picsum.photos/70/70",
		postImage:
			"https://res.cloudinary.com/dwebygldw/image/upload/v1653066477/frittr/E-HqxXdWUAM0z-U_a44utb.jpg",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				comment: "Nice!",
				fullName: "Faiz Hodekar",
				username: "faizzz01",
				profileAvatar:
					"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			},
			{
				_id: uuid(),
				comment: "Wow!",
				fullName: "Aasim Dongarkar",
				username: "aasimd01",
				profileAvatar:
					"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			}
		]
	},
	{
		_id: uuid(),
		content:
			"I met this street food seller in Gyeongju on a recommendation from a dating app. This man was adopted and grew up in US. He moved to Korea to find his birth mother. And he did! I often think back to our conversation #MondayMotivation",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: []
		},
		username: "johndoe",
		fullName: "John Doe",
		profileAvatar: "https://picsum.photos/70/70",
		postImage:
			"https://res.cloudinary.com/dwebygldw/image/upload/v1653067279/frittr/E7OX3WgXoAEu0gR_z9x7zu.jpg",
		createdAt: "2022-05-01",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				comment: "Nice!",
				fullName: "Faiz Hodekar",
				username: "faizzz01",
				profileAvatar:
					"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			},
			{
				_id: uuid(),
				comment: "Wow!",
				fullName: "Aasim Dongarkar",
				username: "aasimd01",
				profileAvatar:
					"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg",
				createdAt: formatDate(),
				updatedAt: formatDate(),
				votes: {
					upvotedBy: [],
					downvotedBy: []
				}
			}
		]
	}
];
